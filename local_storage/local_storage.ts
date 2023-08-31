import { getConversation } from "../conversation/converation.js";
import { AssistantModel, Model } from "../model/role_model.js";


export function saveConversationToLocalStorage() {
  localStorage.setItem('conversation', JSON.stringify(getConversation()));
}

export function saveHistoryToLocalStorage(data: AssistantModel[]) {
  localStorage.setItem('history', JSON.stringify(data));
}

export function getConverstationFromLocalStorage(): Model[] {
  const data: Model[] = JSON.parse(localStorage.getItem('conversation') || '[]');
  return data
}

export function getHistoryFromLocalStorage(): AssistantModel[] {
  const modelList: AssistantModel[] = JSON.parse(localStorage.getItem('history') || '[]');
  return modelList
}

export function removeHistoryFromLocalStorage() {
  localStorage.removeItem('history')
}

export function removeAllData() {
  localStorage.clear()
}