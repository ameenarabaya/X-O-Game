let divs = document.querySelector(".game-container");
let blocks = Array.from(divs.children);
let XOplace = document.querySelector(".Game-info span");

let array = [];

function click(blocks) {
  blocks.forEach(function (block) {
    block.addEventListener('click', function () {
      array.push(block);
      if (array.indexOf(block) === 0) {
        XOplace.innerHTML = "O";
        block.classList.add('X');
        block.setAttribute("data-value", "X");
        block.style.backgroundColor = "black";
      }
      if (array[array.indexOf(block) - 1].classList.contains('X')) {
        XOplace.innerHTML = "X";
        block.classList.add('O');
        block.setAttribute("data-value", "O");
        block.style.backgroundColor = "black";

      } else if (array[array.indexOf(block) - 1].classList.contains('O')) {
        XOplace.innerHTML = "O";
        block.classList.add('X');
        block.setAttribute("data-value", "X");
        block.style.backgroundColor = "black";
      }
      check(blocks);
    })

  })
}

click(blocks);

function check(blocks) {
  if (blocks[0].dataset.value === blocks[3].dataset.value && blocks[3].dataset.value === blocks[6].dataset.value) {
    winner(blocks[0], blocks[3], blocks[6]);
  } else if (blocks[0].dataset.value === blocks[1].dataset.value && blocks[1].dataset.value === blocks[2].dataset.value) {
    winner(blocks[0], blocks[1], blocks[2]);
  } else if (blocks[3].dataset.value === blocks[4].dataset.value && blocks[4].dataset.value === blocks[5].dataset.value) {
    winner(blocks[3], blocks[4], blocks[5]);
  } else if (blocks[6].dataset.value === blocks[7].dataset.value && blocks[7].dataset.value === blocks[8].dataset.value) {
    winner(blocks[6], blocks[7], blocks[8]);

  } else if (blocks[2].dataset.value === blocks[5].dataset.value && blocks[5].dataset.value === blocks[8].dataset.value) {
    winner(blocks[2], blocks[5], blocks[8]);
  } else if (blocks[1].dataset.value === blocks[4].dataset.value && blocks[4].dataset.value === blocks[7].dataset.value) {

    winner(blocks[1], blocks[4], blocks[7]);
  } else if (blocks[0].dataset.value === blocks[4].dataset.value && blocks[4].dataset.value === blocks[8].dataset.value) {
    winner(blocks[0], blocks[4], blocks[8]);
    document.getElementById("win").play();
  } else if (blocks[2].dataset.value === blocks[4].dataset.value && blocks[4].dataset.value === blocks[6].dataset.value) {
    winner(blocks[2], blocks[4], blocks[6]);
  }
}

function winner(block1, block2, block3) {
  if (block1.dataset.value === block2.dataset.value && block2.dataset.value === block3.dataset.value) {
    block1.style.backgroundColor = "red";
    block2.style.backgroundColor = "red";
    block3.style.backgroundColor = "red";
    XOplace.innerHTML = `the winner is ${block1.dataset.value}`;
    document.getElementById("win").play();
    divs.classList.add('finish');
  }
}