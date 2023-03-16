const getLike = async () => {
  const likeCounter = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iG0fGQPKymgFaYVX6JKd/likes', {
    method: 'GET',

  });
  const result = await likeCounter.json();

  return result;
};

export default getLike;