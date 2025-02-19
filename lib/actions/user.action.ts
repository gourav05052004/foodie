"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

// Define a User interface
interface User {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  password?: string; // Make password optional
}

export async function createUser(user: User) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}