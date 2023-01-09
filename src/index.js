//main project container
import './style.css';
import toDoList from './to-do-list';
import toDoListItem from './list-item';
import domTools from "./dom-tools";
import popUpClick from './init-list-pop-up';

const newListButton = document.querySelector('#make-new-list');
const projectDisplay = document.querySelector('.project-display');
const mainContent = document.querySelector('#content');

const toolSet = new domTools;

function popUpListener(){
    popUpClick(projectDisplay);
    this.removeEventListener('click', popUpListener);
}

newListButton.addEventListener('click', popUpListener);



