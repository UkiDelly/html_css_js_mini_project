import { getHistoryFromLocalStorage, saveHistoryToLocalStorage } from "../local_storage/local_storage.js";
import { AssistantModel } from "../model/role_model.js";
import { copyToClipBoard } from "../utils.js";

// 히스토리 데이터
let historyList: AssistantModel[] = getHistoryFromLocalStorage();

// 최초 실행때, 히스토리 화면에 대화 내용을 표시
initialHistory(historyList)

/**
 * 히스토리 데이터를 생성해서 화면에 표시해주는 함수
 *
 * @param {AssistantModel} assistantModel - ChatGPT의 응답
 */
function createHistory(assistantModel: AssistantModel) {
  const $historyContainer = document.getElementById('history')
  const $history = document.createElement('p')
  $history.classList.add('flex', 'border-2', 'p-[5px]', 'my-[5px]', 'rounded-lg', 'w-full', 'h-fit', 'hover:cursor-pointer')
  $history.innerText = assistantModel.content
  $history.addEventListener('click', () => {
    copyToClipBoard(assistantModel.content)
  })

  $historyContainer!.appendChild($history)
}


/**
 * 히스토리 데이터로 UI의 히스토리 내용을 표시해주는 함수
 *
 * @param {AssistantModel[]} data - An array of AssistantModel objects representing the data to be displayed.
 */
function initialHistory(data: AssistantModel[]) {
  const $historyContainer = document.getElementById('history')
  for (let index in data) {
    const $history = document.createElement('p')
    $history.classList.add('flex', 'border-2', 'p-[5px]', 'my-[5px]', 'rounded-lg', 'w-full', 'h-fit')
    $history.innerText = data[index].content
    $historyContainer!.appendChild($history)
  }
}

/**
 * 히스토리 데이터를 전부 삭제하는 함수
 *
 */
export function removeAllHistory() {
  const $historyContainer = document.getElementById('history')
  historyList = []

  $historyContainer!.innerHTML = ''
}

/**
 * ChatGPT 응답을 히스토리 내역 및 로컬 스토리지에 저장하고 화면에 표세해주는 함수
 *
 * @param {AssistantModel} data - ChatGPT의 응답
 */
export function addHistory(data: AssistantModel): void {
  historyList.push(data)
  // 히스토리 화면에 대화 내용을 표시
  createHistory(data);
  // 히스토리 내용을 로컬 저장소에 저장
  saveHistoryToLocalStorage(historyList);
}