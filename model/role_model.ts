import { ChatGptResponseInterface } from "./chat_gpt_response";

enum Role {
  user = 'user',
  system = 'system',
  assistant = 'assistant'
}

interface Model {
  role: Role,
  content: string,
}

export class UserModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.user;
    this.content = content;
  }

  static fromJson(object: Model): UserModel {
    if (object.role != Role.user) {
      throw new Error('Invalid role');
    }
    return new UserModel(object.content);
  }
}

export class SystemModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.system;
    this.content = content;
  }

  static fromJson(object: Model): SystemModel {
    if (object.role != Role.system) {
      throw new Error('Invalid role');
    }
    return new SystemModel(object.content);
  }
}

export class AssistantModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.assistant;
    this.content = content;
  }

  static fromJson(object: Model): AssistantModel {
    if (object.role != Role.assistant) {
      throw new Error('Invalid role');
    }
    return new AssistantModel(object.content);
  }

  static fromChatGptResponse(object: ChatGptResponseInterface): AssistantModel {
    return new AssistantModel(object.choices[0].message.content);
  }


}