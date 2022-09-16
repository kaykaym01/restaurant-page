import storyContent from "./storyContent";
import spanishMoss from "../img/spanish-moss.jpg"
import '../css/ourStory.css';

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

    ourStory.appendChild(ourStoryText());
    ourStory.appendChild(ourStoryImg());
    return ourStory;
}

function ourStoryText(){
    const storyText = document.createElement('p');
    storyText.classList.add("story-content");
    storyText.textContent = storyContent;
    return storyText;
}

function ourStoryImg() {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add("story-img-wrapper");
    
    const image = new Image();
    image.className = "story-img";
    image.src = spanishMoss;
    image.alt = "trees covered in spanish moss overlooking a trail";
    imageDiv.appendChild(image);

    return imageDiv;
}

export default loadOurStory;