import { useState } from 'react'
import './login-form.css'

export default function LoginForm() {
  const [mode, setMode] = useState('Login')

  return (
    <div id="login-form">
      <div className="wrapper">
        {mode === 'login' ? (
          <div className="content">
            <div className="col-left">
              <div className="login-text">
                <h2>Welcome!</h2>
                <p>Don't you have an account?</p>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="btn"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="col-right">
              <div className="login-form">
                <h2>Login</h2>
                <form action="">
                  <p>
                    <label>
                      Username/Email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Username or Email"
                      required
                    />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p>
                    <input type="submit" value="Login" />
                  </p>
                  <p>
                    <a href="">Forgot password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="col-left">
              <div className="login-text">
                <h2>Welcome!</h2>
                <p>Do you have a account?</p>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="btn"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="col-right">
              <div className="login-form">
                <h2>Register</h2>
                <form action="">
                  <p>
                    <label>
                      Username<span>*</span>
                    </label>
                    <input type="text" placeholder="Username" required />
                  </p>
                  <p>
                    <label>
                      Email address<span>*</span>
                    </label>
                    <input type="email" placeholder="Email" required />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p>
                    <input type="submit" value="Register" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
