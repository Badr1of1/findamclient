import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => { 
    e.preventDefault()
    try {
      axios.post("https://findam.onrender.com/api/v1/signup", {username, email, password})
      navigate("/login")
    } catch (error) {
      console.log(error);
    }

   }
  return (
    <div className="signup-container">
      <h4 className="signup-title">Create Account</h4>
      <form onSubmit={handleSubmit}>

        <div className="from-group">
          <label className="form-label">Username</label>
          <input
          className="form-input" 
          type="text" 
          value={username} 
          onChange={(e) => { setUsername(e.target.value) }} 
          required />
        </div>

        <div className="from-group">
          <label className="form-label">Email</label>
          <input
          className="form-input" 
          type="text" 
          value={email} 
          onChange={(e) => { setEmail(e.target.value) }} 
          required/>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
          className="form-input" 
          type="password" 
          value = {password} 
          onChange={(e) => { setPassword(e.target.value) }} 
          required/>
        </div>
        
        <button type="submit" className="signup-button">Create an account</button>
      </form>
    </div>
  );
};

export default SignupPage;
