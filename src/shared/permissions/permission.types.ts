export type Role =
  | "ADMIN"
  | "USER"
  | "SELLER"
  | "INSTRUCTOR";


export type Permission =
  | "USER_CREATE"
  | "USER_READ"
  | "USER_UPDATE"
  | "USER_DELETE"

  | "PRODUCT_CREATE"
  | "PRODUCT_READ"
  | "PRODUCT_UPDATE"
  | "PRODUCT_DELETE"

  | "ORDER_READ"
  | "ORDER_UPDATE"

  | "COURSE_CREATE"
  | "COURSE_UPDATE"
  | "COURSE_DELETE";