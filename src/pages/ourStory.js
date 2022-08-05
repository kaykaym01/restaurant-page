/**
 * Adds content to and returns our story
 * @returns Site our story page
 */
function loadOurStory() {
    const ourStory = document.createElement('div');
    ourStory.classList.add("our-story");
    console.log("our story loaded");
    return ourStory
}

export default loadOurStory;