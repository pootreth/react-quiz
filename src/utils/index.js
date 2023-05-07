export const clean = (text) => {
  const textElement = document.createElement("textarea");
  textElement.innerHTML = text;
  return textElement.value;
};
