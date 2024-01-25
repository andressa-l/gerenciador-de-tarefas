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

  // const todoListItem = $('#todo-list'); // A lista de tarefas
  // const todoListInput = $('#todo-list-input'); // O campo de texto para digitar o item
  // const todoListAddBtn = $('.todo-list-add-btn'); // O botão para adicionar o item

  // // Adiciona um evento de clique no botão de adicionar
  // todoListAddBtn.on('click', function (event) {
  //   // Previne o comportamento padrão do botão, que é enviar o formulário
  //   event.preventDefault();

  //   // Pega o valor do campo de texto e remove os espaços extras
  //   const item = todoListInput.val().trim();

  //   // Verifica se o item não está vazio
  //   if (item) {
  //     // Cria um elemento HTML para o item da lista, usando template literals
  //     const listItemHtml = `
  //           <div class="task" draggable="true">
  //             <div class="task__tags">
  //               <span class="task__tag task__tag--copyright">selecione</span
  //               ><button class="task__options">
  //                 <i class="fas fa-ellipsis-h"></i>
  //               </button>
  //             </div>
  //             <p class="text-new">${item}</p>
  //             <div class="task__stats">
  //               <span
  //                 ><time datetime="2024-11-24T20:00:00"
  //                   ><i class="fas fa-flag"></i>Nov 24</time
  //                 ></span
  //               >
  //               <span><i class="fas fa-comment"></i>3</span>
  //               <span><i class="fas fa-paperclip"></i>7</span>
  //               <span class="task__owner"></span>
  //             </div>
  //           </div>
  //         `;

  //     // Adiciona o elemento HTML ao final da lista de tarefas
  //     todoListItem.append(listItemHtml);
  //     // Limpa o campo de texto
  //     todoListInput.val('');
  //   }
  // });

  // // Adiciona um evento de mudança nos checkboxes da lista
  // todoListItem.on('change', '.text-new', function () {
  //   // Alterna a classe 'completed' no elemento pai mais próximo, que é o <div>
  //   $(this).closest("div").toggleClass('completed', this.checked);
  //   // A classe 'completed' faz o texto do item ficar riscado
  // });

  // // Adiciona um evento de clique nos ícones de remover da lista
  // todoListItem.on('click', '.remove', function () {
  //   // Remove o elemento pai mais próximo, que é o <li>
  //   $(this).parent().remove();
  // });


