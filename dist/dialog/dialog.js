"use strict";
const $dialog = document.querySelector('dialog');
const $howUseButton = document.getElementById('how-to-use');
const $dialogCloseButton = document.getElementById('close-dialog');
$howUseButton?.addEventListener('click', () => {
    $dialog.showModal();
});
$dialogCloseButton?.addEventListener('click', () => {
    $dialog.close();
});
