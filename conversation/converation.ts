import { retrieveConversationFromLocalStorage, saveConversationToLocalStorage } from "../local_storage/local_storage.js";
import { Model, SystemModel } from "../model/role_model.js";

// Assistant이 전문성 있는 글을 쓰는 전문가임을 설정
const systemModel = [new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야'), new SystemModel('assistant는 똑같은 질문을 받으면 더 정교하게 바꿔주는 글 전문가야')];


// 이전 대화가 없을 경우 새로운 대화를 생성
let conversation: Model[] = retrieveConversationFromLocalStorage().length == 0 ? systemModel : retrieveConversationFromLocalStorage();

/**
 *  새로운 대화 시작하기
 */
export function createNewConversation() {
  conversation = systemModel
}

/**
 * 대화 내용에 새로운 Model 데이터를 추가하고 대화 내용을 로컬 저장소에 저장하는 함수
 *
 * @param {Model} data - 대화 내용
 */
export function addConversation(data: Model) {
  conversation.push(data)
  // 대화 내용을 로컬 저장소에 저장
  saveConversationToLocalStorage()
}

/**
 * 대화 내용을 다른 모듈에서 읽을 수 있게 하는 함수
 *
 * @return {Model[]} - 대화 내용
 */
export function getConversation(): Model[] {
  return conversation
}