const renderUserComment = (comments) => {
  const wrapper = document.querySelector('.article .comments');
  if (!comments.length) {
    wrapper.innerHTML = 'No comments have been added';
    return wrapper;
  }
  wrapper.innerHTML = '';
  comments.forEach((comment) => {
    wrapper.innerHTML += `
      <div class="comment-item">
        <span>${comment.creation_date}</span>
        <span class="username">${comment.username}</span>
        <span>${comment.comment}</span>
      </div>`;
  });
  return wrapper;
};
export default renderUserComment;
