const $dialog = document.querySelector('dialog') as HTMLDialogElement;
const $howUseButton = document.getElementById('how-to-use') as HTMLButtonElement;
const $dialogCloseButton = document.getElementById('close-dialog') as HTMLButtonElement


$howUseButton?.addEventListener('click', () => {
  $dialog.showModal();
})

$dialogCloseButton?.addEventListener('click', () => {
  $dialog.close();
})