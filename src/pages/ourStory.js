/**
 * Adds content to and returns our story
 * @returns Site our story page
 */
function loadOurStory() {
    return ourStory();
}

function ourStory(){
    const ourStory = document.createElement('div');
    ourStory.classList.add("our-story");
    const ourStoryTitle = document.createElement('h1');
    ourStoryTitle.classList.add('page-title');
    ourStoryTitle.textContent = "Our Story";
    ourStory.appendChild(ourStoryTitle);
    return ourStory;
}

function ourStoryText(){
    
}

export default loadOurStory;