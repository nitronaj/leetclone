export function ensureArray<T>(value?: T | T[] | null | undefined): T[] {
  if (Array.isArray(value)) {
    return value;
  } else if (value !== null && value !== undefined) {
    return [value];
  } else {
    return [];
  }
}
