import getLike from './getUpdateAPI.js';

const addLike = async (title) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iG0fGQPKymgFaYVX6JKd/likes', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: title,

    }),

  });
};
const updatingLike = async (num) => {
  const updateLike = await getLike();

  const newLike = document.getElementById(`${num}s`);

  newLike.innerHTML = `${updateLike[num - 1].likes}  Likes`;
};
export { addLike, updatingLike };