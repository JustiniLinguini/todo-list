//main project container
import './style.css';
import toDoList from './to-do-list';
import toDoListItem from './list-item';
import domTools from "./dom-tools";
import initListPopUp from './init-list-pop-up';

const toolSet = new domTools;
const projectDisplay = document.querySelector('.project-display');
const newListButton = document.querySelector('#make-new-list');
const mainContent = document.querySelector('#content');

newListButton.addEventListener('click',() => {
    const dateCreated = new Date();
    const popUp = initListPopUp();
    projectDisplay.appendChild(popUp);

    const projectNameInputField = document.querySelector('.project-name-input');
    const projectNamer = document.querySelector('.project-namer');

    projectNamer.addEventListener('click', () => {
        let projectName = projectNameInputField.value;
        projectNameInputField.value = "";
        popUp.remove();
        const initToDoList = new toDoList(projectName, dateCreated);
        const toDoListCard = toolSet.makeCard(initToDoList);
        projectDisplay.appendChild(toDoListCard);
    })

    /*
    const initToDoList = new toDoList("Blank List", dateCreated);
    const toDoListCard = toolSet.makeCard(initToDoList);
    projectDisplay.appendChild(toDoListCard);
    */
})


