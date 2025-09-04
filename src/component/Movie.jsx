import { Link } from "react-router-dom";
const Movies = ()=> {
  return (
     <section className="Movie-section">
      <div className="container">
        <div className="row">
          <div className="card">
        <img src="/p06.png" alt="Avengers: Endgame" className="image1" />
        <div className="info-section">
          <h2 className="text-center">Avengers: Endgame</h2>
          <div className="btn-container">
            <button className="btn-1">Watch Now</button>
            <Link to="/detail"><button className="btn-2">View Detail</button></Link>
         </div>
          </div>
        </div>
        <div  className="card">
        <img src="/p03.png" alt="Avengers: Endgame" className="image1" />
        <div className="info-section">
          <h2 className="text-center">Avengers: Endgame</h2>
          <div className="btn-container">
            <button className="btn-1">Watch Now</button>
            <Link to="/detail"><button className="btn-2">View Detail</button></Link>
         </div>
          </div>
        </div>
        <div  className="card">
        <img src="/p02.png" alt="Avengers: Endgame" className="image1" />
        <div className="info-section">
          <h2 className="text-center">Avengers: Endgame</h2>
          <div className="btn-container">
            <button className="btn-1">Watch Now</button>
            <Link to="/detail"><button className="btn-2">View Detail</button></Link>
         </div>
          </div>
        </div>
        <div className="card">
        <img src="/p04.png" alt="Avengers: Endgame" className="image1" />
        <div className="info-section">
          <h2 className="text-center">Avengers: Endgame</h2>
          <div className="btn-container">
            <button className="btn-1">Watch Now</button>
            <Link to="/detail"><button className="btn-2">View Detail</button></Link>
         </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  
}
export default Movies;
