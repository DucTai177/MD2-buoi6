function allNumber(...number) {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
    return total;
  }
}
console.log("kết quả là", allNumber(3, 6));
