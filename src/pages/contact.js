/**
 * Adds content to and returns contact
 * @returns Site contact page
 */
function loadContact() {    
    const contact = document.createElement('div');
    contact.classList.add("contact");
    console.log("contact loaded");
    return contact;
}

export default loadContact;