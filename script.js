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
    letterClip.classList.remove('open');
    letter.classList.add('closing');
    letter.classList.remove('open');

    const slideDuration = 400;
    setTimeout(() => {
      letter.classList.remove('closing');
      envelope.classList.remove('open');
      envelope.src = 'images/envelop-closed.webp';
      envelopeScene.classList.remove('letter-open');
      input.value = '';
    }, slideDuration + 600);
  }
});
