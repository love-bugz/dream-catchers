import { Theme, Typography, Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Tags } from "./PostsFeed";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: "1px solid #aaaaaa",
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  body: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 4,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tags: {
    width: "50%",
    display: "flex",
    overflowX: "scroll",
  },
  tag: {
    marginRight: 10,
  },
}));

interface PostProps {
  body: string;
  timestamp: number;
  tags: Tags[];
}

const Post = ({ body, timestamp, tags }: PostProps) => {
  const styles = useStyles();
  const date = new Date(timestamp);

  return (
    <Grid item xs={6}>
      <Box className={styles.container}>
        <Typography variant="body1" className={styles.body}>
          {body}
        </Typography>
        <Box className={styles.infoBox}>
          <Box className={styles.tags}>
            {tags.map((tag, index) => (
              <Chip
                className={styles.tag}
                key={index}
                label={tag}
                color="primary"
              />
            ))}
          </Box>
          <Typography variant="subtitle2">
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Post;
