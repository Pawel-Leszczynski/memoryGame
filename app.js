let container;
let card;
let card__container;
let imgBack;
let imgFront;
let arrEvent;

const portraitArr = ["Abomination.png", "Antiquarian.png", "Arbalest.png", "Bounty_hunter.png", "Crusader.png",
                     "Flagellant.png", "Grave_robber.png", "Hellion.png", "Highwayman.png", "Hound_master.png",
                     "Jester.png", "Leper.png", "Man-at-arms.png", "Musketeer.png", "Occultist.png", "Plague_doctor.png",
                     "Shieldbreaker.png", "Vestal.png", "Abomination.png", "Antiquarian.png", "Arbalest.png", "Bounty_hunter.png", "Crusader.png",
                     "Flagellant.png", "Grave_robber.png", "Hellion.png", "Highwayman.png", "Hound_master.png",
                     "Jester.png", "Leper.png", "Man-at-arms.png", "Musketeer.png", "Occultist.png", "Plague_doctor.png",
                     "Shieldbreaker.png", "Vestal.png"];

for(let i = portraitArr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = portraitArr[i];
  portraitArr[i] = portraitArr[j];
  portraitArr[j] = temp;
}

console.log(portraitArr);

const createPortrait = () => {
  
    container = document.querySelector('.container');
  
    portraitArr.forEach((element, i) => {
      card__container  = container.appendChild(document.createElement('div'));
      card__container.classList = "container__card";
      card__container.setAttribute("id", `card${i}`);
  
      card = card__container.appendChild(document.createElement('div'));
      card.classList = "container__card__inner";
  
      imgBack = card.appendChild(document.createElement('img'));
      imgBack.classList = "container__card__inner container__card__inner--back";
  
      imgFront = card.appendChild(document.createElement('img'));
      imgFront.classList = "container__card__inner container__card__inner--front";
  
      imgBack.setAttribute("src", `img/${element}`);
      imgFront.setAttribute("src", "img/Torch.jpg");
    });
}


createPortrait();


let elementsArr = document.getElementsByClassName("container__card");
for ( let element of elementsArr) {
  element.addEventListener('click', event => {
    let attrIsSet = event.target.hasAttribute("style");
    
    if (!attrIsSet) {
      event.target.parentElement.style.transformStyle = "preserve-3d";
      event.target.parentElement.parentElement.style.transform = "rotateY(180deg)"
      event.target.parentElement.parentElement.style.transition = "all 2s";
      imgBack.style.transform = "rotateY(0)";
      event.target.parentElement.style.backfaceVisibility = "hidden";
      console.log(event.target)  
    }

    event.stopPropagation();
  }, false)
}

console.log(portraitArr);

