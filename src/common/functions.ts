export const capitalize = (s: string | any[]) =>
  (s && s[0].toUpperCase() + s.slice(1)) || '';
