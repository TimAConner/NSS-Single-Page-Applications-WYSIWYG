let people = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "1Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "2Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "3Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "4Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
          birth: 1747,
          death: 1797
        }
    }
];

let currentSelection = null;

function createPerson(person, indexValue){
    let output = document.getElementById("output");
    
    let personDOM = document.createElement("person");
    personDOM.setAttribute("id", indexValue);
    
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
    bioDOM.setAttribute("id", `bio${indexValue}`);
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


    //When clicking on person, add border, focus on text area, and set text area valaue to bio ..
    personDOM.addEventListener("click", function(){
        currentSelection = personDOM;

        let textInputDOM = document.getElementById("text-input");
        textInputDOM.focus();
        
        resetBorders();
        textInputDOM.value = person.bio;
        personDOM.setAttribute("style", "border: 1px dotted black;")
    });

}

function resetBorders(){
    let personTags = document.getElementsByTagName("person");
    for(let i = 0; i < personTags.length; i ++){
        personTags[i].removeAttribute("style");
    }
}

function createPeopleDOM(){
    people.forEach(function(element, i){
        createPerson(element, i);
    });
}

function addModifyTextHandler(){
    let textInput = document.getElementById("text-input");
    textInput.addEventListener("keydown", function(){
        if(currentSelection !== null){
            let personId = currentSelection.getAttribute("id");
            let paraDOM = document.getElementById(`bio${personId}`);
            people[personId].bio = textInput.value;
            paraDOM.textContent = people[personId].bio;
        }
    });
}

function addDeleteTextHandler(){
    let textInput = document.getElementById("text-input");

    textInput.addEventListener('keypress', function (e) {
        if(currentSelection !== null){
            let personId = currentSelection.getAttribute("id");
            if (e.keyCode === 13) {
                textInput.value = "";
                textInput.blur();
                resetSelection();
                resetBorders();
            }
        }
    }, false);
}


function resetSelection(){
    currentSelection = null;
}


createPeopleDOM();
addModifyTextHandler();
addDeleteTextHandler();