import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./cards.module.css";

function Cards({ dogs }) {
  const history = useHistory();
  function handleClick(dog) {
    history.push(`/dogs/${dog.breed}/${dog.id}`);
  }
  return (
    <>
      <div className={styles.gridContainer}>
        {dogs.map((dog) => {
          return (
            <div key={dog.id} className={styles.dogForBreed}>
              <a className={styles.dogName} onClick={() => handleClick(dog)}>
                {dog.name}
              </a>
              <div className={styles.dogImage}>
                {/* <a href=""> */}
                <img src={dog.img} alt={dog.alt_img} />
                {/*  </a> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Cards;
