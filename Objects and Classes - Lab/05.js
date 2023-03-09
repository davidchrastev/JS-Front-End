function toJSONString(firstName, lastName, hairColor) {
  let obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  return JSON.stringify(obj);
}
