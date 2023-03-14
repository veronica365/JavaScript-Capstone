const addHeader = () => `
        <nav>
            <div class="logo">TV Shows</div>
            <ul>
                <li>Home</li>
                <li>Discover</li>
                <li>Trending</li>
            </ul>
        </nav>`;

const addFooter = () => '<p class="footnote"> Javascript Capstone Project Created by William and Omotayo under the MIT License</p>';

const initialize = () => {
  document.querySelector('header').innerHTML = addHeader();
  document.querySelector('footer').innerHTML = addFooter();
};

export default initialize;
