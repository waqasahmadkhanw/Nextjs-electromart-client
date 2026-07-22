import {
ROLE_PERMISSIONS
} from "./permissions";

import type {
Role,
Permission
} from "./permission.types";


export const hasPermission = (
role:Role,
permission:Permission
):boolean=>{


return ROLE_PERMISSIONS[
role
]?.includes(
permission
) ?? false;


};



export const hasAnyPermission = (
role:Role,
permissions:Permission[]
):boolean=>{


return permissions.some(
(permission)=>
hasPermission(
role,
permission
)
);


};



export const hasAllPermissions = (
role:Role,
permissions:Permission[]
):boolean=>{


return permissions.every(
(permission)=>
hasPermission(
role,
permission
)
);


};