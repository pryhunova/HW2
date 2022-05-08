const title = document.querySelector('h1');
const colors = ['#D705F2', '#3805F2', '#68F205', '#EAF205', '#F20505'];

document.onmousemove = function () {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
};
