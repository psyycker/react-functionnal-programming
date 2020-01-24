export function calculateNewValue(type) {
  return function (value) {
    switch (type) {
      case 'substract':
        return value - 1;
      case 'add':
        return value + 1;
      default:
        return value
    }
  }
}
