export const uniqueArray = <T>(
  array:T[]
):T[] => {

  return [...new Set(array)];

};



export const groupBy = <
T,
K extends keyof T
>(
array:T[],
key:K
)=>{

return array.reduce(
(result,item)=>{

const group = String(item[key]);

result[group] = result[group] || [];

result[group].push(item);

return result;

},
{} as Record<string,T[]>
);

};