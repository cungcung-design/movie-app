

const Contacts=()=>{
  return(
 <div>
  <section className="contact_section pt-50">
    <div className="container">
      <div className="row">
      
        <h1 className="">Contact Us</h1>
        <p>We'd love to hear from you!Please fill form below to get in touch</p>
          <div className="flex justify-center items-center">
        <form className="contact-form">
          <div className="form-input">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
          <div className="form-input">
         <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-input">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message"></textarea>
        </div>

        <button type="submit">Submit</button>
       <div className="flex items-center justify-center gap-6">
       <a href="#">Homepage</a>
        <a href="#">Movie</a>
       <a href="#">OurBlog</a>
        <a href="#">Contacts</a>
</div>

</form>
</div>
      </div>
    </div>
  </section>
 </div>
  )
}
export default Contacts;