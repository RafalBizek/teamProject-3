(() => {
  const refsbuy = {
    openModalBtn: document.querySelector('[data-modalabuy-open]'),
    closeModalBtn: document.querySelector('[data-modalabuy-close]'),
    modal: document.querySelector('[data-modalabuy]'),
  };

  refsbuy.openModalBtn.addEventListener('click', toggleModalaBuy);
  refsbuy.closeModalBtn.addEventListener('click', toggleModalaBuy);

  function toggleModalaBuy() {
    refsbuy.modal.classList.toggle('modalabuy__backdrop--is-hidden');
  }
})();
