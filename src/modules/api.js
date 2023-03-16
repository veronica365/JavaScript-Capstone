import renderTvCards from './renderShows.js';

const render = async () => {
  const tvShowList = async () => {
    const tvShowAPI = await fetch('https://api.tvmaze.com/shows', {
      method: 'GET',

    });
    const result = await tvShowAPI.json();
    return result;
  };

  const tvArray = await tvShowList();
  const displyArray = tvArray.slice(0, 6);

  displyArray.forEach((tvShow) => {
    renderTvCards(tvShow);
  });
};

export default render;