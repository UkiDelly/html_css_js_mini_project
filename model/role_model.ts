
export enum Role {
  user = 'user',
  system = 'system',
  assistant = 'assistant'
}

export interface Model {
  role: Role,
  content: string,
}

export class UserModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.user;
    this.content = content + "<- 이 문장을 전문성있는 말로 변경하고 사실과는 다른 말과 다른 대답은 하지마";
  }
}

export class SystemModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.system;
    this.content = content;
  }
}

export class AssistantModel implements Model {
  role: Role;
  content: string;

  constructor(content: string) {
    this.role = Role.assistant;
    this.content = content;
  }
}