export function parseFormData(form: FormData) {
  return Object.fromEntries(
    Array.from(form.keys()).map((key) => [
      key,
      form.getAll(key).length > 1 ? form.getAll(key) : form.get(key),
    ])
  );
}
