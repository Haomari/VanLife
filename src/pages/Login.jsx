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

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

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
		new URL(request.url).searchParams.delete("message")
    return err;
  }
}

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocus, setInputFocus] = useState(false);
  const status = useNavigation().state;
  const error = useActionData();
  const loaderData = useLoaderData();
  const submit = useSubmit();

  const inputFirstRef = useRef(null);
  const inputSecondRef = useRef(null);

  console.log(status);

  function handleSPMessageDelete() {
    searchParams.delete("message");
    setSearchParams(searchParams);
  }

  /*   function handleSubmitFormData(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();
    console.log("data send", loginFormData);
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch((err) => setError(err.message))
      .finally(() => setStatus("idle"))
      .finally(
        setSearchParams((prev) => {
          prev.delete("message");
          return prev;
        })
      );
  } */

  function handleFirstKeyDown(e) {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      inputSecondRef.current.focus();
    }
  }

  function handleSecondKeyDown(e) {
		console.log(e.key)
		handleSPMessageDelete()
    if (e.key === "Enter") {
      document.activeElement?.blur();
      submit(null, { method: "post" });
    }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      inputFirstRef.current.focus();
    }
  }

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
