import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current!.value;
    const password = emailRef.current!.value;

    login({ email, password });
  };

  return (
    <div className="auth">
      <div className="row">
        <div className="auth-form__wrap">
          <h2 className="auth-form__wrap--title">Login into your account</h2>
          <form className="auth-form" noValidate method="POST" action="#">
            <div className="auth-form__field">
              <label htmlFor="email" className="auth-form__label">
                E-mail
              </label>
              <input
                type="email"
                placeholder="myemail@example.com"
                className="auth-form__input"
                name="email"
                ref={emailRef}
                id="email"
                required
              />
            </div>

            <div className="auth-form__field">
              <label htmlFor="password" className="auth-form__label">
                Password
              </label>
              <input
                type="password"
                placeholder="•••••••"
                className="auth-form__input"
                name="password"
                ref={passwordRef}
                id="password"
                required
              />
            </div>

            <div className="auth-form__field">
              <button
                onClick={loginHandler}
                type="submit"
                className="auth-form__submit"
              >
                <span>Login</span>
              </button>
            </div>
          </form>

          <div className="auth-form__footer">
            <p>
              <Link to="/register">Create an Account</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot Password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
