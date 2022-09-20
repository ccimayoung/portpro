export default class Keycontroller {
  keys: { [codeName: string]: boolean };
  constructor() {
    // 생성자 : 클래스의 인스턴스가 생성될때 기본적으로 실행되는 함수

    this.keys = {};

    window.addEventListener("keydown", (e) => {
      // console.log(e.code + " 누름");
      this.keys[e.code] = true;
      //e.code에 누른 알파벳이 나와서 w를 누르면 this.keys["KeyW"] = true
    });

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      // console.log(e.code + " 손뗌");
      delete this.keys[e.code];
      //w에서 손을 때면 this.key배열에서 "KeyW" 삭제
    });
  }
}
