export const normalize = (array, key) => {
  let normalized = {};
  for (let i = 0; i < array.length; i++) {
    const newKey = key ? normalized[array[key]] : i;

    normalized[newKey] = array[i];
  }
  return normalized;
};
