// 함수의 파라미터에 타입을 정의하는 방식
function plus(a: number, b: number) {
  return a + b
}
plus(10, 20)

// 함수의 반환값에 타입을 정의하는 방식
function plus1(): number {
  return 10
}

// 함수에 타입을 정의하는 방식
function plus2(a: number, b: number): number {
  return a + b
}

plus2(10, 20)

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  return [a, b]
}

log('Hi Khan')
log('Hi', 'Khan')