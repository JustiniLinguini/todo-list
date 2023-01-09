import domTools from "./dom-tools";
import toDoList from './to-do-list';

function popUpDom() {
    const card = document.createElement('div');
    card.classList.add('pop-up');

    const prompt = document.createElement('h3');
    prompt.textContent = "Please Enter A Project Name"

    const inputProjectName = document.createElement('input');
    inputProjectName.classList.add('project-name-input');
    inputProjectName.type = "text";

    const submitName = document.createElement('button');
    submitName.textContent = "Submit";
    submitName.classList.add('project-namer')

    card.appendChild(prompt);
    card.appendChild(inputProjectName);
    card.appendChild(submitName);

    return card;
}

const projectDisplay = document.querySelector('.project-display');

function popUpListener(){
    popUpClick(projectDisplay);
    this.removeEventListener('click', popUpListener);
}

export default function popUpClick(parent){
    const toolSet = new domTools;
    const dateCreated = new Date();
    const popUp = popUpDom();
    parent.appendChild(popUp);

    const projectNameInputField = document.querySelector('.project-name-input');
    const projectNamer = document.querySelector('.project-namer');
    const newListButton = document.querySelector('#make-new-list');

    projectNamer.addEventListener('click', () => {
        let projectName = projectNameInputField.value;
        projectNameInputField.value = "";
        popUp.remove();
        const initToDoList = new toDoList(projectName, dateCreated);
        const toDoListCard = toolSet.makeCard(initToDoList);
        parent.appendChild(toDoListCard);
        newListButton.addEventListener('click', popUpListener);
    })
}