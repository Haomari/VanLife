import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

export default function Login() {
  const [inputFocus, setInputFocus] = useState(false);
	const descRef = useRef();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleChangeFormData(e) {
    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmitFormData(e) {
    e.preventDefault();
    console.log("data send", loginFormData);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmitFormData(e);
      document.activeElement?.blur();
    }
  }

	console.log();

  return (
    <main className={inputFocus
			? "login--input-focus login"
			: "login"}>
			<div className="login__input-focus"></div>
      <div className="login__container">
        <h2 className="login__title">Sign in to your account</h2>
        <form
          className={`${
            inputFocus
              ? "login__form--input-focus login__form"
              : "login__form"
          }`}
          onSubmit={handleSubmitFormData}
        >
          <input
            tabIndex={1}
            placeholder="Email address"
            onFocus={() => setInputFocus(true)}
						onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            onChange={handleChangeFormData}
            value={loginFormData.email}
            type="text"
            name="email"
          />
          <input
            tabIndex={2}
            placeholder="Password"
						onFocus={() => setInputFocus(true)}
						onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            onChange={handleChangeFormData}
            value={loginFormData.password}
            type="password"
            name="password"
          />
          <button tabIndex={3}>Sign in</button>
        </form>
        <div className="login__registration">
          Don’t have an account? <Link>Create one now</Link>
        </div>
      </div>
    </main>
  );
}
