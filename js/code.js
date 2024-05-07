const happyGifs = [
  "https://64.media.tumblr.com/4f41d96967694aae9f7585e7efd1e8ca/f40442872ae8b83c-37/s400x600/78b368813035750a0ac48840aec0a9aafbd00581.gifv"
];

const sadGifs = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
  "https://www.bing.com/th/id/OGC.8eafc4b164f04cf4e65090ab6d77085f?pid=1.7&rurl=https%3a%2f%2fmedia2.giphy.com%2fmedia%2fBEob5qwFkSJ7G%2fgiphy.gif&ehk=s9jS7hktqVDR04YaABUmXgn14tXa2Lyv1ae8mTKvjjA%3d",
  "https://www.bing.com/th/id/OGC.77248e5d7115492118f18d13e72ce77c?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fP9k4-UJF2fMAAAAC%2fcute-sad.gif&ehk=5dfMb72zVG%2fkIDf7LnZ%2bhfIjrS5gXxiedvKAeQCC8Qo%3d",
  "https://th.bing.com/th/id/R.07dfa8993c36a64cbbeddc7f9a6ac1d6?rik=AstvtkSy5updAA&pid=ImgRaw&r=0",
  "https://www.bing.com/th/id/OGC.bbf86bd36bf04306e9517c161fb70add?pid=1.7&rurl=http%3a%2f%2fmedia.tumblr.com%2ftumblr_lqqxa5sQ1G1qif47l.gif&ehk=2C6b5ZWohj3%2fk8c4wZD8YnD%2bt5TUrY3YPAMd9QB68uo%3d",
  "https://www.bing.com/th/id/OGC.3e061c6f76299c674741607827a3874f?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2fSjD5d9_S6SgAAAAC%2fsad-the-office.gif&ehk=oU83PrSnda9NuyrUMC%2bNE%2ft4Rq6aApqV9FUI0qYzYag%3d",
  "https://www.bing.com/th/id/OGC.15f9634880ff6b3e8fad6c0a8f7514ce?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fJER2en0ZRiGUE%2fgiphy.gif&ehk=svsFQRahAE1%2fTZVNdWjuzhJ1hny3jQwrfp6qDz5aKm8%3d",
  "https://www.bing.com/th/id/OGC.efa5b99a6a69233b64115580ebbf58a0?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2fLSxqvScJ4J8AAAAM%2fsad.gif&ehk=rn7X31sX3D0tdSVZeeloXmSfrd9%2fd5PcGGbefybA7Dc%3d"
];

function onYes() {
  const image = document.getElementById("image");
  
  const happyGif = happyGifs[randomInt(happyGifs.length - 1)];
  
  document.getElementById("yesDivision").removeChild(
    document.getElementById("yes")
  );
  document.getElementById("noDivision").removeChild(
    document.getElementById("no")
  );
  
  image.innerHTML = "<img src=" + happyGif + " alt=\"Happy gif :)\">"
  document.getElementById("message").innerHTML = "Widzimy się o 16:45 obok Madonny 🥹"
}

function onNo() {
  const no = document.getElementById("no");
  
  const newX = randomInt(512);
  const newY = randomInt(256);
  
  no.style.position = "absolute";
  
  move(no, "left", newX).play();
  move(no, "top", newY).play();
  
  const sadGif = sadGifs[randomInt(sadGifs.length - 1)];
  
  image.innerHTML = "<img src=" + sadGif + " alt=\"Sad gif...\">"
}

function randomInt(maximum) {
  return Math.floor(Math.random() * (maximum + 1));
}

function move(element, property, pixels) {
  return anime({
    targets: element,
    [property]: pixels + "px",
    easing: "easeOutCirc"
  });
}