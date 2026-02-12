const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const letterClip = document.querySelector('.letter-clip');
const form = document.querySelector('.email-form');
const envelopeScene = document.querySelector('.envelope-scene');

envelope.addEventListener('click', () => {
  if (!letter.classList.contains('open')) {
    envelope.classList.add('open');
    envelope.src = 'images/envelop-open.webp';
    envelopeScene.classList.add('letter-open');

    setTimeout(() => {
      letter.classList.add('open');
      letterClip.classList.add('open');
    }, 600);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type="email"]');
  if (input.value) {
    console.log('Submitted:', input.value);
    letter.classList.remove('open');
    letterClip.classList.remove('open');
    envelope.classList.remove('open');
    envelopeScene.classList.remove('letter-open');
    envelope.src = 'images/envelop-closed.webp';
    input.value = '';
  }
});
