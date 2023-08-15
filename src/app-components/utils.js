import { redirect } from "react-router-dom";

// Function to check if the user is authenticated
export async function requireAuth(request) {
  // Get the current pathname from the request URL
  const pathname = new URL(request.url).pathname;

  // Check if the user is logged in based on the presence of a token in localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;

  // If the user is not logged in, redirect to the login page
  if (!isLoggedIn) {
    // Create a redirect response with a message and a redirection path
    const response = redirect(
      `/login?message=You must log in first&redirectTo=${pathname}`
    );

    // Set the response body to true
    response.body = true;

    // Throw the redirect response to trigger the redirection
    throw response;
  }
}
