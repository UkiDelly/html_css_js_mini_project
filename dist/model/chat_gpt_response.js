import { AssistantModel } from "./role_model.js";
export class ChatGptResponse {
    choices;
    created;
    id;
    model;
    object;
    usage;
    constructor(object) {
        this.choices = object.choices;
        this.created = object.created;
        this.id = object.id;
        this.model = object.model;
        this.object = object.object;
        this.usage = object.usage;
    }
    getAssistantModel() {
        return new AssistantModel(this.choices[0].message.content);
    }
}
