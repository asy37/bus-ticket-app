export const post = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const get = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const del = (key: string) => {
  localStorage.removeItem(key);
};

export const put = <T>(key: string, updater: (oldData: T | null) => T) => {
  const current = get<T>(key);
  const updated = updater(current);
  post(key, updated);
};
