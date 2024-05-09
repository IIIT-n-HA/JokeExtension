fetch("https://icanhazdadjoke.com/slack")
  .then((response) => response.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    document.getElementById("j").innerHTML = jokeText;
  });
