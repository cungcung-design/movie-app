

const Signup = () =>{
  return(
    <section className="Sign_section pt-50">
      <div className="container">
        <div className="row">
          
          <div className="form-container">
          <form action="" className="">
            <h1>Sign Up</h1>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" placeholder="Name" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="Emial" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Password" />
            <input type="submit" value="Register" className="register" />
            <div className="flex items-center justify-center gap-2">
            <a href="">Don't you have an account?</a>
            <a href="">Log In</a>
            </div>
          </form>
          </div>
        </div>
     </div>
 </section>
  )
}
export default Signup;