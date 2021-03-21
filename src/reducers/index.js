const songsReducer = () => {
  return [
    { title: 'song1', duration: '1:05' },
    { title: 'song2', duration: '2:05' },
    { title: 'song3', duration: '3:05' },
    { title: 'song4', duration: '4:05' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
