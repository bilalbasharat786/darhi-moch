import React, {useState}  from 'react'

function Profile() {
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const handleChangeEmail = (e)=> {
    setUser({
      ...user,
      email: e.target.value
    })
  }
 
  return (
    <div className="container">
        <h1>login page</h1>
        <form className="row g-3 w-50 mt-4">
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" onChange={handleChangeEmail} id="inputEmai"/>
  </div>
  <div className="col-md-12">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  id="password"/>
    
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
  </form>
        
    </div>
  );
}
export default Profile;