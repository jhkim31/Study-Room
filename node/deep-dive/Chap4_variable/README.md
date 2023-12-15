# Chap 4 변수

## 변수 호이스팅
인터 프리터 언어인 JS에서 **변수 선언**은 한줄씩 실행되는 시점에 선언되는것이 아니라, 이전 단계에서 실행된다.
```javascript
console.log(a);
var a = 1;
```

위 코드는 `ReferenceError` 가 아닌, `undefined` 를 출력한다. 변수의 선언이 런타임 이전에 실행된다는 증거다.


하지만 아래의 두 코드는 `ReferenceError` 를 반환한다.
```javascript
console.log(b);
let b = 1;
```

```javascript
console.log(c);
let c = 1;
```
let, const는 var와 동일하게 호이스팅이 되지만, 초기화 되지는 않는다. 즉 b, c 라는 변수가 있다는것은 알고있지만 선언될때까지 사용할 수는 없다. 이때 let, const로 선언한 변수는 TDZ(Temporal Dead Zone) 에 빠지게 되며, 초기화 전까지 사용할 수 없다.

또한, let, const 은 var와 다르게 블록 레벨 스코프를 가지지만, 이는 후에 다루기로 한다.
