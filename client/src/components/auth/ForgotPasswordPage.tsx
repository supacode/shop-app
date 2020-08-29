import React from 'react';
import { Link } from 'react-router-dom';

import AuthPageCTA from './AuthPageCTA';

const ForgotPassword = () => {
  return (
    <div className="auth">
      <div className="row">
        <div className="auth-form__wrap">
          <h2 className="auth-form__wrap--title">Recover your Password</h2>
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

            {/* TODO: Wire up forgot password handler */}
            <AuthPageCTA
              handler={() => {}}
              text="Forgot Password"
              loading={false}
            />
          </form>

          <div className="auth-form__footer">
            <p>
              <Link to="/register">Create an Account</Link>
            </p>
            <p>
              <Link to="/login">Login into your account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
