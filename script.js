const familyScenes = [
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

const coupleScenes = [
  ['Kocc!', 'Sétáljatok egymás mellett, és finoman koccintsátok össze a csípőtöket!', ['osz']],
  ['Egy pillanatra', 'Álljatok meg, forduljatok egymás felé, és maradjatok így egy kicsit!', ['nyar']],
  ['Hátulról átölelve', 'Állj mögé, öleld át lazán, te pedig dőlj egy kicsit hátra!', ['osz']],
  ['Csak egy titok', 'Súgj valamit a fülébe, amit én nem hallhatok!', ['tavasz']],
  ['Egymás mellett', 'Üljetek le egymás mellé, olyan közel, hogy összeérjen a vállatok!', ['osz']],
  ['Húzd magadhoz!', 'Fogd meg a kezét, és húzd finoman egy kicsit közelebb!', ['tavasz']],
  ['Homlok a homlokhoz', 'Lépjetek közelebb, érintsétek össze a homlokotokat, és maradjatok így!', ['nyar']],
  ['A válladon', 'Hajtsd a fejed a vállára, te pedig fordulj felé egy picit!', ['osz']],
  ['Fordulj vissza!', 'Induljatok el kézen fogva, aztán nézzetek vissza rám!', ['osz']],
  ['Tánclépés', 'Fogjátok meg egymást, és forduljatok egy lassút, mintha táncolnátok!', ['nyar']],
  ['Kéz a kézben', 'Álljatok egymással szemben, fogjátok meg mindkét kezeteket, és lazítsátok el a vállatokat!', ['tel']],
  ['Ne engedd el!', 'Indulj el lassan, te pedig maradj egy pillanatra, és tartsd a kezét!', ['osz']],
  ['Egy kis igazítás', 'Igazítsd meg a gallérját vagy a ruháját, mintha most indulnátok valahová!', ['tel']],
  ['Együtt nevetni', 'Próbáljátok meg egymást megnevettetni, de engem most hagyjatok ki!', ['tavasz']],
  ['Közel, de nem túl', 'Álljatok egymás mellé, forduljatok picit egymás felé, és nézzetek rám!', ['nyar']],
  ['Orr az orrhoz', 'Érintsétek össze finoman az orrotokat, aztán nézzetek egymásra!', ['tel']],
  ['Közös kilátás', 'Álljatok egymás mellé, nézzetek ugyanabba az irányba, és fogjátok meg egymás kezét!', ['osz']],
  ['A kedvenc helyed', 'Tedd a fejed oda a vállára vagy a mellkasára, ahol a legkényelmesebb!', ['belter']],
  ['Egy kis bolondozás', 'Próbáljátok meg finoman kibillenteni egymást az egyensúlyból, de a lábatok maradjon a földön!', ['osz']],
  ['Csak ti ketten', 'Öleljétek át egymást úgy, ahogy máskor szoktatok. Most ne foglalkozzatok velem!', ['belter']]
].map(([title, instruction, seasons], index) => ({
  id: index + 1,
  title,
  instruction,
  seasons,
  subjects: ['parok'],
  extension: 'webp',
  category: 'couples'
}));

familyScenes.forEach(scene => { scene.category = 'family'; });

const cards = document.querySelector('#cards');
const resultCount = document.querySelector('#result-count');
const filterForm = document.querySelector('#filters');
const categoryButtons = [...document.querySelectorAll('.category-button')];
const subjectFilter = filterForm.elements.subject.closest('label');
const sceneTotal = document.querySelector('#scene-total');
const footerCount = document.querySelector('#footer-count');
const modal = document.querySelector('.lightbox');
const modalImage = modal.querySelector('img');
const modalCaption = modal.querySelector('figcaption');
const modalCount = modal.querySelector('.lightbox-count');
let activeCategory = 'family';
let visibleScenes = [...familyScenes];
let current = 0;

function imagePath(scene) {
  const prefix = scene.category === 'couples' ? 'couple' : 'scene';
  return `assets/${prefix}-${String(scene.id).padStart(2, '0')}.${scene.extension}`;
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
    const total = activeCategory === 'couples' ? coupleScenes.length : familyScenes.length;
    article.innerHTML = `
      <button class="image-button" type="button" data-index="${visibleIndex}" aria-label="${n}. kép megnyitása teljes képernyőn">
        <img src="${imagePath(scene)}" alt="${scene.title}: ${scene.instruction}" loading="${visibleIndex < 2 ? 'eager' : 'lazy'}" decoding="async">
      </button>
      <div class="card-copy">
        <p class="card-number">${n} / ${total}</p>
        <h2>${scene.title}</h2>
        <small>${scene.instruction}</small>
      </div>`;
    cards.append(article);
  });
  resultCount.textContent = `${visibleScenes.length} kártya`;
  const total = activeCategory === 'couples' ? coupleScenes.length : familyScenes.length;
  footerCount.textContent = `${visibleScenes.length} / ${total}`;
  cards.scrollLeft = 0;
}

function applyFilters() {
  const season = filterForm.elements.season.value;
  const subject = filterForm.elements.subject.value;
  const source = activeCategory === 'couples' ? coupleScenes : familyScenes;
  visibleScenes = source.filter(scene =>
    (season === 'mind' || scene.seasons.includes(season)) &&
    (activeCategory === 'couples' || subject === 'mind' || scene.subjects.includes(subject))
  );
  renderCards();
}

function setCategory(category) {
  activeCategory = category;
  categoryButtons.forEach(button => {
    const selected = button.dataset.category === category;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  subjectFilter.hidden = category === 'couples';
  filterForm.elements.subject.value = 'mind';
  filterForm.elements.season.value = 'mind';
  const total = category === 'couples' ? coupleScenes.length : familyScenes.length;
  sceneTotal.textContent = total;
  footerCount.textContent = `${total} / ${total}`;
  applyFilters();
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
categoryButtons.forEach(button => button.addEventListener('click', () => setCategory(button.dataset.category)));
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
