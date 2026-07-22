export const uploadService={


createFormData(
file:File,
field="file"
){

const formData =
new FormData();


formData.append(
field,
file
);


return formData;

},



validateFileSize(
file:File,
maxMB:number
){

const size =
file.size /
(1024*1024);


return size <= maxMB;

},



validateFileType(
file:File,
types:string[]
){

return types.includes(
file.type
);

}


};