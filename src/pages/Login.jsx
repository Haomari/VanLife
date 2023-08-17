import {
  Link,
  useLoaderData,
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import React, { useState, useRef } from "react";

import { loginUser } from "../app-components/api";
import Loading from "../app-components/Loading";

// Loader function for handling data from URL request
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// Action function for form submission
export async function action({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");
  const email = formData.get("email");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);

    const pathname = new URL(request.url).searchParams.get("redirectTo");

    const response = redirect(pathname ? pathname : "/host");
    response.body = true;
    return response;
  } catch (err) {
    localStorage.clear();
    new URL(request.url).searchParams.delete("message");
    return err;
  }
}

// Main component for the login page
export default function Login() {
  // React hooks for managing state and interactions
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocus, setInputFocus] = useState(false);
  const status = useNavigation().state;
  const error = useActionData();
  const loaderData = useLoaderData();
  const submit = useSubmit();

  const inputFirstRef = useRef(null);
  const inputSecondRef = useRef(null);

  // Function to delete message from search params
  function handleSPMessageDelete() {
    searchParams.delete("message");
    setSearchParams(searchParams);
  }

  // Function to handle key press events for the first input
  function handleFirstKeyDown(e) {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      inputSecondRef.current.focus();
    }
  }

  // Function to handle key press events for the second input
  function handleSecondKeyDown(e) {
    handleSPMessageDelete();
    if (e.key === "Enter") {
      //did so to not prevent submission form
			setTimeout(() => {
				e.target.blur();
			}, 0);

			setInputFocus(false)
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      inputFirstRef.current.focus();
    }
  }

  // JSX for rendering the login page
  return (
    <main className={inputFocus ? "login--input-focus login" : "login"}>
      <div className="login__input-focus"></div>
      <div className="login__container">
        <div className="login__title">
          <h2>Sign in to your account</h2>
          {error ? (
            <h3>{error.message}</h3>
          ) : (
            loaderData && <h3 className="login__message">{loaderData}</h3>
          )}
        </div>
        <Form
          replace
          method="post"
          className={`${
            inputFocus ? "login__form--input-focus login__form" : "login__form"
          }`}
        >
          <input
            tabIndex={1}
            placeholder="Email address"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleFirstKeyDown}
            ref={inputFirstRef}
            type="text"
            name="email"
          />
          <input
            tabIndex={2}
            placeholder="Password"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleSecondKeyDown}
            ref={inputSecondRef}
            type="password"
            name="password"
          />
          <button
            type="submit"
            accessKey="Enter"
            className={status === "submitting" ? "--submitting" : undefined}
            disabled={status === "submitting"}
            tabIndex={3}
          >
            {status === "submitting" ? <Loading /> : "Sign in"}
          </button>
        </Form>
        <div className="login__registration">
          Don’t have an account? <Link>Create one now</Link>
        </div>
      </div>
    </main>
  );
}