import { getConverstationFromLocalStorage, saveConversationToLocalStorage } from "../local_storage/local_storage.js";
import { Model, SystemModel } from "../model/role_model.js";

// Assistant이 전문성 있는 글을 쓰는 전문가임을 설정
const systemModel = new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야')

// 이전 대화가 없을 경우 새로운 대화를 생성
let conversation: Model[] = getConverstationFromLocalStorage().length == 0 ? [systemModel] : getConverstationFromLocalStorage();

// 새로운 대화 시작하기
export function createNewConversation() {
  conversation = [systemModel]
}

export function addConversation(data: Model) {
  conversation.push(data)
  // 대화 내용을 로컬 저장소에 저장
  saveConversationToLocalStorage()
}

export function getConversation(): Model[] {
  return conversation
}