// Array Display Dynamic Data
let Names = ['Ahmed','Mohamed','Qazi','Mark'];
let Ages = ["16 Years Old" , "34 Years Old" , "20 Years Old" , "23 Years Old"];

let container = document.createElement('div');

container.style.textAlign = 'center';
document.body.appendChild(container);

function CreateCard(name , ages) {
    // Create Elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('span');
    let img = document.createElement('img');

    // Add Content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = 'perso2.webp';
    
    // style
    card.style.width = '200px';
    img.style.width = '100%';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '10px';
    card.style.display = 'inline-block';


    // Add Content To Elements
    title.appendChild(head);
    age.appendChild(ageContent); 

    // Add Elements To Card
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    // Add Card To Container
    container.appendChild(card);
}


// Loop For Calling Function
for (let i = 0; i < 4; i++) {
    CreateCard(Names[i] , Ages[i]);
}