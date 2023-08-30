import { AssistantModel, Model, Role, SystemModel, UserModel } from "../model/role_model.js";


export function saveToLocalStorage(data: Model[]) {
  localStorage.setItem('data', JSON.stringify(data));
}

export function getFromLocalStorage(): Model[] {
  const modelList: Model[] = JSON.parse(localStorage.getItem('data') || '[]');
  return modelList.map((element) => {
    switch (element.role) {
      case Role.system:
        return new SystemModel(element.content);

      case Role.user:
        return new UserModel(element.content);

      case Role.assistant:
        return new AssistantModel(element.content);
    }
  })
}
