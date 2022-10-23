// help
function log(message) {
  console.log(">" + message);
}

const cards = document.querySelectorAll("card");

cards.forEach((card) => {
  card.addEventListener("dragstar", dragstar);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstar() {
  log("CARD: Start Dragging");
}

function drag() {
  log("CARD: Is Dragging");
}

function dragend() {
  log("CARD: Stop Dragging");
}
