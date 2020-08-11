export function toQueryParams(options: any): string {
  const queryArray = Object.keys(options).map(
    (key) => `${key}=${options[key]}`,
  );

  return queryArray.join('&');
}
