import { ChatGptResponse } from "../model/chat_gpt_response.js";
const baseUrl = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';
export async function askGPT(data) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    });
    const result = await response.json();
    return new ChatGptResponse(result).getAssistantModel();
}
