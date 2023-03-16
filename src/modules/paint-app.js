const addHeader = () => `
        <nav>
            <div class="logo">TV Shows</div>
            <ul>
                <li class = "count">Home</li>
                <li>Discover</li>
                <li>Trending</li>
            </ul>
        </nav>`;

const initialize = () => {
  document.querySelector('header').innerHTML = addHeader();
};

export default initialize;
