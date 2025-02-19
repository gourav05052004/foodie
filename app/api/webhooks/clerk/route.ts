"use server"; // Ensures this runs on the server side

import { clerkClient, WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser } from "@/lib/actions/user.action";

export async function POST(req: Request) {
  // Load Webhook secret from environment variables
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get required headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get request payload
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance for webhook verification
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    // Verify webhook payload
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred during verification", {
      status: 400,
    });
  }

  // Extract event details
  const { id } = evt.data;
  const eventType = evt.type;

  // Handle user creation event
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;

    // Ensure username is not null or undefined
    const safeUsername = username || email_addresses[0]?.email_address.split("@")[0];

    const user = {
      clerkId: id,
      email: email_addresses[0]?.email_address || "",
      username: safeUsername,
      firstName: first_name || "",
      lastName: last_name || "",
      photo: image_url || "",
    };

    console.log("New user data:", user);

    const newUser = await createUser(user);

    if (newUser) {
      // Update Clerk user metadata with the MongoDB user ID
      await (await clerkClient()).users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id.toString(),
        },
      });
    }

    return NextResponse.json({ message: "New user created", user: newUser });
  }

  console.log(`Webhook received: ID=${id}, Type=${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
