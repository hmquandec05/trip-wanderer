import React, { useState } from "react";
import { auth, db } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const AuthForm = ({ isLogin }) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (username) =>
    /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/.test(username);
  const validateName = (name) => /^[a-zA-Z0-9 ]+$/.test(name); // Allow spaces in full name

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Reset errors
    setErrors({});

    if (isLogin) {
      // Handle login
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Logged in successfully:", userCredential.user);
        setError(null);
        navigate("/"); // Redirect to homepage after successful login
      } catch (error) {
        setError("Đăng nhập thất bại. Vui lòng thử lại.");
        console.error("Error logging in:", error.message);
      }
    } else {
      // Validate form
      if (
        fullName === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        validationErrors = {
          fullName: fullName === "" ? "Họ và tên không được để trống" : "",
          username: username === "" ? "Tên đăng nhập không được để trống" : "",
          email: email === "" ? "Email không được để trống" : "",
          password: password === "" ? "Mật khẩu không được để trống" : "",
          confirmPassword:
            confirmPassword === ""
              ? "Nhập lại mật khẩu không được để trống"
              : "",
        };
      } else if (!validateName(fullName)) {
        validationErrors.fullName = "Họ và tên không hợp lệ";
      } else if (!validateUsername(username)) {
        validationErrors.username = "Tên đăng nhập không hợp lệ";
      } else if (!validateEmail(email)) {
        validationErrors.email = "Email không hợp lệ!";
      } else if (password.length < 6) {
        validationErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      } else if (password !== confirmPassword) {
        validationErrors.confirmPassword = "Mật khẩu không khớp";
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          fullName,
          username,
          avatar:
            "https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-1/391399630_1488743318579614_9089216888538234146_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zEId9J3xmIYQ7kNvgFPQCvF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-2.xx&oh=00_AYDFM7f0sdKJ6saS8HGGPuRz6QuZ5tpcYRqHtWciRMvywA&oe=66CCC079",
          email,
          posts: [],
        });

        console.log("User registered and saved to Firestore:", user);
        setError(null);
        navigate("/");
      } catch (error) {
        setError("Đăng ký thất bại. Vui lòng thử lại.");
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="image-side" />
      <div className="form-side">
        <img
          src="https://i.imgur.com/1R5vdmS.png"
          alt="Logo"
          className="logo"
        />
        <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Họ và tên"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <p className="error-text">{errors.fullName}</p>
              )}
            </div>
          )}
          {!isLogin && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>
          )}
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={
                showPassword
                  ? "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-512.png"
                  : "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-Disable-Inactive-Unavailable-Off-512.png"
              }
              alt="Toggle Password Visibility"
              className="eye-icon"
              onClick={handleTogglePassword}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={
                  showConfirmPassword
                    ? "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-512.png"
                    : "https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-Disable-Inactive-Unavailable-Off-512.png"
                }
                alt="Toggle Confirm Password Visibility"
                className="eye-icon"
                onClick={handleToggleConfirmPassword}
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <p className="terms">
            Bằng việc tiếp tục, bạn đồng ý với <a href="/terms">Điều khoản</a>,{" "}
            <a href="/privacy-policy">Chính sách bảo mật</a> và{" "}
            <a href="/cookie-policy">Chính sách cookie</a> của chúng tôi.
          </p>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="submit-btn">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <div className="google-login">
          <p>Hoặc tiếp tục bằng</p>
          <div className="google-icon-container">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
              alt="Google Login"
              className="google-icon"
            />
          </div>
        </div>
        <p className="redirect">
          {isLogin
            ? "Lần đầu tiên bạn đến với Trip Wanderer?"
            : "Bạn đã có tài khoản?"}{" "}
          <a href={isLogin ? "/signup" : "/login"}>
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </a>
        </p>
        {/* {error && <p className="error-text">{error}</p>} */}
      </div>
    </div>
  );
};

export default AuthForm;
