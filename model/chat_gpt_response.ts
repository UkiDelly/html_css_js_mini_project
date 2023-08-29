import { AssistantModel } from "./role_model.js";

interface Choice {
  finish_reason: string;
  index: number;
  message: Message;
}

interface Message {
  content: string;
  role: string;
}

interface UseAge {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

export interface ChatGptResponseInterface {
  choices: Choice[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: UseAge;
}

export class ChatGptResponse implements ChatGptResponseInterface {
  choices: Choice[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: UseAge;

  constructor(
    object: ChatGptResponseInterface
  ) {
    this.choices = object.choices;
    this.created = object.created;
    this.id = object.id;
    this.model = object.model;
    this.object = object.object;
    this.usage = object.usage;
  }

  public getAssistantModel(): AssistantModel {
    return new AssistantModel(this.choices[0].message.content);
  }
}