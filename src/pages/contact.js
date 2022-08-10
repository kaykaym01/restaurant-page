/**
 * Adds content to and returns contact
 * @returns Site contact page
 */
function loadContact() {
        return contact();
}

function contact() {
    const contact = document.createElement('div');
    contact.classList.add("contact");

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("page-title")
    contactTitle.textContent = "Contact Us";
    contact.appendChild(contactTitle);
    return contact;
}

export default loadContact;