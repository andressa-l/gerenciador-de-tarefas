document.addEventListener("DOMContentLoaded", (event) => {
  var dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.1";

    this.style.border = "3px dashed #c4cad3";

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";

    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("task-hover");
  }

  function handleDragLeave(e) {
    this.classList.remove("task-hover");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (dragSrcEl != this) {
      // Obtenha o contêiner pai do elemento arrastado
      const dragSrcParent = dragSrcEl.parentNode;
      // Obtenha o contêiner pai do elemento de destino para soltar
      const dropTargetParent = this.parentNode;

      // Trocar as posições do elemento arrastado e do elemento de destino para soltar
      // dragSrcParent.insertBefore(this, dragSrcEl);

      dropTargetParent.insertBefore(dragSrcEl, this);
    }

    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    this.style.border = 0;

    items.forEach(function (item) {
      item.classList.remove("task-hover");
    });
  }

  let items = document.querySelectorAll(".task");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });
});



var botao = document.querySelector(".todo-list-add-btn");

var elemento = `
<div class="card-body">
          <div class="task" draggable="true">
            <div class="task__tags">
      
              <select id="dropdown" name="role" class="form-button task__tag task__tag--copyright" style="border: none; background-color: rgb(152, 175, 204);" required="">
                <option disabled="" selected="" value="">Selecione</option>
                <option value="student">DevOps</option>
                <option value="job">Front-end</option>
                <option value="learner">Back-end</option>
              </select>
              <button class="task__options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <!-- <p>Konsep hero title yang menarik</p> -->
            <div class="add-items d-flex">
              <input
                type="text"
                placeholder="Digite sua tarefa..."
                class="form-control todo-list-input"
                id="todo-list-input"
                style="border: none; outline: none"
              />
            </div>
            <div class="task__stats">
              <span
                ><time datetime="2024-11-24T20:00:00"
                  ><i class="fas fa-flag"></i>Hoje</time
                ></span
              >
              <span><i class="fas fa-comment"></i>3</span>
              <span><i class="fas fa-paperclip"></i>7</span>
              <span class="task__owner"></span>
            </div>
          </div>
          <div class="list-wrapper">
            <ul
              class="d-flex flex-column-reverse todo-list"
              id="todo-list"
            ></ul>
          </div>
        </div>

`;

botao.addEventListener("click", function() {
  
  botao.insertAdjacentHTML("beforebegin", elemento);
});
