export const analyticsService={


track(
event:string,
data?:Record<string,unknown>
){

if(
typeof window==="undefined"
)
return;


console.log(
"Analytics:",
event,
data
);

}



};