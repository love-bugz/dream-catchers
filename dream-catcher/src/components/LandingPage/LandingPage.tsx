import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { FormEvent, useState } from "react";
import { createIdentity, Identity } from "../../auth/newUser";
import { queryDatabase } from "../../database/transaction";
import { createNode } from "../../database/queryBuilders";

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

  const createAccount = async (e: FormEvent) => {
    e.preventDefault();
    const user = createIdentity(alias);

    const {
      public: { encPublicKey, verifyKey },
    } = user;

    try {
      await fetch(`${process.env.REACT_APP_DB_URL}/users/register`, {
        body: JSON.stringify({
          alias: user.public.alias,
          enc_public_key: user.public.encPublicKey,
          verify_key: user.public.verifyKey,
        }), // pass in the alias and public keys
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
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
