import React from "react";
import styles from "./banner.module.css";
import Container from "../container";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();

  function handleClick() {
    history.push(`/new-good-dog`);
  }

  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.bannerWrapper}>
          <h1>Welcome to the Good Dog Site</h1>
          <p>A simple good dog website where all dogs are good dogs!</p>
          <button onClick={handleClick} className={styles.addBtn}>
            Add a new dog
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
