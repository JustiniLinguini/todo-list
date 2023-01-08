export default function initListPopUp(){
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