import { askGPT } from "./gpt/gpt.js";
import { Model, SystemModel, UserModel } from "./model/role_model.js";
const systemRole = new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야')
const data: Model[] = [systemRole];




// =========== 실행 ============

async function main() {
  console.log(data);
  const question = new UserModel("이유를 모르겠지만 실험은 실패했다.")
  data.push(question)


  const result = await askGPT(data)
  console.log(result);

}

main()

