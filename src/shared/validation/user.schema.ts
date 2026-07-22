import { z } from "zod";


export const userProfileSchema =
z.object({

firstName:
z.string()
.min(2),


lastName:
z.string()
.min(2),


bio:
z.string()
.max(500)
.optional(),


age:
z.number()
.min(1)
.max(120)
.optional()

});