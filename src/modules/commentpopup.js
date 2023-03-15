const closePop = (event) => {
  event.parentNode.remove();
};

window.closePop = closePop;
const commentPop = (show) => `<dialog class="comment-modal">
                    <button value="default" class="close ${show.id}" onclick="closePop(this)">X</button>
                    <div class="article">
                        <div class="show-img">
                            <img src="${show.image.original}" alt="${show.name}" />
                        </div>
                        <h3>${show.name}</h3>
                        <div class="caption">
                            <span>Type: ${show.type}</span>
                            <span>Language: ${show.language}</span>
                        </div>
                        <div class="caption">
                            <span>Status: ${show.status}</span>
                            <span>Genre: ${show.genres[0]}</span>
                        </div>
            </div>
        </dialog>`;
export default commentPop;