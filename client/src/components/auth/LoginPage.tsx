import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AuthPageCTA from './AuthPageCTA';

const LoginForm = () => {
  const { login, loginLoadiing } = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

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

            <AuthPageCTA
              loading={loginLoadiing}
              handler={loginHandler}
              text="Login"
            />
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
