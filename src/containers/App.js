import React, { useState } from 'react';

import './App.css';
import * as API from '../api/robots';
import { CardList } from '../components/CardList';
import { SearchBox } from '../components/SearchBox';
import { Footer } from '../components/Footer';
import { GithubCorner } from '../components/GithubCorner';

// Redux
import  { connect } from 'react-redux';
import { setSearchField} from '../store/actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

const App = (props) => {
    const [robots] = useState(API.robots);
    // const [robotSearched, setRobotSearched] = useState('');
    /*const onSearchRobot = (event) => {
        const search = event.target.value;
        setRobotSearched(search);
    };*/
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
    });

    return (
        <div className="tc">
            <GithubCorner url="https://github.com/codesandtags/robofriends"/>
            <h1 className="ma4 mt5-m f2 f1-l">RoboFriends</h1>
            <SearchBox searchChange={props.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            <Footer/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
