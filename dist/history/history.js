import { getHistoryFromLocalStorage, saveHistoryToLocalStorage } from "../local_storage/local_storage.js";
import { copyToClipBoard } from "../utils.js";
// 히스토리 가져오기
var historyList = getHistoryFromLocalStorage();
// 최초 실행때, 히스토리 화면에 대화 내용을 표시
initialHistory(historyList);
export function createHistory(assistantModel) {
    const $historyContainer = document.getElementById('history');
    const $history = document.createElement('p');
    $history.classList.add('flex', 'border-2', 'p-[5px]', 'rounded-lg', 'w-full', 'hover:cursor-pointer');
    $history.innerText = assistantModel.content;
    $history.addEventListener('click', () => {
        copyToClipBoard(assistantModel.content);
    });
    $historyContainer.appendChild($history);
}
export function initialHistory(data) {
    const $historyContainer = document.getElementById('history');
    for (let index in data) {
        const $history = document.createElement('p');
        $history.classList.add('flex', 'border-2', 'p-[5px]', 'rounded-lg', 'w-full');
        $history.innerText = data[index].content;
        $historyContainer.appendChild($history);
    }
}
export function removeAllHistory() {
    const $historyContainer = document.getElementById('history');
    historyList = [];
    $historyContainer.innerHTML = '';
}
export function addHistory(data) {
    historyList.push(data);
    // 히스토리 화면에 대화 내용을 표시
    createHistory(data);
    // 히스토리 내용을 로컬 저장소에 저장
    saveHistoryToLocalStorage(historyList);
}
