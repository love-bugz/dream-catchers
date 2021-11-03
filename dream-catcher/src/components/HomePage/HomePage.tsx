import { Container, Typography } from "@mui/material";
import Header from "../layout/Header";
import PostsFeed from "./PostsFeed";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <PostsFeed />
      </Container>
    </>
  );
};

export default HomePage;
