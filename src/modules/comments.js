const commentsCounter = (wrapper) => {
  const totalComments = wrapper.querySelectorAll('.comment-item');
  document.querySelector('.article h4').textContent = `Comments (${totalComments.length})`;
};

const renderUserComment = (comments) => {
  const wrapper = document.querySelector('.article .comments');
  if (!comments.length) {
    wrapper.innerHTML = 'No comments have been added';
    document.querySelector('.article h4').textContent = 'Comments (0)';
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
  commentsCounter(wrapper);
  return wrapper;
};
export default renderUserComment;
