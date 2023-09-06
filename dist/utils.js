/**
 * 클립보드에 글을 복사
 * @param text 변환된 글
 */
export async function copyToClipBoard(text) {
    await navigator.clipboard.writeText(text);
}
let removeToast;
export function showToast(text) {
    const toast = document.getElementById('toast');
    toast?.classList.contains('reveal')
        ? (clearTimeout(removeToast),
            (removeToast = setTimeout(function () {
                toast.classList.remove('reveal');
            }, 1000)))
        : (removeToast = setTimeout(function () {
            toast?.classList.remove('reveal');
        }, 1000));
    toast?.classList.add('reveal'), (toast.innerText = text);
}
