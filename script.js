const square = document.getElementById('square');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

const elem = document.getElementById('e_btn');

const range = document.getElementById('range');
const circle = document.getElementById('circle');


const logger = function (event) {
      circle.style.width = range.value + '%';
      circle.style.height = range.value + '%';
}

btn.addEventListener('click', function() {
      if (text.value === "yellow") {
            square.style.backgroundColor = 'yellow';
      } else if (text.value === "red") {
            square.style.backgroundColor = 'red';
      } else if (text.value === "blue") {
            square.style.backgroundColor = 'blue';
      } else if (text.value === "green") {
            square.style.backgroundColor = 'green';
      }
});

elem.remove();


range.addEventListener('input', logger);


