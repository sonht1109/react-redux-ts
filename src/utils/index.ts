export const generateId = () => Math.random().toString(36).slice(2, 20);

export const isDefined = (value: any) => value !== undefined && value !== null;

export const range = function (start = 0, stop?: number, step = 1) {
  if (stop === undefined) {
    [start, stop] = [0, start];
  }

  let res = [];

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    res.push(i);
  }
  return res;
};

export const getPublic = (url: string) => `${process.env.REACT_APP_SERVER_URL}${url}`