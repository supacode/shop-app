import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="auth">
      <div className="row">
        <div className="auth-form__wrap">
          <h2 className="auth-form__wrap--title">Create an Account</h2>
          <form className="auth-form" method="POST" action="#">
            <div className="auth-form__field">
              <label htmlFor="email" className="auth-form__label">
                E-mail
              </label>
              <input
                type="email"
                placeholder="myemail@example.com"
                className="auth-form__input"
                name="email"
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
                id="password"
                required
              />
            </div>
            <div className="auth-form__field">
              <label htmlFor="password2" className="auth-form__label">
                Password
              </label>
              <input
                type="password"
                placeholder="•••••••"
                className="auth-form__input"
                name="password2"
                id="password"
                required
              />
            </div>

            {/* TODO: Replace with auth page CTA component */}
            <div className="auth-form__field">
              <button type="submit" className="auth-form__cta">
                <span>Create an Account</span>
              </button>
            </div>
          </form>

          <div className="auth-form__footer">
            <p>
              <Link to="/login">Login your account</Link>
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

export default RegisterPage;
