const bhajans = [
  {
    title: "Sathya Sai Padambujam",
    lyrics: "Sathya Sai Padambujam Bhajorey Manasa Nirantharam
Parama Pavitram Pavana Charanam
Kalimala Dahanam Sri Guru Charanam
Bhava Bhaya Nashana Duritha Nivarana
Parthi Pureeshwara Pankaja Charanam
Bhajorey Manasa Nirantharam
Bhajorey Manasa Nirantharam (2)",
    meaning: "Meditate incessantly upon the most holy and auspicious Lotus Feet of Lord Sathya Sai, the Feet of the Divine Preceptor, which will eradicate the sins of this Kali age, the Feet, which will destroy all the fears of this materialistic world and remove the obstacles."
  },
  {
    title: "Mata Mata Sai Mata",
    lyrics: "Mata Mata Sai Mata
      Jagatha Mata Sai Vishwa Mata Mata mata Sai Mata Durga Bhavani Kaali KapaliniShanthi Dayini Sai Mata
",
    meaning: "Devotional chant praising Sai Baba’s divine presence."
  },
  {
    title: "Rama Bhajan",
    lyrics: "Raghupati Raghava Raja Ram...",
    meaning: "A prayer praising Lord Rama for righteousness."
  }
];

function searchBhajans() {
  const query = document.getElementById("searchBox").value.toLowerCase();

  document.getElementById("homeView").classList.add("hidden");
  const results = document.getElementById("resultsView");
  results.classList.remove("hidden");

  results.innerHTML = "";

  const filtered = bhajans.filter(b =>
    b.title.toLowerCase().includes(query)
  );

  filtered.forEach((b, i) => {
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
