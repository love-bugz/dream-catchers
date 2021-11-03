import { Theme, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Tags } from "./PostsFeed";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: "1px solid #aaaaaa",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    flexDirection: "column",
    justifyContent: "space-between",
    "& > *": { margin: theme.spacing(2, 0) },
  },
  body: {
    maxHeight: "200px",
    overflow: "hidden",
    WebkitMaskImage: "linear-gradient(180deg,#000 60%,transparent)",
    // textOverflow: "ellipsis",
    // WebkitLineClamp: 4,
    // display: "-webkit-box",
    // WebkitBoxOrient: "vertical",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tags: {
    display: "flex",
  },
  tag: {
    marginRight: `${theme.spacing(1.5)} !important`,
  },
}));

interface PostProps {
  title: string;
  body: string;
  timestamp: number;
  tags: Tags[];
}

const Post = ({ title, body, timestamp, tags }: PostProps) => {
  const styles = useStyles();
  const date = new Date(timestamp);

  return (
    <Grid item xs={12}>
      <Box className={styles.container}>
        <Box className={styles.top}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
          </Typography>
        </Box>
        <Box className={styles.body}>
          <Typography variant="body1">{body}</Typography>
        </Box>
        <Box className={styles.tags}>
          {tags.map((tag, index) => (
            <Typography
              key={index}
              color="textSecondary"
              className={styles.tag}
            >
              #{tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default Post;
