let people = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    }
];


function createPerson(person){
    let output = document.getElementById("output");
    
    let personDOM = document.createElement("person");
    
    //Create header dom
    let headerDOM = document.createElement("header");

    //Create name and insert
    let nameDOM = document.createElement("h1");
    var nameText = document.createTextNode(person.name);
    nameDOM.appendChild(nameText);


    //Create Title
    let titleDOM = document.createElement("h2");
    let titleText = document.createTextNode(person.title);
    titleDOM.appendChild(titleText);

    //insert name and title
    headerDOM.appendChild(nameDOM);
    headerDOM.appendChild(titleDOM);

    //Create section Dom
    let sectionDOM = document.createElement("section");

    //Create bio
    let bioDOM = document.createElement("p");
    let bioText = document.createTextNode(person.bio);
    bioDOM.appendChild(bioText);

    //Create image
    let imgDOM = document.createElement("img");
    imgDOM.setAttribute("src", person.image);
    imgDOM.setAttribute("alt", person.name);
    
    //Insert image
    sectionDOM.appendChild(imgDOM);
    sectionDOM.appendChild(bioDOM);

    //Create footer dom
    let footerDOM = document.createElement("footer");

    //Create lifespan
    let lifespanDOM = document.createElement("time");
    let lifespanText = document.createTextNode(`${person.lifespan.birth} to  ${person.lifespan.death}`)
    lifespanDOM.appendChild(lifespanText);

    //insert lifespanDOM
    footerDOM.appendChild(lifespanDOM);

    //Insert header, section, footer, and person DOM
    personDOM.appendChild(headerDOM);
    personDOM.appendChild(sectionDOM);
    personDOM.appendChild(footerDOM);
    output.appendChild(personDOM);

}

function createPeopleDOM(){
    people.forEach(function(element){
        createPerson(element);
    });
}

createPeopleDOM();