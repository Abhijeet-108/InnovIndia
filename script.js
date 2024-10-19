const options = document.querySelectorAll('.option');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentOption = 0;

function updateOptions(direction) {
  options[currentOption].classList.remove('active');

  if (direction === 'next') {
    currentOption = (currentOption + 1) % options.length;
  } else {
    currentOption = (currentOption - 1 + options.length) % options.length;
  }

  options[currentOption].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  updateOptions('next');
});

prevBtn.addEventListener('click', () => {
  updateOptions('prev');
});
