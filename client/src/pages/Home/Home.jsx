import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='container d-flex  p-2 justify-content-center align-items-center'>
      <div className={styles.left}>
        <img src="assets/home-img.svg" alt="Home image" draggable="false" />
      </div>
      <div className={styles.right}>
        <h3 className="fs-1 lh-2">Eki tho life hai, check up karalo</h3>
        <p className="fs-5 lh-sm fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          voluptatem eligendi nesciunt impedit possimus inventore dolores, nobis
          alias voluptates? Facere consequatur error quo, quod similique ab
          culpa voluptatibus cum voluptatum placeat, itaque magni sint harum
          consectetur ipsum explicabo quia maiores, quaerat doloribus recusandae
          ipsam? Eaque unde alias hic doloremque nostrum.
        </p>
        <Link className={styles.BookNow} to="/register">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
