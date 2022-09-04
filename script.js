const container = document.querySelector('#container');

const textOne = document.createElement('p');
const textTwo = document.createElement('h3');

textOne.classList.add('redP');
textTwo.classList.add('blueH3');

textOne.textContent = "Hey I'm red!";
textTwo.textContent = "I'm a blue H3!"

textOne.style.color = 'red';
textTwo.style.color = 'blue';

container.appendChild(textOne);
container.appendChild(textTwo);

const blackDiv = document.createElement('div');
const divHeader = document.createElement('h1');
const divText = document.createElement('p');

blackDiv.style.border = 'black';
blackDiv.style.backgroundColor = 'pink';
divHeader.textContent = "I'm a div";
divText.textContent = "ME TOO!";

blackDiv.appendChild(divHeader);
blackDiv.appendChild(divText);

container.appendChild(blackDiv);


const redPP = document.getElementByClassName('redP');
redPP.style.color = "black";