import React, { useState } from "react";
import Container from "../container";
import styles from "./detail.module.css";

function Detail({ dog }) {
  const [goodDog, setGoodDog] = useState(dog.good_dog);
  async function handleClick() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/dogs/${dog.breed}/${dog.id}/gooddog`,
        { method: "PATCH" }
      );
      const data = await response.json();
      console.log(data);
      setGoodDog(data.good_dog);
    } catch (error) {}
  }

  return (
    <section className={styles.detail}>
      <Container>
        <div className={styles.detailWrapper}>
          <div className={`${styles.detailBox} ${styles.detailImage}`}>
            <img src={dog.img} alt={dog.alt_img} />
          </div>
          <div className={styles.detailBox}>
            <h2>{dog.name}</h2>
            <p className={styles.genre}>{dog.genre}</p>
            <p className={styles.bio}>{dog.bio}</p>
            <div className={styles.goodDogBox}>
              {/*  <p className={styles.goodDog}>
                <strong>This dog is a good dog x {goodDog}</strong>
              </p> */}
              <button onClick={handleClick}>
                Good Dog in {goodDog} times!
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Detail;
