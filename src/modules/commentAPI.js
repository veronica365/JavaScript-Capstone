const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iG0fGQPKymgFaYVX6JKd';

export const getComments = async (param) => {
  const result = await fetch(`${API}/comments?item_id=${param}`, { method: 'GET' });
  return result.json();
};

export const postComment = async (values) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await fetch(`${API}/comments`, options);
};
