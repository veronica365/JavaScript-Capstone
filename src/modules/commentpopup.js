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
                <div>
                    <h4>Comments</h4>
                    <div class="comments">Comments added shall appear here</div>
                </div>
                <form>
                    <h4>Add a comment</h4>
                    <div>
                        <input type="text" name="username" placeholder="Your name">
                    </div>
                    <div>
                        <textarea name="comment" rows="6" placeholder="Your Insights"></textarea>
                    </div>
                    <div>
                        <button class="post" type="submit">Comment</button>
                    </div>
                </form>
                </>
            </div>
        </dialog>`;
export default commentPop;
