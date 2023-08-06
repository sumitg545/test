import YTLogo from "../images/youtube_icon.svg";
import MicIcon from "../images/mic_icon.svg";
import SearchIcon from "../images/search.svg";
import VideoIcon from "../images/video_icon.svg";
import BellIcon from "../images/bell_icon.svg";
import UserIcon from "../images/user-img.png";

import {
  OutlinedInput,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@mui/material";


function Header() {
  return (
    <div className="header">
      <div className="left-icons">
          <div className="yt-logo">
            <img src={YTLogo} alt="icon" />
          </div>

          <div className="search">
            <OutlinedInput
              placeholder="Search"
              className="search-box"
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <img src={SearchIcon} alt="icon" className="search-icon" />
                </InputAdornment>
              }
            />
            <img src={MicIcon} alt="icon" className="mic-icon" />
          </div>
        </div>

      <div className="right-icons">
        <img src={VideoIcon} alt="icon" className="mic-icon" />
        <img src={BellIcon} alt="icon" className="mic-icon" />
        <img src={UserIcon} alt="icon" className="user-icon"/>
      </div>
    </div>
  );
}

export default Header;
