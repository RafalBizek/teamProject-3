(() => {
  const refsmap = {
    openModalBtn: document.querySelector('[data-modalmap-open]'),
    closeModalBtn: document.querySelector('[data-modalmap-close]'),
    modal: document.querySelector('[data-modalmap]'),
  };

  refsmap.openModalBtn.addEventListener('click', toggleModalMap);
  refsmap.closeModalBtn.addEventListener('click', toggleModalMap);

  function toggleModalMap() {
    refsmap.modal.classList.toggle('modalmap__backdrop--is-hidden');
  }
})();
