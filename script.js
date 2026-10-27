const scenes = [
  ['Sétáljatok lassan, kézen fogva.', 'Nyugodtan, egymás tempójában.'],
  ['Súgj valamit anya fülébe!', 'Takard el a szádat a kezeddel.'],
  ['Apa, súgj valami vicceset a fülébe!', 'Csak ő hallhatja.'],
  ['Guggoljatok le! Mit találtatok?', 'Mutassátok meg egymásnak.'],
  ['Bújjatok össze egy nagy ölelésre!', 'Mindenki mindenkit.'],
  ['Ülj fel apa vállára!', 'Fogjátok egymás kezét.'],
  ['Anya, pördítsd meg egyszer!', 'Lassan, kézen fogva.'],
  ['Fussatok anya és apa karjába!', 'Ők már várnak benneteket.'],
  ['Háromra mindenki ugorjon!', 'Együtt: egy, kettő, három!'],
  ['Bújjatok el mögöttük — aztán kukucs!', 'Két oldalról lessetek ki.'],
  ['Anya, csikizd meg egy kicsit!', 'Csak finoman, az oldalán.'],
  ['Érintsétek össze az orrotokat!', 'Nézzetek egymás szemébe.'],
  ['Mutassátok meg a tapsolós játékot!', 'A szülők csak figyelnek.'],
  ['Apa, emeld fel magasra!', 'Tartsd biztosan, két kézzel.'],
  ['Álljatok háttal egymásnak!', 'Nézzetek oldalra a másikra.'],
  ['Adj anyának egy virágot!', 'Várd meg, míg átveszi.'],
  ['Üljetek egészen közel!', 'Dőljetek egymásnak.'],
  ['Menjetek pontosan apa nyomában!', 'Libasorban, lépésről lépésre.'],
  ['Repüljetek, mint a repülők!', 'Karok oldalra, szárnyként.'],
  ['Feküdjetek össze, fejjel középre!', 'Minden arc legyen közel.']
];

const cards = document.querySelector('#cards');
scenes.forEach(([title, note], index) => {
  const article = document.createElement('article');
  article.className = 'card';
  const n = String(index + 1).padStart(2, '0');
  article.innerHTML = `
    <button class="image-button" type="button" data-index="${index}" aria-label="${n}. kép megnyitása teljes képernyőn">
      <img src="assets/scene-${n}.webp" alt="${title}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async">
    </button>
    <div class="card-copy">
      <p class="card-number">${n} / ${scenes.length}</p>
      <h2>${title}</h2>
      <small>${note}</small>
    </div>`;
  cards.append(article);
});

const modal = document.querySelector('.lightbox');
const modalImage = modal.querySelector('img');
const modalCaption = modal.querySelector('figcaption');
const modalCount = modal.querySelector('.lightbox-count');
let current = 0;

function show(index) {
  current = (index + scenes.length) % scenes.length;
  const n = String(current + 1).padStart(2, '0');
  modalImage.src = `assets/scene-${n}.webp`;
  modalImage.alt = scenes[current][0];
  modalCaption.textContent = scenes[current][0];
  modalCount.textContent = `${n} / ${scenes.length}`;
}

cards.addEventListener('click', event => {
  const button = event.target.closest('.image-button');
  if (!button) return;
  show(Number(button.dataset.index));
  modal.showModal();
});

modal.querySelector('.lightbox-close').addEventListener('click', () => modal.close());
modal.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
modal.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));

modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

document.addEventListener('keydown', event => {
  if (!modal.open) return;
  if (event.key === 'ArrowLeft') show(current - 1);
  if (event.key === 'ArrowRight') show(current + 1);
});

let touchX = null;
modal.addEventListener('touchstart', event => { touchX = event.touches[0].clientX; }, {passive: true});
modal.addEventListener('touchend', event => {
  if (touchX === null) return;
  const delta = event.changedTouches[0].clientX - touchX;
  if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1));
  touchX = null;
}, {passive: true});
