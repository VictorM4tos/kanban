export default class KankanAPI {
  static getItems(colummId) {
    const columm = read().find(columm.id) == colummId;
  }
}

function read() {
  const json = localStorage.getItem("kanban-data");
  if (!json) {
    // cria uma tabela para usuário novo
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
      {
        id: 4,
        items: [],
      },
    ];
  }
  //   carrega Kanban do usuário
  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(DATA));
}
