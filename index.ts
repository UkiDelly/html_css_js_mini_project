import { askGPT } from "./gpt/gpt.js";
import { Model, SystemModel, UserModel } from "./model/role_model.js";
const systemRole = new SystemModel('assistant는 전문성 있는 글을 쓰는 전문가야')
const data: Model[] = [systemRole];

async function onSubmit(before: HTMLInputElement, after: HTMLInputElement) {
  const beforeText = before.value;
  const userModel = new UserModel(beforeText);
  data.push(userModel);
  const result = await askGPT(data);;
  data.push(result);
  after.value = result.content;
}




// =========== 실행 ============

async function main() {



}

main()

// TODO: 로딩중일때 로딩창 구현하기
// TODO: html 꾸미기
// TODO: css 꾸미기
// TODO: 리드미 작성
// TODO: 배포 서버 구축