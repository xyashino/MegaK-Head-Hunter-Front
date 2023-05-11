export const buildQueryUrl = (
  baseUrl: string,
  params: { [key: string]: string | string[] | boolean  | number}
) => {
  const url = new URL(baseUrl);
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "boolean") {
      url.searchParams.set(key, value ? "1" : "0");
      continue;
    }
    if (typeof value !== "number" && value.length === 0) {
      url.searchParams.delete(key);
      continue;
    }
    if (Array.isArray(value)) {
      value.forEach((el) => {
        if (el === "") return;
        url.searchParams.append(key, el);
      });
      continue;
    }
    url.searchParams.set(key, value as string);
  }
  return url.toString();
};
