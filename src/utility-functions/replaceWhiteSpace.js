export function removeWhiteSpace(str, replacement) {
  let newString;
  // Replace with nothing
  if (!replacement) {
    newString = str.replaceAll(/\s/g, "");
    return newString;
  }
  // Replace with the second argument string
  else {
    newString = str.replaceAll(/\s/g, replacement);
    return newString;
  }
}
