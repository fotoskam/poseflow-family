const scenes = [
  ['Sétáljatok lassan, kézen fogva.', 'Nyugodtan, egymás tempójában.', ['nyar'], ['csalad']],
  ['Súgj valamit anya fülébe!', 'Takard el a szádat a kezeddel.', ['nyar'], ['szulo-gyerek']],
  ['Apa, súgj valami vicceset a fülébe!', 'Csak ő hallhatja.', ['nyar'], ['szulo-gyerek']],
  ['Guggoljatok le! Mit találtatok?', 'Mutassátok meg egymásnak.', ['tavasz', 'nyar'], ['testverek']],
  ['Bújjatok össze egy nagy ölelésre!', 'Mindenki mindenkit.', ['nyar'], ['csalad']],
  ['Ülj fel apa vállára!', 'Fogjátok egymás kezét.', ['nyar', 'osz'], ['csalad']],
  ['Anya, pördítsd meg egyszer!', 'Lassan, kézen fogva.', ['nyar'], ['csalad']],
  ['Fussatok anya és apa karjába!', 'Ők már várnak benneteket.', ['tavasz', 'nyar'], ['csalad']],
  ['Kocc!', 'Sétáljatok egymás mellett, és háromra finoman koccintsátok össze a csípőtöket!', ['osz'], ['testverek']],
  ['Bújjatok el mögöttük — aztán kukucs!', 'Két oldalról lessetek ki.', ['nyar'], ['csalad']],
  ['Anya, csikizd meg egy kicsit!', 'Csak finoman, az oldalán.', ['nyar'], ['csalad']],
  ['Érintsétek össze az orrotokat!', 'Nézzetek egymás szemébe.', ['nyar'], ['szulo-gyerek']],
  ['Mutassátok meg a tapsolós játékot!', 'A szülők csak figyelnek.', ['tavasz', 'nyar'], ['csalad']],
  ['Apa, emeld fel magasra!', 'Tartsd biztosan, két kézzel.', ['nyar'], ['szulo-gyerek']],
  ['Álljatok háttal egymásnak!', 'Nézzetek oldalra a másikra.', ['nyar'], ['testverek']],
  ['Adj anyának egy virágot!', 'Várd meg, míg átveszi.', ['tavasz', 'nyar'], ['szulo-gyerek']],
  ['Üljetek egészen közel!', 'Dőljetek egymásnak.', ['nyar'], ['csalad']],
  ['Menjetek pontosan apa nyomában!', 'Libasorban, lépésről lépésre.', ['tavasz', 'nyar'], ['csalad']],
  ['Repüljetek, mint a repülők!', 'Karok oldalra, szárnyként.', ['nyar'], ['testverek']],
  ['Feküdjetek össze, fejjel középre!', 'Minden arc legyen közel.', ['nyar'], ['csalad']],
  ['Lógó lábak', 'Ülj fel ide, hagyd lógni a lábad, és nézz le egy pillanatra!', ['osz'], ['gyerek']],
  ['A fánál', 'Támaszkodj a fának, tedd kényelmesen a kezed, és nézz rám!', ['osz'], ['gyerek']],
  ['Nézzünk körül!', 'Üljetek egymás mellé, és nézzetek arra, amerre apa mutat!', ['osz'], ['szulo-gyerek']],
  ['Vállra hajtva', 'Hajtsd a fejed anya vállára, és maradjatok így egy kicsit!', ['belter'], ['szulo-gyerek']],
  ['A kis kincs', 'Tartsd a kezedben, amit találtál, és mutasd meg nekem!', ['osz'], ['gyerek']],
  ['Igazítsd meg!', 'Apa, igazítsd meg egy kicsit a kabátját!', ['osz'], ['szulo-gyerek']],
  ['Összekulcsolt kezek', 'Fogjátok meg egymás kezét, és tegyétek az öletekbe!', ['belter'], ['szulo-gyerek']],
  ['Testvéri közelség', 'Üljetek egymás mellé. Hajtsd a fejed a tesód vállára!', ['osz'], ['testverek']],
  ['Közelebbről', 'Guggolj le, és nézd meg közelről, mit találtál!', ['osz'], ['gyerek']],
  ['Hajsimítás', 'Anya, simítsd ki a haját az arcából!', ['tavasz'], ['szulo-gyerek']],
  ['Hó a kézben', 'Mutasd meg, milyen hópelyheket gyűjtöttél!', ['tel'], ['gyerek']],
  ['Kukucskálj ki!', 'Ülj az ablakhoz, és nézd meg, mi történik odakint!', ['tel', 'belter'], ['gyerek']],
  ['Sátorozás', 'Bújjatok a takaró alá, és világítsatok zseblámpával!', ['belter'], ['testverek']],
  ['Hátulról', 'Fogjátok meg a kezét, és sétáljatok előre!', ['osz'], ['csalad']],
  ['Tócsában', 'Ugorj egyet a tócsába!', ['tavasz', 'osz'], ['gyerek']],
  ['Fújjuk el!', 'Fújjatok a pitypangra, és nézzétek, merre száll!', ['tavasz'], ['szulo-gyerek']],
  ['Bújócska', 'Bújj a fa mögé, és kukucskálj ki csak az egyik oldalon!', ['osz'], ['gyerek']],
  ['Levélzápor', 'Gyűjtsetek leveleket, és dobjátok fel egyszerre!', ['osz'], ['csalad']],
  ['Súgj egy titkot!', 'Súgj valamit a tesód fülébe, amit más nem hallhat!', ['osz'], ['testverek']],
  ['Közös mese', 'Bújjatok közelebb egymáshoz, és nézzétek meg együtt a könyvet!', ['belter'], ['szulo-gyerek']]
].map(([title, instruction, seasons, subjects, extension = 'webp'], index) => ({ id: index + 1, title, instruction, seasons, subjects, extension }));

const cards = document.querySelector('#cards');
const resultCount = document.querySelector('#result-count');
const filterForm = document.querySelector('#filters');
const modal = document.querySelector('.lightbox');
const modalImage = modal.querySelector('img');
const modalCaption = modal.querySelector('figcaption');
const modalCount = modal.querySelector('.lightbox-count');
let visibleScenes = [...scenes];
let current = 0;

function imagePath(scene) {
  return `assets/scene-${String(scene.id).padStart(2, '0')}.${scene.extension}`;
}

function renderCards() {
  cards.replaceChildren();
  if (!visibleScenes.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'Ehhez a párosításhoz nincs fotó.';
    cards.append(empty);
  }
  visibleScenes.forEach((scene, visibleIndex) => {
    const article = document.createElement('article');
    article.className = 'card';
    const n = String(scene.id).padStart(2, '0');
    article.innerHTML = `
      <button class="image-button" type="button" data-index="${visibleIndex}" aria-label="${n}. kép megnyitása teljes képernyőn">
        <img src="${imagePath(scene)}" alt="${scene.title}: ${scene.instruction}" loading="${visibleIndex < 2 ? 'eager' : 'lazy'}" decoding="async">
      </button>
      <div class="card-copy">
        <p class="card-number">${n} / 40</p>
        <h2>${scene.title}</h2>
        <small>${scene.instruction}</small>
      </div>`;
    cards.append(article);
  });
  resultCount.textContent = `${visibleScenes.length} kártya`;
  cards.scrollLeft = 0;
}

function applyFilters() {
  const season = filterForm.elements.season.value;
  const subject = filterForm.elements.subject.value;
  visibleScenes = scenes.filter(scene =>
    (season === 'mind' || scene.seasons.includes(season)) &&
    (subject === 'mind' || scene.subjects.includes(subject))
  );
  renderCards();
}

function show(index) {
  if (!visibleScenes.length) return;
  current = (index + visibleScenes.length) % visibleScenes.length;
  const scene = visibleScenes[current];
  modalImage.src = imagePath(scene);
  modalImage.alt = `${scene.title}: ${scene.instruction}`;
  modalCaption.textContent = `${scene.title} — ${scene.instruction}`;
  modalCount.textContent = `${current + 1} / ${visibleScenes.length}`;
}

filterForm.addEventListener('change', applyFilters);
cards.addEventListener('click', event => {
  const button = event.target.closest('.image-button');
  if (!button) return;
  show(Number(button.dataset.index));
  modal.showModal();
});

modal.querySelector('.lightbox-close').addEventListener('click', () => modal.close());
modal.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
modal.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
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

renderCards();
