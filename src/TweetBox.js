import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./frebase";
import { addDoc, collection } from "firebase/firestore";
import Verified from "@mui/icons-material/Verified";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    e.preventDefault();
    const colRef = collection(db, "posts");

    addDoc(colRef, {
      displayName: "Raj Pancholi",
      username: "pancholiraj27",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADea4I734OjLM1vipc1Mg4EWoxqA2D8RtylIJqZ0LI-_3g=s32-c-mo",
    }).then(() => {
      setTweetMessage("");
      setTweetImage("");
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I734OjLM1vipc1Mg4EWoxqA2D8RtylIJqZ0LI-_3g=s32-c-mo" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox_inputImage"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
