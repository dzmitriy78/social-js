import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {ProgressBarDemo} from "./components/common/Preloader/ProgressBar";


const App = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, [])
    if (!props.initialized) {
        return <>
            <div className={"initial"}>
                Инициализация
            </div>
            <ProgressBarDemo/>
        </>
    }
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path='/profile/*' element={<ProfileContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/login/*" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);