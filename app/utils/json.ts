export const stringifyJSON = (data: unknown) => {
  return JSON.stringify(data, null, 2);
};

export const parseJSON = (string: string) => {
  return JSON.parse(string);
};
