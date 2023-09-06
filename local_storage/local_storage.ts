import { getConversation } from "../conversation/converation.js";
import { AssistantModel, Model } from "../model/role_model.js";


/**
 * 로컬 스토리지에 현재 대화 내용을 저장하는 함수
 *
 */
export function saveConversationToLocalStorage() {
  localStorage.setItem('conversation', JSON.stringify(getConversation()));
}

/**
 * 히스토리 데이터를 로컬스토리지에 저장하는 함수
 *
 * @param {AssistantModel[]} data - ChatGPT가 대답한 데이터들.
 */
export function saveHistoryToLocalStorage(data: AssistantModel[]) {
  localStorage.setItem('history', JSON.stringify(data));
}

/**
 * 로컽 스토리지에서 대화 내용을 가져오는 함수
 * @return {Model[]} 로컬 스토리지에서 가져온 대화 내용
 */
export function retrieveConversationFromLocalStorage(): Model[] {
  const data: Model[] = JSON.parse(localStorage.getItem('conversation') || '[]');
  return data
}

/**
 * 로컬 스토리지에서 히스토리 내용을 가져오는 함수
 *
 * @return {AssistantModel[]} 로컬 스토리지에서 가져온 히스토리 내용
 */
export function getHistoryFromLocalStorage(): AssistantModel[] {
  const modelList: AssistantModel[] = JSON.parse(localStorage.getItem('history') || '[]');
  return modelList
}

/**
 * 로컬스토리지에서 히스토리 내용을 전부 삭제하는 함수
 */
export function removeHistoryFromLocalStorage() {
  localStorage.removeItem('history')
}

/**
 * 대화 내용, 히스토리 내용을 전부 삭제하는 함수
 */
export function removeAllData() {
  localStorage.clear()
}