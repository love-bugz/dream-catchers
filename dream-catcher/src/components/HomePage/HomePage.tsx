import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Container, Fab } from "@mui/material";
import { useHistory } from "react-router";
import Header from "../layout/Header";
import PostsFeed from "./PostsFeed";

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <Header />
      <Container>
        <PostsFeed />
        <Fab
          // Fab doesn't stick in front of the content by default. Setting styles from this post fixes it https://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float
          style={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 20,
            left: "auto",
            position: "fixed",
          }}
          onClick={() => {
            history.push("/new");
          }}
        >
          <AddCircleOutlineOutlined />
        </Fab>
      </Container>
    </>
  );
};

export default HomePage;
