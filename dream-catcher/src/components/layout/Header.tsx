import { AppBar, Container, Typography } from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useAuth } from "../../context/useAuth";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Header = () => {
  const styles = useStyles();
  const { user } = useAuth();
  return (
    <Box className={styles.container}>
      <Typography variant="h5">Dream Catcher</Typography>
      <Typography>{user!.public.alias}</Typography>
    </Box>
  );
};
export default Header;
