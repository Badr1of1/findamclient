import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', {username, password});
      const token = response.data.token;
      console.log(response.data)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(response.data.user.username))
      setUser(response.data.user.username)
      console.log(response.data.user.username)
      navigate('/items')
    } catch (error) {
      console.error('Login failed:', error)
      setMessage('Failed to login. Please try again.')
    }
   }
  return (
    <div className="login-container">
      <h4 className="login-title">Login</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input 
          type="text"
          className="form-input"  
          placeholder="Username" 
          value={username} 
          onChange={(e) => { setUsername(e.target.value) }} 
          required/>
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input 
          type="password"
          className="form-input"  
          placeholder="Password" 
          value={password} 
          onChange={(e) => {setPassword(e.target.value) }} 
          required/>
        </div>
        <button type="submit" className="login-button">Login</button>
        {message && <p className="login-message">{message}</p>}
      </form>  
    </div>
  );
};

export default LoginPage;
