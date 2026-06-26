import { type User as UserShared } from "../../../../../shared/types/user";

export interface GetUserInput { id: UserShared["id"] };

export interface DeleteUserInput { id: UserShared["id"] };

export interface CreateUserInput {
    id: UserShared["id"],
    firstName: UserShared["firstName"],
    lastName: UserShared["lastName"],
    name: UserShared["lastName"],
    role: UserShared["role"]
};

export interface UpdateUserInput {
    id: UserShared["id"],
    firstName: UserShared["firstName"],
    lastName: UserShared["lastName"],
    name: UserShared["lastName"]
};

export type User = UserShared;
