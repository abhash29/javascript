import './sidebar.css';

import {assets} from "../../assets/assets/assets";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="menu">
          <img src={assets.menu_icon} alt="" />

          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <span>New Chat</span>
          </div>
          <div className="recent">
            <span className="recent-title">Recent</span>
            <p className="recent-entry">What is HTML</p>
          </div>
        </div>
        <div className="bottom-items">
          <div>
            <img src={assets.} alt="" />
            <p>help</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Activity</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Setting</p>
          </div>
        </div>
      </div>
    );
}   
export default Sidebar;