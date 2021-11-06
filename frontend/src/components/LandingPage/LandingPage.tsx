import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { FormEvent, useState } from "react";
import { createIdentity, Identity } from "../../auth/newUser";
import { HttpClient } from "../../httpHelper/client";

const useStyles: any = makeStyles((_theme: any) => ({
  content: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& > *": { margin: "30px !important" },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  invalid: {
    border: "red solid 2px",
  },
}));

interface LandingPageProps {
  setUser: (user: Identity) => void;
}

const LandingPage = ({ setUser }: LandingPageProps) => {
  const styles = useStyles();
  const [alias, setAlias] = useState("");
  const client = new HttpClient();

  const createAccount = async (e: FormEvent) => {
    e.preventDefault();
    const user = createIdentity(alias);

    const {
      public: { encPublicKey, verifyKey },
    } = user;

    const attributes = [{ alias }, { encPublicKey }, { verifyKey }];
    // const query = createNode("User", attributes);

    try {
      const data = await client.post("/users/register", {
        alias: user.public.alias,
        enc_public_key: user.public.encPublicKey,
        verify_key: user.public.verifyKey,
      });
      console.log(data);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (err) {
      console.error("Error creating new user: ", err);
      alert(
        "Error creating new user. Check the developer console for more info"
      );
    }
  };

  return (
    <Container>
      <Box className={styles.content}>
        <Typography variant="h1">Dream Catcher</Typography>
        <form className={styles.form} onSubmit={createAccount}>
          <TextField
            label="Display name"
            InputLabelProps={{ shrink: true }}
            autoFocus
            required
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <Button type="submit">Join</Button>
        </form>
      </Box>
    </Container>
  );
};

export default LandingPage;
