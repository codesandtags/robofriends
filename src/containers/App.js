import React, {useState} from 'react';
import './App.css';
import * as API from '../api/robots';
import {CardList} from '../components/CardList';
import {SearchBox} from '../components/SearchBox';
import {Footer} from '../components/Footer';
import {GithubCorner} from '../components/GithubCorner';

function App() {
    const [robots] = useState(API.robots);
    const [robotSearched, setRobotSearched] = useState('');
    const onSearchRobot = (event) => {
        const search = event.target.value;
        setRobotSearched(search);
    };
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(robotSearched.toLowerCase());
    });

    return (
        <div className="tc">
            <GithubCorner url="https://github.com/codesandtags/robofriends"/>
            <h1 className="ma4 mt5-m f2 f1-l">RoboFriends</h1>
            <SearchBox searchChange={onSearchRobot} />
            <CardList robots={filteredRobots}/>
            <Footer />
        </div>
    );
}

export default App;
