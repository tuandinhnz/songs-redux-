import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';



class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    
    render () {
        return (
            // this.props === { songs: state.songs }
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    } 
};

//We can call the function below with any names however, by convention, it is usually called the function below mapStateToProps. This function is going to be rerun every time the state object changed or updated by action creators.
const mapStateToProps = (state) => {
    
    return { songs: state.songs };
};
// pass the action creator selectSong and the mapStateToProps function into the connect function
export default connect(mapStateToProps, { selectSong })(SongList);
