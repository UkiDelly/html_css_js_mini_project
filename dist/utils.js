/**
* 클립보드에 글을 복사
* @param text 변환된 글
*/
export async function copyToClipBoard(text) {
    await navigator.clipboard.writeText(text);
}
