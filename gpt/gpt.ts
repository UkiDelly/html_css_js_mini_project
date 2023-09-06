import { ChatGptResponse, ChatGptResponseInterface } from "../model/chat_gpt_response.js"
import { AssistantModel, Model } from "../model/role_model.js"

const baseUrl = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/'


/**
 * ChatGPT에게 답변을 요청하는 함수
 * @param {Model[]} data - 대화 내용 데이터
 * @returns {Promise<AssistantModel>} - ChatGPT의 응
 */
export async function askGPT(data: Model[]): Promise<AssistantModel> {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  })
  const result = await response.json() as ChatGptResponseInterface
  return new ChatGptResponse(result).getAssistantModel()
}