const bhajans = [
  {
    title: "Om Sai Ram",
    lyrics: "Om Sai Ram Om Sai Ram...",
    meaning: "A mantra invoking Sai Baba for peace and protection."
  },
  {
    title: "Sai Namavali",
    lyrics: "Sai Ram Sai Shyam...",
    meaning: "Devotional chant praising Sai Baba’s divine presence."
  },
  {
    title: "Rama Bhajan",
    lyrics: "Raghupati Raghava Raja Ram...",
    meaning: "A prayer praising Lord Rama for righteousness."
  }
];

// Attach event AFTER page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBtn").addEventListener("click", searchBhajans);
});

function searchBhajans() {
  const query = document.getElementById("searchBox").value.toLowerCase();

  document.getElementById("homeView").classList.add("hidden");
  const results = document.getElementById("resultsView");
  results.classList.remove("hidden");

  results.innerHTML = "";

  const filtered = bhajans.filter(b =>
    b.title.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>No bhajans found</p>";
    return;
  }

  filtered.forEach(b => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerText = b.title;

    div.onclick = () => showDetail(b);

    results.appendChild(div);
  });
}

function showDetail(bhajan) {
  document.getElementById("resultsView").classList.add("hidden");

  const detail = document.getElementById("detailView");
  detail.classList.remove("hidden");

  detail.innerHTML = `
    <h2>${bhajan.title}</h2>
    <h3>Lyrics</h3>
    <p>${bhajan.lyrics}</p>
    <h3>Meaning</h3>
    <p>${bhajan.meaning}</p>
    <button onclick="location.reload()">Back</button>
  `;
}
