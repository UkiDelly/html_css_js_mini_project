"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantModel = exports.SystemModel = exports.UserModel = void 0;
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["system"] = "system";
    Role["assistant"] = "assistant";
})(Role || (Role = {}));
class UserModel {
    role;
    content;
    constructor(content) {
        this.role = Role.user;
        this.content = content;
    }
    static fromJson(object) {
        if (object.role != Role.user) {
            throw new Error('Invalid role');
        }
        return new UserModel(object.content);
    }
}
exports.UserModel = UserModel;
class SystemModel {
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
exports.SystemModel = SystemModel;
class AssistantModel {
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
exports.AssistantModel = AssistantModel;
