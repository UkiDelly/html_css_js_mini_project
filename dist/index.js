import { askGPT } from "./gpt/gpt.js";
import { createHistory, initialHistory, removeAllHistory } from "./history/history.js";
import { getConverstationFromLocalStorage, getHistoryFromLocalStorage, removeAllData, saveConversation, saveHistory } from "./local_storage/local_storage.js";
import { SystemModel, UserModel } from "./model/role_model.js";
import { copyToClipBoard } from "./utils.js";
// Assistant이 전문성 있는 글을 쓰는 전문가임을 설정
const systemRole = new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야');
// 이전 대화가 없을 경우 새로운 대화를 생성
var conversation = getConverstationFromLocalStorage().length == 0 ? [systemRole] : getConverstationFromLocalStorage();
// 히스토리 가져오기
const historyList = getHistoryFromLocalStorage();
/**
 * 변환 버튼을 눌렀을때 실행
 * @param before 전송할 글의 html 태그
 * @param after 변환된 글의 html 태그
 */
async function onSubmit(before, after) {
    // 새로운 user model 생성
    const userModel = new UserModel(before.value);
    // 대화에 추가
    conversation.push(userModel);
    // 챗지피티에게 요철
    const result = await askGPT(conversation);
    // 응답을 대화에 추가
    conversation.push(result);
    // 응답을 히스토리에 추가
    historyList.push(result);
    // 대화 내용을 로컬 저장소에 저장
    saveConversation(conversation);
    // 히스토리 내용을 로컬 저장소에 저장
    saveHistory(historyList);
    // 응답 내용을 화면에 표시
    after.value = result.content;
    // 히스토리 화면에 대화 내용을 표시
    createHistory(result);
}
// =========== 실행 ============
async function main() {
    // 최초 실행때, 히스토리 화면에 대화 내용을 표시
    initialHistory(historyList);
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
        conversation = [systemRole];
        removeAllHistory();
        removeAllData();
    });
}
main();
// TODO: 리드미 작성
// TODO: 배포 서버 구축
// TODO: 새로운 대화 만들기 버튼 추가
// TODO: 새로운 대화 만들기 로직 추가
// TODO: 히스토리 UI 개선 (최대 높이 설정하기, 기록별 패딩 설정)
// TODO: 히스토리 클릭시 클립보드에 해당 내용 복사하기
// TODO: 제목 및 부제목 개선
// TODO: 다크모드 대응
