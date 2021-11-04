import { Container, Typography } from "@mui/material";
import { useHistory } from "react-router";
import Header from "../layout/Header";
import Form from "./Form";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default HomePage;
