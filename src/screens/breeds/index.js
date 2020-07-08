import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Cards from "../../components/cards";
import Container from "../../components/container";
import Gallery from "../../components/gallery";
import Header from "../../components/header";
import styles from "./breeds.module.css";

function Breeds() {
  const match = useRouteMatch("/breeds/:breed");
  const [isLoading, setIsLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [shouldShowGallery, setShouldShowGallery] = useState(false);

  useEffect(() => {
    async function getBreed() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs/${match.params.breed}`
        );
        const data = await response.json();
        setDogs(data);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    }

    getBreed();
  }, [match.params.breed]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <Container>
          <div className={styles.textBreed}>
            <h2>
              Those are all the dogs from the {match.params.breed} breed we have
            </h2>
            <p>And they are all good dogs</p>
            <button onClick={() => setShouldShowGallery(true)}>
              Open Gallery
            </button>
          </div>
          <Gallery
            open={shouldShowGallery}
            dogs={dogs}
            onFullScreenToggle={(isFullScreen) =>
              setShouldShowGallery(isFullScreen)
            }
          />
          <Cards dogs={dogs}></Cards>
        </Container>
      </div>
    </>
  );
}

export default Breeds;
