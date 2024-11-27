var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });

  const paragraphs = [
    "IT'S NOT ABOUT KNOWING ME—IT'S ABOUT THE POWER OF WHAT WE CAN BUILD TOGETHER.",
    "Standing on the defensive indicates strength; attacking, a superabundance of strength.",
    "To secure ourselves against Cybercrimes is in our own hands, but the opportunity of defeating the Threat actors is provided by the Attacker himself. All warfare is based on deception.",
    "when using our forces, we must seem inactive; when we are near, we must make the Threat actors believe we are far away; when far away, we must make him believe we are near.",
    "Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
    "The expert in cybersecurity doesn't fight the breach—he outsmarts it, turning an attacker's move into an opportunity to fortify defenses without a single shot fired.",
    "To conquer the digital battlefield is not to defeat the intruder, but to ensure the attacker’s path is already sealed before they take a step.",
    "Cybersecurity excellence is not in reacting to the breach, but in making the breach impossible. The best defenders win by ensuring there is nothing to breach.",
    "The truly secure system is one that deceives the attacker into thinking the door is wide open, while the defenses remain unseen and impenetrable.",
    "The clever cybersecurity expert never fights a battle they don’t need to. Their brilliance lies in making mistakes impossible, turning the enemy’s tactics into futile gestures.",
    "A master of cybersecurity wins not by repelling every attack, but by creating an environment where attacks are thwarted before they even begin.",
    "The wise cybersecurity strategist secures their defenses before the battle begins, ensuring that no weakness is left for the enemy to exploit.",
    "The greatest defenders make the enemy believe they are exposed, when in reality, they are already locked out—forever.",
    "The skilled cybersecurity leader doesn't fight to defeat the enemy; they secure their realm so thoroughly that the enemy never even dares to attack.",
    "Victory in cybersecurity isn’t in the number of threats you repel, but in the number of threats you make irrelevant before they even arise.",
    "A well-secured system doesn’t react to attackers; it anticipates and neutralizes them before they ever become a threat.",
    "The true art of defense lies in making every breach impossible, so that victory comes not through fighting, but through preparation and foresight"
];


function generateCard(quot) {
  const card = `
  <div class="slide team-card hover:blur-0 w-[calc(90vw)] md:w-[50vw] rounded-2xl h-fit backdrop-blur-sm">
      <div class="hidden justify-center items-center w-fit pl-5 pt-2">
          <div class="cover size-[60px]">
              <img src="./imgs/person/image.png" class="size-full object-cover object-center rounded-full" alt="">
          </div>
          <div>
              <h1 class="text-white text-xl">Sano Kamali</h1>
              <p class="text-indigo-400">Cyber Wisdom</p>
          </div>
      </div>
      <div class="p-5">
          <p class="text-indigo-100 py-2 text-xl border-indigo-500 bg-[#9857fa0b] pl-5 border-l-2">${quot}
      <p class="text-indigo-400">~ NKiko Hertier</p>
          </p>
      </div>
  </div>`;
  return card;
}

function displayCards(id, paragraphs){
  let cards = '';
  paragraphs.forEach(paragraph => {
    cards += generateCard(paragraph)
  });
  const cardsContainer = document.getElementById(id);
  cardsContainer.innerHTML = cards;
}

displayCards('cards', paragraphs)