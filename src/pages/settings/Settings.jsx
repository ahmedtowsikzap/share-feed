import "./Settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user-check"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ahmed" />
                    <label>Email</label>
                    <input type="email" placeholder="ahmed@gmail.com" />
                    <label>Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update!</button>
                    
                </form>
            </div>
            <Sidebar/>
            
        </div>
    );
};

export default Settings;