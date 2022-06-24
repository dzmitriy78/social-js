import React, {Suspense, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {ProgressBarDemo} from "./components/common/Preloader/ProgressBar";
import ErrorBoundary from "./components/common/MyErrorBoundary"

const Music = React.lazy (()=> import("./components/Music/Music"));
const Settings = React.lazy (()=> import("./components/Settings/Settings"));
const DialogsContainer = React.lazy (()=> import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy (()=> import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy (()=> import("./components/Users/UsersContainer"));
const Login = React.lazy(()=>import( "./components/Login/Login"));
const News = React.lazy(()=>import ("./components/News/News"));

const App = ({initializeApp, initialized}) => {

    useEffect(() => {
        initializeApp()
    }, [])
    if (!initialized) {
        return <>
            <div className={"initial"}>
                Инициализация
            </div>
            <ProgressBarDemo/>
        </>
    }
    return (
        <div className='app-wrapper'>
            <ErrorBoundary>
            <Suspense fallback = {<div>Загрузка...</div>}>
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
            </Suspense>
            </ErrorBoundary>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);