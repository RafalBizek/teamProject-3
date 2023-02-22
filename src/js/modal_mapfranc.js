(() => {
  const refsmapfranc = {
    openModalBtn: document.querySelector('[data-modalmapfranc-open]'),
    closeModalBtn: document.querySelector('[data-modalmapfranc-close]'),
    modal: document.querySelector('[data-modalmapfranc]'),
  };

  refsmapfranc.openModalBtn.addEventListener('click', toggleModalmapFranc);
  refsmapfranc.closeModalBtn.addEventListener('click', toggleModalmapFranc);

  function toggleModalmapFranc() {
    refsmapfranc.modal.classList.toggle('modalmapfranc__backdrop--is-hidden');
  }
})();
