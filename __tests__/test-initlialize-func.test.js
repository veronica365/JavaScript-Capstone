/** @jest-environment jsdom */
import countingFunction from '../src/modules/itemCount.js';

describe('Counting the Number of Items in the homepage', () => {
  document.body.innerHTML = `
  <div class="tvcard">
  <div class="count"></div>
  <div class="checked"></div>
  <div class="clear"></div>
  </div>
  <div class="tvcard">

  <div class="checked"></div>
  <div class="clear"></div>
  </div>
  `;
  countingFunction();
  const tester = countingFunction();

  const countL = document.querySelector('.count');
  test('Counts the number of items in the homepage ', () => {
    expect(tester).toBe(2);
    expect(tester).toBeTruthy();
  });
  test('Checks if number of item in the homepage equals the actual items in the homepage ', () => {
    expect(countL.innerHTML).toEqual('(2) TV Shows');
  });
});
