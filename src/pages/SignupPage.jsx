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
    <div>
      <h4>Signup</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="usename" value={username} onChange={(e) => { setUsername(e.target.value) }} required />
        <input type="text" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
        <input type="password" placeholder="password" value = {password} onChange={(e) => { setPassword(e.target.value) }} required/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
