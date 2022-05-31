const display = document.getElementById('display');
console.log(display);
const buttons = Array.from(document.getElementsByClassName('calculator__btn'));

buttons.map(button => {
  button.addEventListener('click', e => {
    switch (e.target.innerText) {
      default:
        display.innerText += e.target.innerText;
    }
  });
});
