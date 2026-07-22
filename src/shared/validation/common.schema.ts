import { z } from "zod";


export const requiredString = (
 message = "This field is required"
) =>
z
.string()
.min(1, message);



export const emailSchema =
z
.string()
.email("Invalid email address");



export const passwordSchema =
z
.string()
.min(
8,
"Password must be at least 8 characters"
)
.regex(
/[A-Z]/,
"Must contain one uppercase letter"
)
.regex(
/[0-9]/,
"Must contain one number"
);



export const phoneSchema =
z
.string()
.regex(
 /^[0-9+\-\s()]+$/,
 "Invalid phone number"
);