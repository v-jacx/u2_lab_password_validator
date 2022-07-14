import '../styles/Validator.css'
import {useState} from 'react'


const Validator = () => {

  const [username, setUserName]= useState('');
  const [password, setPassword]= useState('');
  const [passwordConfirm, setPasswordConfirm]= useState('');
  const [valid, setValid]=useState('');


  const handleChange=(event)=>{
    if(event.target.placeholder === 'Username'){
          setUserName(event.target.value);
    }else if(event.target.placeholder === 'Password'){
          setPassword(event.target.value);     
    }else if(event.target.placeholder === 'Confirm password'){
          setPasswordConfirm(event.target.value);
    }

  }

  const handleSubmission=(event)=>{

    event.preventDefault();
    if(password === passwordConfirm){
      setValid('Successful Submission');
    }else{
      setValid('Passwords do not match')      
      setPasswordConfirm('');};  
  }
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" value={username} onChange={handleChange}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" value={password} onChange={handleChange} />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={handleSubmission}>Sign Up</button>
        <p>Passwords must match</p>
      </form>
    </div>
  )
}

export default Validator
