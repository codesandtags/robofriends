import React, { useEffect } from 'react';

import './App.css';
import { CardList } from '../components/CardList';
import { SearchBox } from '../components/SearchBox';
import { Footer } from '../components/Footer';
// Redux
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../store/actions';
import GithubCorner from '../components/GithubCorner';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

const App = (props) => {
    const { robots, isPending, error, searchField, onRequestRobots, onSearchChange } = props;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const cardList = isPending
        ? <h2 className="mt6 mb7"> Loading robots... </h2>
        : <CardList robots={filteredRobots}/>;
    const renderedCardList = error !== undefined
        ? <h2 className="mt6 mb7"> Sorry, there are not <span role="img" aria-label="robots">🤖</span> available</h2>
        : cardList;


    useEffect(() => {
        if (robots.length === 0) {
            onRequestRobots();
        }
    }, [robots, onRequestRobots]);

    return (
        <div className="tc">
            <GithubCorner url="https://github.com/codesandtags/robofriends"/>
            <h1 className="ma4 mt5-m f2 f1-l">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            {renderedCardList}
            <Footer/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
