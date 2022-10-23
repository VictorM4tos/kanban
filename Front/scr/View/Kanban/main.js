// help
function log(message) {
  console.log(">" + message);
}

// Test Drag and drop
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("dragstar", dragstar);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstar() {
  //   log("CARD: Start Dragging");
}

function drag() {
  //   log("CARD: Is Dragging");
}

function dragend() {
  //   log("CARD: Stop Dragging");
}

// place where we will drop cards

const tarefa = document.querySelectorAll(".kanban__dropzone");

tarefa.forEach((kanban__dropzone) => {
  kanban__dropzone.addEventListener("dragInitt", drageventer);
  kanban__dropzone.addEventListener("dragOver", dragover);
  kanban__dropzone.addEventListener("dragLeave", dragleave);
  kanban__dropzone.addEventListener("drop", drop);
});

function drageventer() {
  log("DROPZONE: Drag Initt");
}

function dragover() {
  log("DROPZONE:Drag Over");
}

function dragleave() {
  log("DROPZONE:Drag Leave");
}
function drop() {
  log("DROPZONE: drop");
}
