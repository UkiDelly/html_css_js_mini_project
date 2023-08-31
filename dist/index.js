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
async function onSubmit(before, after) {
    // 새로운 user model 생성
    const userModel = new UserModel(before.value);
    // 대화에 추가
    addConversation(userModel);
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
    const $textBefore = document.getElementById('text-before');
    const $textAfter = document.getElementById('text-after');
    const $transferButton = document.getElementById('submit');
    const $copyButton = document.getElementById('copy');
    const $clearButton = document.getElementById('clear');
    const $resetButton = document.getElementById('reset-button');
    // 변환 버튼을 눌렀을때
    $transferButton?.addEventListener('click', async () => {
        $transferButton.disabled = true;
        $transferButton.style.backgroundColor = 'lightgray';
        $transferButton.innerText = "변환중...";
        await onSubmit($textBefore, $textAfter);
        $transferButton.disabled = false;
        $transferButton.style.backgroundColor = 'rgb(186 230 253)';
        $transferButton.innerText = "변환";
    });
    // 클립보드에 글을 복사
    $copyButton?.addEventListener('click', async () => {
        await copyToClipBoard($textAfter.value);
        window.alert('복사 완료!');
    });
    // 히스토리 초기화
    $clearButton?.addEventListener('click', () => {
        removeAllHistory();
        localStorage.removeItem('history');
    });
    // 초기화 버튼
    $resetButton.addEventListener('click', () => {
        createNewConversation();
        removeAllHistory();
        removeAllData();
    });
}
main();
// TODO: 히스토리 UI 개선 (최대 높이 설정하기, 기록별 패딩 설정)
// TODO: 제목 및 부제목 개선
// TODO: 다크모드 대응
