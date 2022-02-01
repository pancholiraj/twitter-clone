import React from "react";
import "./Widgets.css";
import Search from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon"></Search>
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1486677963076628489"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SriSri"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/pancholiraj27/"}
          options={{
            text: "for any #query contact me on instagram pancholiraj27",
          }}
        />
      </div>
    </div>
  );
};

export default Widgets;
