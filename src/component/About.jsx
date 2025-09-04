

const About = ()=>{
  return(
    <section className="about_section">
  <div className="container">
   
    <div className="image-container">
      <img
        src="public/p08.png"
        alt="About Us"
        className="rounded-lg shadow-lg w-full"
      />
    </div>
    <div className="text-container">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="text-lg leading-relaxed mb-4">
        Welcome to our movie review and blogging site We are passionate storytellers, reviewers, and cinema fans.
        Whether you're into Hollywood blockbusters or indie films, we've got something for you.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Our goal is to bring film lovers together, share opinions, and celebrate the magic of movies. Join our growing
        community and explore film through fresh eyes.
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>
)
}
export default About;