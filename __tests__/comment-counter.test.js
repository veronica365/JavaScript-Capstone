import renderUserComment from '../src/modules/comments.js';

describe('Describe comment counter', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div class="article"><h4>Comments</h4><div class="comments">Comments added shall appear here</div></div>';
  });

  describe('Comment counter when there are no comments', () => {
    test('Shoud display the right placeholder text', () => {
      const placeholder = document.querySelector('.comments');
      expect(placeholder.textContent).toBe('Comments added shall appear here');
    });
    test('There should be 0 comments', () => {
      const commentCount = document.querySelectorAll('.comment-item');
      expect(commentCount.length).toBe(0);
    });

    test('H4 should have the right text based on the number of comment', () => {
      const h4Text = document.querySelector('.article h4');
      expect(h4Text.textContent).toBe('Comments');
    });

    describe('renderUserComment function', () => {
      test('should update the H4 text', () => {
        const h4Text = document.querySelector('.article h4');
        renderUserComment([]);
        expect(h4Text.textContent).toBe('Comments (0)');
      });
      test('updates placeholder if there are no comments should be correct', () => {
        const placeholder = document.querySelector('.comments');
        renderUserComment([]);
        expect(placeholder.textContent).toBe('No comments have been added');
      });
    });
  });

  describe('Comment counter when there are comments', () => {
    beforeEach(() => {
      const comments = [
        { comment: 'sample', creation_date: '2023-03-16', username: 'sample' },
        { comment: 'sample', creation_date: '2023-03-16', username: 'sample' },
        { comment: 'thanks', creation_date: '2023-03-16', username: 'admin' },
      ];
      renderUserComment(comments);
    });

    test('There should be three comments', () => {
      const commentCount = document.querySelectorAll('.comment-item');
      expect(commentCount.length).toBe(3);
    });

    test('H4 should have the right text based on the number of comment', () => {
      const h4Text = document.querySelector('.article h4');
      expect(h4Text.textContent).toBe('Comments (3)');
    });
    test('Should show no placeholder if there are comments', () => {
      const placeholder = document.querySelector('.comments');
      expect(placeholder.textContent).not.toBe('No comments have been added');
      expect(placeholder.textContent).not.toBe(
        'Comments added shall appear here',
      );
    });
  });
});
