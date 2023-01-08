export default class domTools{
    makeCard(obj){

        const card = document.createElement('div');
        card.classList.add('card');

        for(const prop in obj){
            
            if(prop == "title"){
                const domItem = document.createElement('h3');
                domItem.textContent = obj[prop].toString();
                card.appendChild(domItem);
            } else {
                const domItem = document.createElement('p');
                domItem.textContent = obj[prop].toString();
                card.appendChild(domItem);
            }
        }

        return card;
    }

    addCardToParent(parent, child){
        parent.appendChild(child);
    }

    createInputField(){
        const input = document.createElement('input');
        return input;
    }
}