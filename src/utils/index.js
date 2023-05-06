export const clean = (text) =>
  text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
