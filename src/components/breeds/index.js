import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./breeds.module.css";
import Container from "../container";

function Breeds(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/breeds/${props.breed}`);
  }

  return (
    <section className={styles.breeds}>
      <Container>
        <div className={styles.titleBreed}>
          {/*           <h2>Choose the breed!</h2>
           */}{" "}
        </div>
        <div className={styles.breedsContent}>
          <div className={styles.text}>
            <h3>{props.breed}</h3>
            <p>Check all the {props.breed} registered on our database!</p>
            <button onClick={handleClick}>Go to breed page</button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <img src={props.dogs[0].img} alt={props.dogs[0].alt_img}></img>
            </div>
            <div className={styles.card2}>
              <img src={props.dogs[1].img} alt={props.dogs[1].alt_img}></img>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Breeds;
