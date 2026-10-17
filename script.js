const categories = ["All", ...new Set(questions.map(q => q.category))];
let pool = [], index = 0, score = 0, answered = false;

const $ = id => document.getElementById(id);
const filtersEl = $("filters"), questionEl = $("question"), optionsEl = $("options"),
      explanationEl = $("explanation"), nextBtn = $("next"), progressEl = $("progress");

categories.forEach(cat => {
  const b = document.createElement("button");
  b.textContent = cat;
  b.onclick = () => start(cat);
  filtersEl.appendChild(b);
});

function start(cat) {
  [...filtersEl.children].forEach(b => b.classList.toggle("active", b.textContent === cat));
  pool = questions.filter(q => cat === "All" || q.category === cat);
  index = 0; score = 0;
  show();
}

function show() {
  answered = false;
  explanationEl.hidden = true; nextBtn.hidden = true;
  if (index >= pool.length) return finish();
  const q = pool[index];
  progressEl.textContent = `Question ${index + 1} of ${pool.length}`;
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.className = "option"; b.textContent = text;
    b.onclick = () => choose(i, b);
    optionsEl.appendChild(b);
  });
}

function choose(i, btn) {
  if (answered) return;
  answered = true;
  const q = pool[index];
  [...optionsEl.children].forEach((b, n) => {
    b.disabled = true;
    if (n === q.answer) b.classList.add("correct");
  });
  if (i === q.answer) score++; else btn.classList.add("wrong");
  explanationEl.textContent = q.explanation || "";
  explanationEl.hidden = !q.explanation;
  nextBtn.textContent = index === pool.length - 1 ? "See result" : "Next question";
  nextBtn.hidden = false;
}

nextBtn.onclick = () => { index++; show(); };

function finish() {
  progressEl.textContent = "";
  questionEl.textContent = "";
  optionsEl.innerHTML = `<div class="result"><p>Your score</p><p class="score">${score} / ${pool.length}</p></div>`;
  nextBtn.textContent = "Try again"; nextBtn.hidden = false;
  nextBtn.onclick = () => { nextBtn.onclick = () => { index++; show(); }; start(document.querySelector(".filters .active").textContent); };
}

start("All");
