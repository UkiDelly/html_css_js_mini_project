export function saveConversation(data) {
    localStorage.setItem('conversation', JSON.stringify(data));
}
export function saveHistory(data) {
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
