import React, {Suspense, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {ProgressBarUnit} from "./components/common/Preloader/ProgressBarUnit";
import ErrorBoundary from "./components/common/MyErrorBoundary"
import {Navigate} from "react-router";

const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import( "./components/Login/Login"));
const News = React.lazy(() => import ("./components/News/News"));
const Chat = React.lazy(() => import ("./components/Chat/Chat"));

const App = ({initializeApp, initialized}) => {

    useEffect(() => {
        initializeApp()
    }, [])
    if (!initialized) {
        return <>
            <div className={"initial"}>
                Initialization
            </div>
            <ProgressBarUnit/>
        </>
    }
    return (
        <div className='app-wrapper'>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Routes>
                            <Route exact path="/" element={<Navigate to={'/profile'}/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path='/profile/*' element={<ProfileContainer/>}/>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                            <Route path='/chat/*' element={<Chat/>}/>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path='/music/*' element={<Music/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                            <Route path="/login/*" element={<Login/>}/>
                            <Route path="*" element={
                                <div style={{fontSize: 60}}>
                                    Oops! Page not found!
                                </div>
                            }/>
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