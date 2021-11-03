import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { createNode } from "../../database/queryBuilders";
import { write } from "../../database/transaction";

const Form = () => {
  const [formText, setFormText] = useState("");

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    // const attributes = [{ alias }, { encPublicKey }, { verifyKey }];
    const attributes = [{ postText: formText }];
    const query = createNode("Dream", attributes);
    try {
      await write(query);
    } catch (error) {
      console.error(error);
      alert(
        "There was a problem. Check the developer console for more details"
      );
    }
  };

  return (
    <form onSubmit={submitPost}>
      <TextField
        value={formText}
        onChange={(e) => {
          setFormText(e.target.value);
        }}
      />
      <Button type="submit">Share</Button>
    </form>
  );
};

export default Form;
