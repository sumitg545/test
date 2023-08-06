import React from "react";
import Poster_img1 from "../images/poster.png";
import {List,ListItem,ListItemText,ListItemAvatar,Typography } from "@mui/material";
import data from "../json/rightSideData.json";

function HomeRightSection() {
  return (
    <div className="home-right-section">
      <div className="music-area">
        <h5>Mix - Music of Asia</h5>
        <p>YouTube</p>
        <div className="random-list">
          <ul>
            <li>
              {data.map(
                (user) => (
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem
                      alignItems="flex-start"
                      className="side-list-section"
                    >
                      <ListItemAvatar className="list-item-avatar">
                        <img alt="Remy Sharp" src={user.posterImg} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.songTitle}
                        className="listavtar"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {user.songDetails}
                            </Typography>
                            <Typography>
                              {user.views} | {user.years}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                ),
                []
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeRightSection;
