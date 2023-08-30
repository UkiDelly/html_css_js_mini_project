import { AssistantModel } from "../model/role_model.js";
import { copyToClipBoard } from "../utils.js";

export function createHistory(assistantModel: AssistantModel) {
  const $historyContainer = document.getElementById('history')
  const $history = document.createElement('p')
  $history.classList.add('flex', 'border-2', 'p-[5px]', 'rounded-lg', 'w-full', 'hover:cursor-pointer')
  $history.innerText = assistantModel.content
  $history.addEventListener('click', () => {
    copyToClipBoard(assistantModel.content)
  })

  $historyContainer!.appendChild($history)
}


export function initialHistory(data: AssistantModel[]) {
  const $historyContainer = document.getElementById('history')
  for (let index in data) {
    const $history = document.createElement('p')
    $history.classList.add('flex', 'border-2', 'p-[5px]', 'rounded-lg', 'w-full')
    $history.innerText = data[index].content
    $historyContainer!.appendChild($history)
  }
}

export function removeAllHistory() {
  const $historyContainer = document.getElementById('history')
  $historyContainer!.innerHTML = ''
}
