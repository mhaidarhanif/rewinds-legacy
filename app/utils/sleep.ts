export const sleep = (ms: number) => {
  return new Promise((r) => {
    // eslint-disable-next-line no-promise-executor-return
    return setTimeout(r, ms);
  });
};
