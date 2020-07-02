import React from 'react';

const LoginForm = () => {
  return (
    <div className="auth">
      <div className="row">
        <div className="auth-form__wrap">
          <h2 className="auth-form__wrap--title">Login into your account</h2>
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
              <input
                type="submit"
                className="auth-form__submit"
                value="Login"
              />
            </div>
          </form>

          <div className="auth-form__footer">
            <p>
              <a href="/signup.html">Create an Account</a>
            </p>
            <p>
              <a href="/">Forgot Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
