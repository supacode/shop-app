import React from 'react';
import Spinner from '../layout/Spinner';

const AuthPageCTA: React.FC<{
  loading: boolean;
  text: string;
  handler: (e: React.FormEvent) => any;
}> = ({ loading, text, handler }) => {
  return (
    <div className="auth-form__field">
      <button
        onClick={e => handler(e)}
        type="submit"
        disabled={loading}
        className="auth-form__cta"
      >
        {loading && <Spinner color="#fff" size={20} strokeWidth={3} />}

        {!loading && <span>{text}</span>}
      </button>
    </div>
  );
};

export default AuthPageCTA;
