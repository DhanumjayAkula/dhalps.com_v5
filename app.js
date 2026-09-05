/* Fixed view, no page scroll. Every scroll gesture is one beat: the video plays
   forward from where it stopped to the end of that beat and parks there, and
   scrolling up rewinds the same beat. The beats are the moves in the footage —
   the machine slides left, a figure walks out and stands, the card is dealt
   over it, then card and figure leave together — measured off the frames of
   THIS cut, not guessed.

   Past the last move the footage has already put the machine at the left edge
   with the right of the plate empty, so the remaining beats spend no video at
   all: they park on that frame and change what is standing in the empty half —
   the grid of everything the claw did not pick, then the contact card.

   v4 runs the 1080p master (HighQuality Video). That cut is the v3 one minus a
   38-frame hold at t≈12.0s, so every mark after that point is 1.583s earlier
   than it was in v3, and the take carries ~2.7s of extra tail. */

// ---- the four the claw picks out --------------------------------------------

const PROJECTS = [
  {
    tag: 'AI product', title: 'Sidekick',
    sub: 'Co-founder & Head of Product · 2020—now',
    body: ['A master teacher in every tutoring session',
           'Every recording becomes a one-minute briefing'],
    hi: 'Gates Foundation + CZI funded.', hiColor: '#f2d64f',
    go: 'Sidekick homepage ↗', href: 'https://sidekick.stepuptutoring.org',
  },
  {
    tag: 'Ops system', title: 'The Efficiency Engine',
    sub: 'Co-founder & Head of Product · 2020—now',
    body: ['Six years automating a 20-person org',
           'Decided what to automate, and what to leave to people'],
    hi: '200,000+ automations every month', hiColor: '#f2d64f',
    go: 'Full case study ↗', href: 'https://dhalps.com/',
  },
  {
    tag: 'Solo build', title: 'Jimmy AI',
    sub: 'Designed and built alone · 2026',
    body: ['Finds local businesses with bad websites, rebuilds them',
           'Nobody asked — it goes looking'],
    hi: '250+ generated · 2 live', hiColor: '#f2d64f',
    go: 'See a live one ↗', href: 'https://www.quickresponse-plumbing.com/',
  },
  {
    tag: 'Solo build', title: 'Neat Freak',
    sub: 'Designed and built alone · 2026',
    body: ['Tidies your tabs into workstream folders',
           'Find any tab in plain English'],
    hi: 'Live on the Chrome Web Store', hiColor: '#a8e04a',
    go: 'Install it ↗',
    href: 'https://chromewebstore.google.com/detail/neat-freak/gmojchpnnkacfighmaoiofkddbaohpan',
  },
];

/* ---- and everything still in the cabinet ------------------------------------
   Two pages of six. The last three are the picked ones again, so the set reads
   as the whole body of work rather than "the rest". `av` is the toy's own head,
   cut from the 4K master.

   No numbers on the cards: the order here is a reading order, not a ranking,
   and a number on the face invites people to read it as one. The ticks under
   the take still count scrolls — that is a position, not a project. */

const MORE = [
  [
    { av: 'p05', tag: 'AI product',  title: 'Kyron Learning', sub: 'Founding UX Engineer · 2022—24',
      body: ['AI video lessons you talk back to', 'Recruited off the back of his Step Up work'],
      hi: '$14.6M Series A', go: 'See the platform ↗', href: 'https://app.kyronlearning.com' },
    { av: 'p06', tag: 'Consumer',    title: 'Hero Chat', sub: 'Designed and built alone · 2023',
      body: ['AI conversations, made browsable', 'Chats stop vanishing into private windows'],
      hi: 'App Store · 500+ reviews' },
    { av: 'p07', tag: 'Ops system',  title: 'MatchMate', sub: 'Co-founder & Head of Product · 2025',
      body: ['Pairs students with the right tutors', 'Speed vs fit, decided — humans can override'],
      hi: '1,000s of matches automated' },
    { av: 'p08', tag: 'Consumer',    title: 'Swayzee', sub: 'Designing and building alone · 2025—now',
      body: ['A game you win by persuading AI', 'Pitch and negotiate with AI personas'],
      hi: 'Currently building' },
    { av: 'p09', tag: 'Ops system',  title: 'Step Up Portals', sub: 'Co-founder & Head of Product · 2021—now',
      body: ['Application to background check to first match', 'Auto-translated messaging between tutors and parents'],
      hi: '~600 applicants / week' },
    { av: 'p10', tag: 'Early work',  title: 'Troops', sub: 'Co-founder · 2017',
      body: ['Campus delivery, by students for students', 'Two-sided marketplace, one campus'],
      hi: 'YC interview' },
  ],
  [
    { av: 'p11', tag: 'Early work',  title: 'That Feeling When', sub: 'Designed and built alone · 2020',
      body: ['A party card game about relatable moments', 'Playtest to manufacture to multiplayer'],
      hi: 'Shipped, physical and digital', go: 'Full case study ↗', href: 'https://dhalps.com/' },
    { av: 'p12', tag: 'Early work',  title: 'Quikstik', sub: 'Product design · 2019',
      body: ['Home workout gear with sensor handles', 'Hardware plus companion app'],
      hi: 'Presented to IKEA', go: 'Full case study ↗', href: 'https://dhalps.com/' },
    { av: 'p13', tag: 'Early work',  title: 'Essential Bills', sub: 'Client work, venture studio · 2019',
      body: ["Donors pay strangers' overdue bills", 'Trust model for anonymous giving'],
      hi: 'Designed the whole product', go: 'Full case study ↗', href: 'https://dhalps.com/' },
    { av: 'p03', tag: 'Solo build',  title: 'Jimmy AI', sub: 'Designed and built alone · 2026',
      body: ['Finds bad business websites, rebuilds them', 'Nobody asked — it goes looking'],
      hi: '250+ generated · 2 live', go: 'See a live one ↗', href: 'https://www.quickresponse-plumbing.com/' },
    { av: 'p02', tag: 'Ops system',  title: 'The Efficiency Engine', sub: 'Co-founder & Head of Product · 2020—now',
      body: ['Six years automating a 20-person org', 'Decided what to automate, and what to leave to people'],
      hi: '200,000+ automations / month', go: 'Full case study ↗', href: 'https://dhalps.com/' },
    { av: 'p01', tag: 'AI product',  title: 'Sidekick', sub: 'Co-founder & Head of Product · 2020—now',
      body: ['A master teacher in every tutoring session', 'Every recording becomes a one-minute briefing'],
      hi: 'Gates Foundation + CZI funded.', go: 'Sidekick homepage ↗', href: 'https://sidekick.stepuptutoring.org' },
  ],
];

const STACK = ['Typescript', 'Python', 'Claude agents', 'LLM pipelines', 'Express', 'PostgreSQL',
               'Firebase', 'Figma', 'Prompt engineering', 'Knowledge graphs', 'React', 'Node',
               'Zapier', 'Airtable', 'Gemini', 'Cloud Run'];

/* ---- the beat list ----------------------------------------------------------
   `t` is where the video parks, `card` the project whose popup is up while it is
   parked there (-1 = none), `stage` what is standing in the empty half of the
   plate (0 none, 1–2 the grid pages, 3 the contact card), `cue` the line under
   the ticks. The popup costs no scroll of its own: the beat that walks a figure
   out parks on the landing, and the popup is dealt there by itself. */
const BEATS = [
  { t: 0.00,  card: -1, stage: 0, cue: 'Scroll ^   I design and build AI products, end to end' },
  { t: 3.98,  card: -1, stage: 0, cue: 'Keep scrolling ^   the machine is loaded' },
  { t: 7.70,  card: 0,  stage: 0, cue: 'Scroll ^   300,000 hours of tutoring' },
  { t: 11.83, card: -1, stage: 0, cue: 'Next ^   six years of systems work' },
  { t: 13.42, card: 1,  stage: 0, cue: 'Scroll ^   200,000 automations every month' },
  { t: 15.32, card: -1, stage: 0, cue: 'Next ^   one built alone, in 2026' },
  { t: 17.82, card: 2,  stage: 0, cue: 'Scroll ^   250 sites generated, 2 live' },
  { t: 19.52, card: -1, stage: 0, cue: 'Next ^   one more out of the machine' },
  { t: 22.57, card: 3,  stage: 0, cue: 'Scroll ^   live on the Chrome Web Store' },
  
  
  
  { t: 38.34, card: -1, stage: 0, cue: 'One more scroll ^   the ones still in the cabinet' },
  { t: 40.70, card: -1, stage: 1, cue: 'Scroll ^   nine more, and the early ones' },
  { t: 40.70, card: -1, stage: 2, cue: 'Scroll ^   where it started, and what it became' },
  { t: 40.70, card: -1, stage: 3, cue: 'Email is fastest ^   danihalp@me.com' },
];

/* The second the figure turns and walks out of frame, per project. The popup is
   held until then and leaves on the same beat, travelling the same way, so the
   two read as one thing going rather than two separate exits. */
const EXITS = [9.89, 14.30, 18.55, 24.09];

/* The tick that lights per beat: 01–04 are the four picked figures, 05 is the
   run inside the cabinet. Past the take the ticks give way to the page dots. */
const TICK_OF_BEAT = i =>
  BEATS[i].card !== -1 ? BEATS[i].card : (i >= 10 && BEATS[i].stage === 0 ? 4 : -1);

const ASPECT  = 16 / 9;
const TOY     = { fx: 0.745, fy: 0.815, head: 0.61 };  // where a figure stands, in frame units
const EPS     = 0.03;                                  // seconds; closer than this counts as parked
/* 2.5, not 2, and the reason is the display: the take is 24fps, so at 2x the
   browser has to present 48 frames a second onto a 60Hz screen — 48 does not
   divide into 60, so frames get held for two refreshes and then one, which is
   exactly the stutter that reads as "laggy". At 2.5x it presents 60fps: one new
   frame per refresh on a 60Hz panel, two on a 120Hz one. Same footage, same
   marks, even cadence. */
const RATE    = 2.5;
const REWIND  = 1.6 * RATE;                            // …and keep the rewind a shade faster than the playback
const NUDGE   = 26;                                    // wheel delta that counts as one gesture
const SETTLE  = 120;                                   // ms of quiet before the next gesture is taken

const plate   = document.getElementById('plate');
const card    = document.getElementById('card');
const hud     = document.getElementById('hud');
const ticks   = document.getElementById('ticks');
const dots    = document.getElementById('dots');
const label   = document.getElementById('cue-label');
const grid    = document.getElementById('grid');
const gtrack  = document.getElementById('gtrack');
const contact = document.getElementById('contact');
const marquee = document.getElementById('marquee');

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

// ---- the popup, parked over the figure ---------------------------------------

const tagEl   = document.getElementById('c-tag');
const titleEl = document.getElementById('c-title');
const subEl   = document.getElementById('c-sub');
const bodyEl  = document.getElementById('c-body');
const hiEl    = document.getElementById('c-hi');
const goEl    = document.getElementById('c-go');

// object-fit: cover — work out where the frame really sits, so the card is
// pinned to the figure rather than to a guessed screen position, and so the
// scale-up starts from the figure's own feet.
function place() {
  if (innerWidth <= 820) {           // narrow: the card is centred under the toy
    card.style.left = card.style.top = '';
    return;
  }
  const vw = innerWidth, vh = innerHeight;
  const w = Math.max(vw, vh * ASPECT), h = Math.max(vw / ASPECT, vh);
  const fx = (vw - w) / 2, fy = (vh - h) / 2;

  const toyX    = fx + TOY.fx * w;
  const toyHead = fy + TOY.head * h;

  const cw = card.offsetWidth, ch = card.offsetHeight;
  const left = clamp(toyX - cw / 2, 20, vw - cw - 20);
  const top  = Math.max(toyHead - ch - 34, 86);

  card.style.left = `${left.toFixed(0)}px`;
  card.style.top  = `${top.toFixed(0)}px`;
}

let lit = -1;
// `fly`: the figure is walking off and the popup goes with it. Without it the
// popup is simply taken down (rewinding, or a jump), which must not look like
// the same move.
function light(i, fly) {
  if (i === lit) return;
  lit = i;
  if (i === -1) {
    card.classList.remove('on');
    card.classList.toggle('gone', !!fly);
  } else {
    card.classList.remove('gone');
    const p = PROJECTS[i];
    tagEl.textContent   = p.tag;
    titleEl.textContent = p.title;
    subEl.textContent   = p.sub;
    bodyEl.innerHTML    = p.body.map(esc).join('<br>');
    hiEl.textContent    = p.hi;
    goEl.textContent    = p.go;
    card.style.setProperty('--hi', p.hiColor);
    card.href = p.href;
    place();                       // measure at the real height, then grow
    void card.offsetWidth;
    card.classList.add('on');
  }
  hud.style.opacity = i === -1 ? '1' : '.55';
}

// ---- the grid, the contact card and the stack --------------------------------

const pageEls = MORE.map(page => {
  const el = document.createElement('div');
  el.className = 'gpage';
  page.forEach(p => {
    const a = document.createElement(p.href ? 'a' : 'div');
    a.className = 'gcard';
    if (p.href) { a.href = p.href; a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML =
      `<img class="av" src="avatars/${p.av}.png" alt="" loading="lazy">` +
      `<span class="tag">${esc(p.tag)}</span>` +
      `<h3>${esc(p.title)}</h3>` +
      `<p class="sub">${esc(p.sub)}</p>` +
      `<p class="body">${p.body.map(esc).join('<br>')}</p>` +
      `<p class="hi">${esc(p.hi)}</p>` +
      (p.go ? `<p class="go"><span>${esc(p.go)}</span></p>` : '');
    el.append(a);
  });
  gtrack.append(el);
  return el;
});

marquee.querySelectorAll('.run span').forEach(s => {
  s.textContent = STACK.join(' · ') + ' · ';
});

/* Each page deals its cards one after another, the way the claw dealt the four:
   every card grows out of the toy head in its own corner (the origin is set in
   CSS), so the page fills the way the machine filled the plate. Reading order —
   top row left to right, then the bottom row. */
function dealPage(n) {
  pageEls.forEach((el, i) => {
    el.querySelectorAll('.gcard').forEach((c, j) => {
      c.style.transitionDelay = i === n ? `${70 + j * 85}ms` : '0ms';
      c.classList.toggle('in', i === n);
    });
  });
}

let stagedAt = -1;
function applyStage(s) {
  if (s === stagedAt) return;
  stagedAt = s;
  const onGrid = s === 1 || s === 2;
  grid.classList.toggle('show', onGrid);
  contact.classList.toggle('show', s === 3);
  marquee.classList.toggle('show', s > 0);
  ticks.style.display = s > 0 ? 'none' : '';
  dots.classList.toggle('show', s > 0);
  gtrack.style.transform = `translateX(${s === 2 ? -50 : 0}%)`;
  dealPage(onGrid ? s - 1 : -1);
  dotEls.forEach((el, i) => el.classList.toggle('on', i === s - 1));
}

const dotEls = [...dots.children];

const tickEls = [0, 1, 2, 3, 4].map(i => {
  const li = document.createElement('li');
  li.textContent = String(i + 1).padStart(2, '0');
  ticks.append(li);
  return li;
});

function cue(text) {
  if (label.textContent === text) return;
  label.classList.add('swap');
  setTimeout(() => { label.textContent = text; label.classList.remove('swap'); }, 160);
}

// ---- the transport: one beat per gesture ------------------------------------

let beat = 0;      // the beat the footage is parked on (or heading for)
let busy = false;  // …and whether it is still on its way there
let raf = 0;
let seekBack = null;   // the pending rewind step, so park() can call it off
let seekWait = 0;

function stop() {
  cancelAnimationFrame(raf);
  clearTimeout(seekWait);
  if (seekBack) { plate.removeEventListener('seeked', seekBack); seekBack = null; }
}

function go(dir) {
  const n = clamp(beat + dir, 0, BEATS.length - 1);
  if (n === beat) return;
  beat = n;
  drive();
}

function drive() {
  stop();
  const target = BEATS[beat].t;
  const gap = target - plate.currentTime;

  if (Math.abs(gap) <= EPS) { park(); return; }

  busy = true;

  if (gap > 0) {
    // the popup stays put until its figure actually starts walking off
    const leaveAt = lit >= 0 ? EXITS[lit] : -1;
    plate.playbackRate = RATE;      // some browsers reset the rate on a source change
    plate.play().catch(() => {});   // forward is real playback, so it never judders
    const fwd = () => {
      if (leaveAt >= 0 && plate.currentTime >= leaveAt) light(-1, true);
      if (plate.currentTime >= target - EPS) return park();
      raf = requestAnimationFrame(fwd);
    };
    raf = requestAnimationFrame(fwd);
  } else {
    /* Rewinding: the popup leaves the way it arrived — the class comes off and
       the same transition runs backwards, so scrolling up is the arrival in
       reverse rather than a fade. */
    light(-1);
    /* …and whatever was standing in the empty half goes at the same moment, so
       a rewind reads as the arrival run backwards rather than a pop at the end */
    applyStage(BEATS[beat].stage);
    plate.pause();

    /* Backwards is not playback, it is a run of seeks, and that is where the
       old judder came from: a rAF loop asked for a new position every 16ms
       while the decoder was still working on the last one, so the requests
       piled up and the picture lurched. Ask for the next position only once the
       previous one has actually been presented — the rewind then runs at
       whatever rate the decoder can hold, which is smooth by construction. */
    let last = performance.now();
    const back = () => {
      clearTimeout(seekWait);
      const now = performance.now();
      const step = Math.min((now - last) / 1000, 1 / 20) * REWIND;  // a stall must not become a jump
      last = now;
      const t = plate.currentTime - step;
      if (t <= target + EPS) return park();
      seekBack = back;
      plate.addEventListener('seeked', back, { once: true });
      // a seek that never reports back must not strand the rewind
      clearTimeout(seekWait);
      seekWait = setTimeout(() => { if (seekBack === back) back(); }, 400);
      plate.currentTime = t;
    };
    back();
  }
}

function park() {
  stop();
  plate.pause();
  // only snap if we are actually off; forward playback lands within a frame of
  // the mark and seeking back to it would show as a stutter
  if (Math.abs(plate.currentTime - BEATS[beat].t) > EPS) plate.currentTime = BEATS[beat].t;
  busy = false;
  light(BEATS[beat].card);
  applyStage(BEATS[beat].stage);
  cue(BEATS[beat].cue);

  const on = TICK_OF_BEAT(beat);
  tickEls.forEach((el, j) => {
    el.classList.toggle('on', j === on);
    el.classList.toggle('done', j !== on && BEATS[beat].t > TICK_END[j]);
  });
}

// the beat after a tick's own beat is where that tick is finished with
const TICK_END = [0, 1, 2, 3, 4].map(j => {
  const i = BEATS.findIndex((_, k) => TICK_OF_BEAT(k) === j);
  return i === -1 ? Infinity : (BEATS[i + 1] ? BEATS[i + 1].t : BEATS[i].t);
});

// ---- gestures ---------------------------------------------------------------

let acc = 0, quiet = 0;

function intent(d) {
  if (busy || !revealed) return;
  go(d);
}

addEventListener('wheel', e => {
  e.preventDefault();
  if (busy) { acc = 0; return; }
  clearTimeout(quiet);
  quiet = setTimeout(() => { acc = 0; }, SETTLE);   // leftover momentum is not a new gesture
  acc += e.deltaY;
  if (Math.abs(acc) >= NUDGE) { const d = Math.sign(acc); acc = 0; intent(d); }
}, { passive: false });

addEventListener('keydown', e => {
  const d = { ArrowDown: 1, PageDown: 1, ' ': 1, ArrowUp: -1, PageUp: -1 }[e.key];
  if (d === undefined) return;
  if (e.target.closest('a')) return;      // let a card's link take Enter/Space
  e.preventDefault();
  intent(d);
});

let touchY = null;
addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
addEventListener('touchmove', e => {
  if (touchY === null) return;
  const dy = touchY - e.touches[0].clientY;
  if (Math.abs(dy) > 40) { touchY = null; intent(Math.sign(dy)); }
}, { passive: true });
addEventListener('touchend', () => { touchY = null; });

addEventListener('resize', place, { passive: true });

// ---- loader -----------------------------------------------------------------
/* The whole file is downloaded before the page is shown, and then handed to the
   <video> as a blob. That is the difference between "mostly buffered" and
   "here": a plain src leaves the browser free to fetch in dribs, and every beat
   that runs into a gap stalls mid-move. Once it is a blob there is no network
   left in the loop — playback and the rewind seeks are all out of memory. */

const SRC = 'video.mp4';

const loader = document.getElementById('loader');
const pct = document.getElementById('pct');
const mb  = document.getElementById('mb');
let revealed = false;

// one number drives the cable, the claw's travel and the bar
function progress(p) {
  loader.style.setProperty('--p', p.toFixed(3));
  pct.textContent = `${Math.round(p * 100)}%`;
}

function reveal() {
  if (revealed) return;
  revealed = true;
  progress(1);
  park();                              // the first beat is set behind the loader

  /* the machine finishes the job before it hands over: the prongs close, the
     rig lifts, and only then does the page come up */
  loader.classList.add('grab');
  setTimeout(() => loader.classList.add('lift'), 260);
  setTimeout(() => {
    loader.classList.add('gone');
    document.documentElement.classList.remove('loading');
  }, 620);
  setTimeout(() => loader.remove(), 1300);
}

// hold until the video element has the first frame of the blob decoded, so the
// page never appears on an empty <video>
function handOver(url) {
  plate.addEventListener('loadeddata', reveal, { once: true });
  plate.addEventListener('error', reveal, { once: true });
  plate.src = url;
  plate.load();
}

async function download() {
  const res = await fetch(SRC);
  if (!res.ok) throw new Error(res.status);

  const total = Number(res.headers.get('content-length')) || 0;
  const chunks = [];
  let got = 0;

  const reader = res.body.getReader();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    got += value.length;
    if (total) {
      progress(clamp(got / total, 0, 1));
      mb.textContent = `· ${(got / 1048576).toFixed(1)} / ${(total / 1048576).toFixed(1)} MB`;
    }
  }
  handOver(URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' })));
}

// no streams, no fetch, or the file simply is not there: fall back to letting
// the element load it the ordinary way rather than hanging on a blank page
download().catch(() => handOver(SRC));

// ---- self-check: #selftest ---------------------------------------------------
if (location.hash === '#selftest') {
  const fails = [];
  BEATS.forEach((b, i) => {
    // the take only runs forward; a beat that spends no video must change stage
    if (i && b.t < BEATS[i - 1].t) fails.push(`beat ${i} runs the take backwards`);
    if (i && b.t === BEATS[i - 1].t && b.stage === BEATS[i - 1].stage)
      fails.push(`beat ${i} costs a scroll and changes nothing`);
    if (b.card !== -1 && !PROJECTS[b.card]) fails.push(`beat ${i} points at no project`);
    if (!b.cue) fails.push(`beat ${i} has no cue line`);
  });
  PROJECTS.forEach((_, i) => {
    if (BEATS.filter(b => b.card === i).length !== 1) fails.push(`project ${i} is not dealt exactly once`);
    // the popup's exit has to fall inside the beat it leaves on, or it would go
    // either before the scroll or after the footage has already parked
    const j = BEATS.findIndex(b => b.card === i);
    if (!(EXITS[i] > BEATS[j].t && EXITS[i] < BEATS[j + 1].t)) fails.push(`exit ${i} falls outside its beat`);
  });
  [1, 2, 3].forEach(s => {
    if (!BEATS.some(b => b.stage === s)) fails.push(`stage ${s} is never reached`);
  });
  if (MORE.length !== 2 || MORE.some(p => p.length !== 6)) fails.push('the grid is not two pages of six');
  if (BEATS[0].t !== 0) fails.push('the take does not start at 0');
  plate.addEventListener('loadedmetadata', () => {
    const end = Math.max(...BEATS.map(b => b.t));
    if (end > plate.duration) fails.push(`last beat ${end}s is past the ${plate.duration.toFixed(2)}s take`);
    Promise.all([...document.querySelectorAll('.gcard .av')].map(img => img.decode().catch(
      () => fails.push(`avatar missing: ${img.getAttribute('src')}`)))).then(() => {
      console.log(fails.length ? `selftest FAILED\n - ${fails.join('\n - ')}`
                               : `selftest ok — ${BEATS.length - 1} scrolls, take ${plate.duration.toFixed(2)}s`);
    });
  }, { once: true });
}
