export function sanitizeFormData<T>(
  data: T
): T {
  return JSON.parse(JSON.stringify(data));
}