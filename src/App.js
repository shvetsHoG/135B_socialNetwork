import React from "react";
import style from "./styles/App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <Header/>
                <div className={style.appWrapperContent}>
                    <Routes>
                        <Route path="/Settings" element={<Settings/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Profile"
                               element={<Profile />}/>
                        <Route path="/Dialogs/*" element={<DialogsContainer />}/>
                    </Routes>
                </div>
                <Nav/>
            </div>
        </BrowserRouter>
    );
}

export default App;
