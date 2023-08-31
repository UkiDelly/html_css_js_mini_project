export var Role;
(function (Role) {
    Role["user"] = "user";
    Role["system"] = "system";
    Role["assistant"] = "assistant";
})(Role || (Role = {}));
export class UserModel {
    role = Role.user;
    content;
    constructor(content) {
        this.content = content + "<- 이 문장을 전문성있는 말로 변경하고 사실과는 다른 말과 다른 대답은 하지마";
    }
}
export class SystemModel {
    role = Role.system;
    content;
    constructor(content) {
        this.content = content;
    }
}
export class AssistantModel {
    role = Role.assistant;
    content;
    constructor(content) {
        this.content = content;
    }
}
