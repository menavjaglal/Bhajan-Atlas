const bhajans = [
  {
    id: 1,
    title: "Om Sri Sai Ram",
    raag: "Yaman",
    scale: "C Major",
    difficulty: "Easy",
    lyrics: "Om Sri Sai Ram\nOm Sri Sai Ram\nOm Sri Sai Ram",
    meaning: "Chanting Sai's name brings peace and purity."
  },
  {
    id: 2,
    title: "Sai Ram Sai Shyam",
    raag: "Bhairavi",
    scale: "D Major",
    difficulty: "Medium",
    lyrics: "Sai Ram Sai Shyam\nSai Ram Sai Shyam",
    meaning: "A devotional chant expressing unity of form and formless."
  },
  {
    id: 3,
    title: "Love All Serve All",
    raag: "Desh",
    scale: "G Major",
    difficulty: "Easy",
    lyrics: "Love All Serve All\nHelp Ever Hurt Never",
    meaning: "Core teaching of Bhagawan Sri Sathya Sai Baba."
  }
];

const listEl = document.getElementById("bhajanList");
const detailEl = document.getElementById("bhajanDetail");
const searchEl = document.getElementById("search");

function renderList(data) {
  listEl.innerHTML = "";

  data.forEach(b => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${b.title}</h3>
      <div class="tag">${b.raag}</div>
      <div class="tag">${b.scale}</div>
      <div class="tag">${b.difficulty}</div>
    `;

    div.onclick = () => showBhajan(b);

    listEl.appendChild(div);
  });
}

function showBhajan(b) {
  detailEl.innerHTML = `
    <h2>${b.title}</h2>

    <div>
      <span class="tag">Raag: ${b.raag}</span>
      <span class="tag">Scale: ${b.scale}</span>
      <span class="tag">Difficulty: ${b.difficulty}</span>
    </div>

    <div class="lyrics">${b.lyrics}</div>

    <h3 style="margin-top:20px;">Meaning</h3>
    <p>${b.meaning}</p>
  `;
}

searchEl.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  const filtered = bhajans.filter(b =>
    b.title.toLowerCase().includes(q)
  );
  renderList(filtered);
});

renderList(bhajans);
