import { AssistantModel, Model } from "../model/role_model.js";


export function saveConversation(data: Model[]) {
  localStorage.setItem('conversation', JSON.stringify(data));
}

export function saveHistory(data: AssistantModel[]) {
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