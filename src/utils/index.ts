export const generateId = () => Math.random().toString(36).slice(2, 20);

export const isDefined = (value: any) => value !== undefined && value !== null;
