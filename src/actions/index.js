//Action creator
export const selectSong = song => {
    //return an object
    return (
        {
            type: 'SONG_SELECTED',
            payload: song
        }

    );

};

