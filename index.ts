
import { addConversation, createNewConversation, getConversation } from "./conversation/converation.js";
import { askGPT } from "./gpt/gpt.js";
import { addHistory, removeAllHistory } from "./history/history.js";
import { removeAllData } from "./local_storage/local_storage.js";
import { UserModel } from "./model/role_model.js";
import { copyToClipBoard } from "./utils.js";
/**
 * 변환 버튼을 눌렀을때 실행
 * @param before 전송할 글의 html 태그
 * @param after 변환된 글의 html 태그
 */
async function onSubmit(before: HTMLTextAreaElement, after: HTMLTextAreaElement) {

  // 새로운 user model 생성
  const userModel = new UserModel(before.value);
  // 대화에 추가
  addConversation(userModel)

  // 챗지피티에게 요철
  const result = await askGPT(getConversation());

  // 응답을 대화에 추가
  addConversation(result);
  // 응답을 히스토리에 추가
  addHistory(result);
  // 응답 내용을 화면에 표시
  after.value = result.content;
}


// =========== 실행 ============

async function main() {

  const $textBefore: HTMLTextAreaElement = document.getElementById('text-before') as HTMLTextAreaElement;
  const $textAfter: HTMLTextAreaElement = document.getElementById('text-after') as HTMLTextAreaElement;
  const $transferButton: HTMLButtonElement = document.getElementById('submit') as HTMLButtonElement;
  const $copyButton: HTMLButtonElement = document.getElementById('copy') as HTMLButtonElement;
  const $clearButton: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
  const $resetButton: HTMLButtonElement = document.getElementById('reset-button') as HTMLButtonElement;

  // 변환 버튼을 눌렀을때 실행할 이벤트
  $transferButton?.addEventListener('click', async () => {
    $transferButton.disabled = true
    $transferButton.style.backgroundColor = 'lightgray'
    $transferButton.innerText = "변환중..."
    await onSubmit($textBefore, $textAfter)
    $transferButton.disabled = false
    $transferButton.style.backgroundColor = 'rgb(186 230 253)'
    $transferButton.innerText = "변환"
  });


  // 클립보드에 글을 복사하는 이벤트
  $copyButton?.addEventListener('click', async () => {
    await copyToClipBoard($textAfter.value)
    window.alert('복사 완료!')
  })


  // 히스토리만 초기화하는 이벤트
  $clearButton?.addEventListener('click', () => {
    removeAllHistory()
    localStorage.removeItem('history')
  })

  // 대화 내용뿐만 아니라 히스토리도 초기화하는 이벤트
  $resetButton.addEventListener('click', () => {
    $textBefore.value = ""
    $textAfter.value = ""
    createNewConversation()
    removeAllHistory()
    removeAllData()
  })
}



// =========== 실행 ============
main()
