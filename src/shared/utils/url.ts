export function createUrl(
base:string,
path:string
){

return `${base.replace(/\/$/,"")}/${path.replace(/^\//,"")}`;

}