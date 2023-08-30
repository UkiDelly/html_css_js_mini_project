export var Role;
(function (Role) {
    Role["user"] = "user";
    Role["system"] = "system";
    Role["assistant"] = "assistant";
})(Role || (Role = {}));
export class UserModel {
    role;
    content;
    constructor(content) {
        this.role = Role.user;
        this.content = content + "<- 이 문장을 전문성있는 말로 변경하고 사실과는 다른 말과 다른 대답은 하지마";
    }
    static fromJson(object) {
        if (object.role != Role.user) {
            throw new Error('Invalid role');
        }
        return new UserModel(object.content);
    }
}
export class SystemModel {
    role;
    content;
    constructor(content) {
        this.role = Role.system;
        this.content = content;
    }
    static fromJson(object) {
        if (object.role != Role.system) {
            throw new Error('Invalid role');
        }
        return new SystemModel(object.content);
    }
}
export class AssistantModel {
    role;
    content;
    constructor(content) {
        this.role = Role.assistant;
        this.content = content;
    }
    static fromJson(object) {
        if (object.role != Role.assistant) {
            throw new Error('Invalid role');
        }
        return new AssistantModel(object.content);
    }
    static fromChatGptResponse(object) {
        return new AssistantModel(object.choices[0].message.content);
    }
}
