import { Grid, Theme, Box, Fab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Post from "./Post";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 60,
  },
}));

export enum Tags {
  teeth = "teeth",
  apocaliptic = "apocaliptic",
  outmatched = "outmatched",
  flying = "flying",
  fatal = "fatal",
  lucid = "lucid",
}

export interface Post {
  title: string;
  body: string;
  timestamp: number;
  tags: Tags[];
}

const PostsFeed = () => {
  const styles = useStyles();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // queryDatabase(query)
    //   .then((result) => {
    //     console.log("result from query", result);
    //     setPosts(result!.records);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  return (
    <Box className={styles.container}>
      <Grid container>
        {posts.length > 0 &&
          posts.map((post: Post) => (
            <Post
              body={post.body}
              timestamp={post.timestamp}
              tags={post.tags}
              title={post.title}
            />
          ))}
      </Grid>
    </Box>
  );
};
export default PostsFeed;
