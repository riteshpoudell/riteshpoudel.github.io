// Background GIF rotation
const bgGifs = [
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
  "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif"
];

let bgIndex = 0;
const bgDiv = document.getElementById("bg-gif");

function rotateBackground() {
  bgDiv.style.backgroundImage = `url(${bgGifs[bgIndex]})`;
  bgIndex = (bgIndex + 1) % bgGifs.length;
}
setInterval(rotateBackground, 10000);
rotateBackground();


// Your real media
const videos = [
  {
    type: "youtube",
    title: "Yale International Debates",
    id: "JHDwkKI-rVg"
  },
  {
    type: "youtube",
    title: "Kathmandu Public Speaking",
    id: "dbwfElIiVv0"
  },
  {
    type: "instagram",
    title: "Slum Community Project",
    url: "https://www.instagram.com/p/C4V0AvmK-03/"
  },
  {
    type: "instagram",
    title: "SCIF Nepal",
    url: "https://www.instagram.com/p/C2ZA7jys__g/"
  },
  {
    type: "instagram",
    title: "Devghat Community Work",
    url: "https://www.instagram.com/p/C15Q1Wgxwkp/"
  }
];

const grid = document.getElementById("videoGrid");

videos.forEach(v => {
  const card = document.createElement("div");
  card.className = "video-card";

  let embed = "";

  if (v.type === "youtube") {
    embed = `
      <iframe width="100%" height="250"
      src="https://www.youtube.com/embed/${v.id}"
      title="${v.title}"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen></iframe>
    `;
  }

  if (v.type === "instagram") {
    embed = `
      <iframe src="${v.url}embed"
      width="100%" height="250"
      frameborder="0"
      allowtransparency="true"></iframe>
    `;
  }

  card.innerHTML = `
    <h3 style="color:#64ffda;text-align:center;margin-bottom:10px;">${v.title}</h3>
    ${embed}
  `;

  grid.appendChild(card);
});
