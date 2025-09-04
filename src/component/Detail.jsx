import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <section className="detail_section pt-20"> 
      <div className="row">
        <div className="image-container">
          <img src="/p06.png" alt="Avengers: Endgame" />
        </div>
        <div className="content-container">
          <h1>Avengers: Endgame</h1>
          <p>
            After the devastating events of Infinity War, The Avengers assemble once more to
            reverse Thanos's actions and restore balance to the Universe.
          </p>

          <div className="text-container">
            <div className="d-flex">
            <div className="p-container">
              <span>Type:</span>
              <span>Studios:</span>
             <span>Date Aired:</span>
            <span>Rating:</span>
              <span>Genre:</span>
            </div>
             <div className="p-container">
              <span>Movie</span>
              <span>Movie Studios</span>
             <span>2019 04-26</span>
              <span>8.6</span>
              <span>Action Sci-Fri</span>
            </div>
           </div>
         
          <div className="btn-container">
             <Link to="/movies"> 
              <button className="bg-gray-600 text-white px-4 py-2 rounded">
                BACK
              </button>
            </Link>
           <button>WATCH NOW</button>
           </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Detail;
