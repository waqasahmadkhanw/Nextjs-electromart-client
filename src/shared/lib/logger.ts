const isProduction =
process.env.NODE_ENV==="production";


export const logger = {

 info(...args:unknown[]){
   if(!isProduction){
     console.log(
       "[INFO]",
       ...args
     );
   }
 },


 error(...args:unknown[]){
   console.error(
     "[ERROR]",
     ...args
   );
 },


 warn(...args:unknown[]){
   console.warn(
     "[WARN]",
     ...args
   );
 }

};