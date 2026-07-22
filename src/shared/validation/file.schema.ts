import { z } from "zod";


export const fileSchema =
z.object({

size:
z.number()
.max(
5 * 1024 * 1024,
"Maximum file size is 5MB"
),


type:
z.string()
.refine(
(value)=>
[
"image/jpeg",
"image/png",
"image/webp"
]
.includes(value),
"Invalid file type"
)

});