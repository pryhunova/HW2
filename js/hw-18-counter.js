const refs = {
  decreaseBtn: document.querySelector('.decrease'),
  increaseBtn: document.querySelector('.increase'),
  resetBtn: document.querySelector('.reset'),
  countervalue: document.querySelector('#counter-value'),
};

let count = 0;

refs.decreaseBtn.addEventListener('click', () => {
  count--;
  refs.countervalue.textContent = count;
});

refs.increaseBtn.addEventListener('click', () => {
  count++;
  refs.countervalue.textContent = count;
});

refs.resetBtn.addEventListener('click', () => {
  count = 0;
  refs.countervalue.textContent = count;
});
