import { useNavigate } from "react-router-dom";
import "./login-view.scss";

const LoginView = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/browse");
  };
  return (
    <div className='login-view df f-jc-c f-ai-c'>
      <header>
        <img src='logo.png' alt='logo' />
      </header>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
            />
          </div>
          <input type='submit' value='Sign in' />

          <div className='form-footer df f-fd-c'>
            <p>
              Don't have an account? <span>Sign up now</span>
            </p>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
