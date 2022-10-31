export function modalFn() {
  const id = $(this).attr('id');

  $(`[data-modal="${id}"]`).css('display', 'flex');

  $(`[data-modal="${id}"]`).on('click', (e) => {
    const target = $(e.target).data().closeModal;

    if (target !== undefined || $(e.target).hasClass('excel_popup')) {
      $(`[data-modal="${id}"]`).css('display', 'none');
      $(`[data-modal="${id}"]`).off('click');
    }
  });
}
