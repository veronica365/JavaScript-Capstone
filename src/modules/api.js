import renderTvCards from './renderShows.js';
import commentPop from './commentpopup.js';

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
    const popUp = document.getElementById(`${tvShow.id}`);
    popUp.addEventListener('click', () => {
      const modal = document.querySelector('#modal');
      modal.innerHTML = commentPop(tvShow);
      const dialog = document.querySelector('.comment-modal');
      dialog.showModal();
    });
  });
};

export default render;