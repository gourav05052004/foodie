"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

// Define a User interface
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // Add other fields as necessary
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