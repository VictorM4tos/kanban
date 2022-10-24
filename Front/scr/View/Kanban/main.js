const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

// mudar cor ao arrastar
function dragstart() {
  columns.forEach((kanban__dropzone) =>
    kanban__dropzone.classList.add("highlight")
  );
  this.classList.add("is-dragging");
}

function drag() {
  // log('CARD: Is dragging ')
}

function dragend() {
  columns.forEach((kanban__dropzone) =>
    kanban__dropzone.classList.remove("highlight")
  );
  this.classList.remove("is-dragging");
}

const columns = document.querySelectorAll(".kanban__dropzone");

columns.forEach((kanban__dropzone) => {
  kanban__dropzone.addEventListener("dragenter", dragenter);
  kanban__dropzone.addEventListener("dragover", dragover);
  kanban__dropzone.addEventListener("dragleave", dragleave);
  kanban__dropzone.addEventListener("drop", drop);
});
function dragenter() {
  // log('DROPZONE: Enter in zone ')
}

function dragover() {
  this.classList.add("over");

  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove("over");
}

function drop() {
  this.classList.remove("over");
}

// atribui uma classificação "dragging" para itens classificados no html como draggable quando iniciar
document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

// remove a classificação "dragging" para itens classificados no html como draggable quando solto da dropzone
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

// organizar a sequência dos cards
columns.forEach((card) => {
  card.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(card, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      card.prepend(dragging);
    }
  });
});

function getNewPosition(kanban__dropzone, posY) {
  const cards = kanban__dropzone.querySelectorAll(".item:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}
// fim da organização da sequência
