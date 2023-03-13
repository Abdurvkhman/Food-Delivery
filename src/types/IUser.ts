export interface IUser {
    token:string,
    id:string,
    role:string
}

export type userState = {
    user:IUser;
    isLoading:boolean;
    isAuth:boolean;
}