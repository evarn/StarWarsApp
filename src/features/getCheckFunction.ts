export const getCheckFunction = (check: string | undefined) => {
  if (check === undefined) {
    return false;
  }
  if (check === 'none') {
    return false;
  }
  if (check === 'unknown') {
    return false;
  }
  if (check === 'n/a') {
    return false;
  }
  return true;
};
