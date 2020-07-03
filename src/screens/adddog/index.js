import React from "react";
import Header from "../../components/header";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Add_dog from "../../components/adddog";
import styles from "./adddog.module.css";

function Adddog() {
  return (
    <>
      <Header whiteBgPage />
      <Container>
        <Add_dog />
      </Container>
      <Footer />
    </>
  );
}

export default Adddog;
