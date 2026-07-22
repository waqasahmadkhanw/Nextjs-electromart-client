export const removeEmptyValues = <
  T extends Record<string, unknown>
>(
  object: T
): Partial<T> => {

  return Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
  ) as Partial<T>;
};



export const pick = <
  T extends object,
  K extends keyof T
>(
  object: T,
  keys: K[]
): Pick<T,K> => {

  return keys.reduce(
    (result,key)=>{

      result[key]=object[key];

      return result;

    },
    {} as Pick<T,K>
  );
};