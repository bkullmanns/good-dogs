import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import DetailComponent from "../../components/detail";
import styles from "./detail.module.css";

function Detail() {
  const match = useRouteMatch("/dogs/:breed/:id");
  const [isLoading, setIsLoading] = useState(false);
  const [dog, setDog] = useState({});

  useEffect(() => {
    async function getId() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/dogs/${match.params.breed}/${match.params.id}`
        );
        const data = await response.json();
        console.log(data);

        setDog(data);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    }

    getId();
  }, [match.params.id]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <Header whiteBgPage />
      <DetailComponent dog={dog} />
      <Footer />
    </>
  );
}

export default Detail;
