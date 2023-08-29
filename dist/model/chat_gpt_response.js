"use strict";
// {
//   "choices": [
//     {
//       "finish_reason": "stop",
//       "index": 0,
//       "message": {
//         "content": "The 2020 World Series was played in Texas at Globe Life Field in Arlington.",
//         "role": "assistant"
//       }
//     }
//   ],
//     "created": 1677664795,
//       "id": "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
//         "model": "gpt-3.5-turbo-0613",
//           "object": "chat.completion",
//             "usage": {
//     "completion_tokens": 17,
//       "prompt_tokens": 57,
//         "total_tokens": 74
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class ChatGptResponse {
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
}
