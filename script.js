const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const form = document.querySelector('.email-form');

envelope.addEventListener('click', () => {
  if (!letter.classList.contains('open')) {
    letter.classList.add('open');
    envelope.classList.add('open');
    envelope.src = 'images/envelop-open.webp';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type="email"]');
  if (input.value) {
    console.log('Submitted:', input.value);
    letter.classList.remove('open');
    envelope.classList.remove('open');
    envelope.src = 'images/envelop-closed.webp';
    input.value = '';
  }
});
