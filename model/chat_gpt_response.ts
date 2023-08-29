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

class ChatGptResponse implements ChatGptResponseInterface {
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
}