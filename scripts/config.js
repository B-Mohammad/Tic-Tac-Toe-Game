function openPlayerConfig(event) {
  backdropElement.style.display = "block";
  configOverlayElement.style.display = "block";
  editedPlayer = +event.target.dataset.playerid;
}

function closePlayerConfig() {
  backdropElement.style.display = "none";
  configOverlayElement.style.display = "none";
  configFormElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  configFormElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    errorOutputElement.textContent = "Please enter a valid name!";
    event.target.firstElementChild.classList.add("error");
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;
  closePlayerConfig();
}
