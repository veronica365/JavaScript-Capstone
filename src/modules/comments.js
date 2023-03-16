const renderUserComment = (comments = []) => {
  const wrapper = document.querySelector('.article .comments');
  comments.forEach((comment) => {
    wrapper.innerHTML += `
      <div class="comment-item">
        <span>${comment.creation_date}</span>
        <span class="username">${comment.username}</span>
        <span>${comment.comment}</span>
      </div>`;
  });
};
export default renderUserComment;
