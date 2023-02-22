(() => {
  const refsabout = {
    openModalBtn: document.querySelector('[data-modalabout-open]'),
    closeModalBtn: document.querySelector('[data-modalabout-close]'),
    modal: document.querySelector('[data-modalabout]'),
  };

  refsabout.openModalBtn.addEventListener('click', toggleModalAbout);
  refsabout.closeModalBtn.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    refsabout.modal.classList.toggle('modalabout__backdrop--is-hidden');
  }
})();
