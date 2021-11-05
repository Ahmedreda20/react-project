import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(email, password);
  }

  function handlePassword(ev) {
    let current = ev.target;
    let pass = document.getElementById("password");
    if (
      current.classList.contains("fa-eye-slash") &&
      pass.type === "password"
    ) {
      current.classList.replace("fa-eye-slash", "fa-eye");
      pass.setAttribute("type", "text");
    } else {
      current.classList.replace("fa-eye", "fa-eye-slash");
      pass.setAttribute("type", "password");
    }
  }
  return (
    <section className="container">
      <main className="form_box--main">
        <h1 className="title">Welcome to the App</h1>
        <h1 className="logo">البادية اوربا</h1>
        <form className="form_box" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <Input type="email" placeholder="Email Address" event={setEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="pass-box">
              <Input
                type="password"
                placeholder="••••••••"
                event={setPassword}
              />
              <i
                className="fas fa-eye-slash"
                onClick={(e) => handlePassword(e)}
              ></i>
            </div>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              hidden
              aria-hidden="true"
            />
            <label htmlFor="remember" className="remember--submit">
              Login as Provider
            </label>
            <a href="/" className="form-link-pass">
              Forgot password?
            </a>
          </div>
          <div className="form-group">
            <button
              className="btn-submit"
              name="submit"
              type="submit"
              aria-label="submit button"
            >
              Sign in
            </button>
            <a href="/" className="form-link">
              Login as a guest
            </a>
          </div>
        </form>
        <p className="signup--content">
          Don't have an account? {"  "}
          <a href="/" className="signup-link">
            Sign up
          </a>
        </p>
      </main>
    </section>
  );
}

export default App;
