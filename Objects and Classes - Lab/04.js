function convertToObject(jsonStr) {
  const obj = JSON.parse(jsonStr);
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
