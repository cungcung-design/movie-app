

const Login=()=>{
  return(
    <section className="Login_section pt-50">
      <div className="form-container">
          <form action="" className="">
            <h1>LogIn</h1>
            
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="Emial" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Password" />
            <input type="submit" value="Register" className="register" />
            <div className="flex items-center justify-center gap-2">
            <a href="">Don't you have an account?</a>
            <a href="">Register Now</a>
            </div>
          </form>
          </div>
    </section>
  )
}
export default Login