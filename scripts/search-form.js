jQuery(($) => {
  const $form = $('.search-form');

  if (!$form.length) {
    return;
  }

  $form.find('.search-form--toggle').click(() => {
    $form.toggleClass('active');
  });
});
