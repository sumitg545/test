import React from "react";
import Poster from "../images/poster.png";
import channelImg from "../images/channel_profile.jpg";
import checkIconFilled from "../images/check-icon-filled.svg";
import likeIcon from "../images/like.svg";
import dislikeIcon from "../images/dislike.svg";
import sharedIcon from "../images/share.svg";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import UserIcon from "../images/user-img.png";
import { TextField } from "@mui/material";

import homeData from "../json/homeData.json";

function HomeLeftSection() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="home-left-section">
      <Router>
        <div className="main-poster">
          {homeData.map(
            (home) => (
              <>
                <iframe
                  width="100%"
                  height="480"
                  src={home.song}
                  title={home.videoTitle}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <div className="active-video-title">
                  <h4>{home.songTitle}</h4>
                </div>

                <div className="description">
                  <div className="channel-section">
                    <img src={channelImg} alt="img" className="channel-logo" />
                    <div className="channel-text">
                      <Link to="/">{home.songDetails}</Link>
                      <img
                        src={checkIconFilled}
                        alt="img"
                        className="check-icon"
                      />
                      <div className="subscriber-counter">
                        {home.subscriber}
                      </div>
                    </div>
                    <div className="btn-subscribe">
                      {home.btn_text_subscribe}
                    </div>
                  </div>
                  <div className="share-icons">
                    <ul>
                      <li>
                        <img src={likeIcon} alt="like icon" />
                        {home.like}
                      </li>
                      <li>
                        <img src={dislikeIcon} alt="like icon" />
                        {home.dislike}
                      </li>
                      <li>
                        <img src={sharedIcon} alt="like icon" />
                        {home.share}
                      </li>
                      <li className="dots">...</li>
                    </ul>
                  </div>
                </div>
                <div className="description">
                  <p>
                    {home.para_desc[0].para_text}
                    <ul>
                      <li>{home.para_desc[0].para_list[0].para_list_song}</li>
                      <li>{home.para_desc[0].para_list[0].para_list_singer}</li>
                      <li>{home.para_desc[0].para_list[0].para_list_feat}</li>
                      <li>{home.para_desc[0].para_list[0].para_list_music}</li>
                      <li>{home.para_desc[0].para_list[0].para_list_lyricist}</li>
                      <li>{home.para_desc[0].para_list[0].para_list_movie}</li>
                    </ul>
                  </p>
                </div>

                <div className="comment-section">
                  <p>{home.comments}</p>
                  <div className="user-name">
                    <img src={UserIcon} alt="icon" className="user-icon" />
                    <TextField
                      label="Add a comments..."
                      variant="standard"
                      className="full-width"
                    />
                  </div>
                </div>
              </>
            ),
            []
          )}
        </div>
      </Router>
    </div>
  );
}

export default HomeLeftSection;
