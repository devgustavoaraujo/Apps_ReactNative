export function converteCurrency(amount, rate) {
  return (parseFloat(amount) * rate).toFixed(2);
}
