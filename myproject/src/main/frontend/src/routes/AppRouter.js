import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';//홈
import AboutmeScreen from '../screens/AboutmeScreen';//about me
import Timeline from '../screens/Timeline';//about me

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/aboutme" element={<AboutmeScreen />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;