let container;
let portrait;
let torch;

const createCard = () => {
  for(let i = 0; i <= 34; i++) {
    container = document.querySelector('.container');
    portrait = container.appendChild(document.createElement('div'));
    portrait.className = "portrait";
    torch = portrait.appendChild(document.createElement('img'));
    torch.setAttribute("src", "img/Torch.jpg");
    torch.setAttribute("alt", "Torch");
    torch.setAttribute("class", "torch");
  }
}


createCard();