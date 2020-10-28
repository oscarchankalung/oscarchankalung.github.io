export function squared(num) {
  return num * num;
}

export function cubed(num) {
  return num * num * num;
}

export function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}