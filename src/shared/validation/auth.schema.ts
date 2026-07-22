import { z } from "zod";
import {
emailSchema,
passwordSchema
} from "./common.schema";


export const loginSchema =
z.object({

email: emailSchema,

password: passwordSchema

});



export const registerSchema =
z.object({

name:
z.string()
.min(
3,
"Name must be at least 3 characters"
),


email:
emailSchema,


password:
passwordSchema,


confirmPassword:
passwordSchema


})
.refine(
(data)=>
data.password === data.confirmPassword,
{
message:
"Passwords do not match",
path:[
"confirmPassword"
]
}
);