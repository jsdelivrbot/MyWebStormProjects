/**
 * Created by iti8218 on 1/19/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCD-Zwrg6gnsQTv9mliKFZuGRf613xN5ts';



// Create a new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));