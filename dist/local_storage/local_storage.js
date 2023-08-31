import { getConversation } from "../conversation/converation.js";
export function saveConversationToLocalStorage() {
    localStorage.setItem('conversation', JSON.stringify(getConversation()));
}
export function saveHistoryToLocalStorage(data) {
    localStorage.setItem('history', JSON.stringify(data));
}
export function getConverstationFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('conversation') || '[]');
    return data;
}
export function getHistoryFromLocalStorage() {
    const modelList = JSON.parse(localStorage.getItem('history') || '[]');
    return modelList;
}
export function removeHistoryFromLocalStorage() {
    localStorage.removeItem('history');
}
export function removeAllData() {
    localStorage.clear();
}
