import { askGPT } from "./gpt/gpt.js";
import { getFromLocalStorage, saveToLocalStorage } from "./local_storage/local_storage.js";
import { Model, SystemModel, UserModel } from "./model/role_model.js";
const systemRole = new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야')
const data: Model[] = [systemRole];

async function onSubmit(before: HTMLTextAreaElement, after: HTMLTextAreaElement) {
  const beforeText = before.value;
  const userModel = new UserModel(beforeText);
  console.log(userModel);
  data.push(userModel);
  console.log(data);
  const result = await askGPT(data);
  console.log(result);
  data.push(result);
  saveToLocalStorage(data);
  console.log(data);
  after.value = result.content;
  const localStorageData = getFromLocalStorage();
  console.log(localStorageData);
}

async function copyToClipBoard(text: string) {
  await navigator.clipboard.writeText(text)
}


// =========== 실행 ============

async function main() {

  const $textBefore: HTMLTextAreaElement = document.getElementById('text-before') as HTMLTextAreaElement;
  const $textAfter: HTMLTextAreaElement = document.getElementById('text-after') as HTMLTextAreaElement;
  const $transferButton: HTMLButtonElement = document.getElementById('submit') as HTMLButtonElement;
  const $copyButton: HTMLButtonElement = document.getElementById('copy') as HTMLButtonElement;

  $transferButton?.addEventListener('click', async () => {
    $transferButton.disabled = true
    $transferButton.style.backgroundColor = 'lightgray'
    $transferButton.innerText = "변환중..."
    await onSubmit($textBefore, $textAfter)
    $transferButton.disabled = false
    $transferButton.style.backgroundColor = 'rgb(186 230 253)'
    $transferButton.innerText = "변환"
  });

  $copyButton?.addEventListener('click', async () => {
    await copyToClipBoard($textAfter.value)
  })


}

main()

// TODO: 로딩중일때 로딩창 구현하기
// TODO: 리드미 작성
// TODO: 배포 서버 구축