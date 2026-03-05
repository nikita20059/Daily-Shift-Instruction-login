
import img3 from "./d7r.png";
import "./Login.css";
import img1 from "./hp logo.png";
import img2 from "./blue-logo-r.png";
const Login = () => {
  return (
    <div className="page">
      <div className="main-card">
<svg
  className="wave"
  viewBox="0 0 1440 800"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#6a5cff" />
      <stop offset="50%" stopColor="#aa7dff" />
      <stop offset="100%" stopColor="#ffd6ff" />
    </linearGradient>
  </defs>

  <rect width="1440" height="800" fill="#ffffff" />

  <path
    d="
      M0,500
      C150,380 300,450 450,520
      C650,650 850,580 1050,440
      C1200,360 1350,380 1440,320
      L1440,800
      L0,800
      Z
    "
    fill="url(#waveGradient)"
  />
</svg>
        <div className="content">
          <div className="left">
              <img src={img2} className="card-log2" alt="" />
             <img src={img3} className="card-log1" alt="" />
          </div>
          <div className="right">
            <div className="login-card">
              <h2>Daily Shift Instruction</h2><br></br>
              <p className="divider">LOGIN</p><br></br>
              <input type="text" placeholder="Employee no" />
              <input type="password" placeholder="Password" />
              <br></br><br></br>
              <button className="login-btn">Log In</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
