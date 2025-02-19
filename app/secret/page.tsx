import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth()

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div className='text-4xl'>Sign in to view this page</div>
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  // Use `user` to render user details or create UI elements
  if (!user) {
    return <div>Loading...</div>; // Handle the case where user is null
  }

  return <div className='text-4xl'>Welcome, {user.firstName}!</div>
}