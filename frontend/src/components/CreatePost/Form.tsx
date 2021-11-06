import { FormEvent, useState } from "react";
import { Button, TextField, Typography, Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { HttpClient } from "../../httpHelper/client";

const useStyles = makeStyles((theme: Theme) => ({
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
  },
  tag: {
    border: "1px solid black",
    marginRight: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
}));

const Form = () => {
  const styles = useStyles();

  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [currentTagText, setCurrentTagText] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const history = useHistory();
  const client = new HttpClient();

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await client.post("/posts/new", {
        title: titleText,
        body: bodyText,
        user_id: "b39b9d8c-2ca4-4b8b-b2c8-cf8f2da762d7",
        // tags,
      });
      console.log("post submitted");
      history.push("/"); // redirect back to the posts feed
    } catch (error) {
      console.error(error);
      alert(
        "There was a problem. Check the developer console for more details"
      );
    }
  };

  return (
    <form onSubmit={submitPost}>
      <Typography>Title Text</Typography>
      <TextField
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      />
      <Typography>Body Text</Typography>
      <TextField
        value={bodyText}
        onChange={(e) => setBodyText(e.target.value)}
      />
      <Typography>Tags</Typography>
      <TextField
        value={currentTagText}
        onKeyDown={(e) => {
          if (e.key === " ") {
            setTags((prevTags) =>
              prevTags.length ? [...prevTags, currentTagText] : [currentTagText]
            );
            setCurrentTagText("");
          }
        }}
        onChange={(e) => setCurrentTagText(e.target.value)}
      />
      <Box className={styles.tagsContainer}>
        {tags.map((tag) => (
          <Box className={styles.tag}>
            <Typography>{tag}</Typography>
          </Box>
        ))}
      </Box>
      <Button type="submit">Share</Button>
    </form>
  );
};

export default Form;
