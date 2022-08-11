import '../css/contact.css'

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

    contact.appendChild(hours());
    contact.appendChild(location());
    contact.appendChild(phone());
    contact.appendChild(email());

    return contact;
}

function hours(){
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("contact-section");

    const title = document.createElement("h3");
    title.textContent = "Hours";
    hoursDiv.appendChild(title);

    const times = document.createElement("p");
    times.textContent = "Everyday 12pm - 8pm";
    hoursDiv.appendChild(times);

    return hoursDiv;
}

function location(){
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("contact-section");

    const title = document.createElement("h3");
    title.textContent = "Location";
    locationDiv.appendChild(title);

    const address = document.createElement("div");
    const street = document.createElement("p");
    street.textContent = "123 Street";
    address.appendChild(street);
    const zip = document.createElement("p");
    zip.textContent = "City, State 0000";
    address.appendChild(zip);
    locationDiv.appendChild(address);

    return locationDiv;
}

function phone(){
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("contact-section");

    const title = document.createElement("h3");
    title.textContent = "Phone";
    phoneDiv.appendChild(title);

    const number = document.createElement("p");
    number.textContent = "123-456-7890";
    phoneDiv.append(number);

    return phoneDiv;
}

function email(){
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-section");

    const title = document.createElement("h3");
    title.textContent = "E-mail";
    emailDiv.appendChild(title);

    const address = document.createElement("p");
    address.textContent = "rooted@fakeemail.gom";
    emailDiv.append(address);

    return emailDiv;
}

export default loadContact;