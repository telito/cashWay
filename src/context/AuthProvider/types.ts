export interface IUser{
    uid?: string;
    account?: string;
    token?: string;
    success?: boolean;
    is_valid?: boolean;
    
}

export interface IContext extends IUser{
    authenticate: (account: string, password: string, holder: number) => Promise<void>;
    logout: () => void;
    isLogged: () => Promise<void>;
}




export interface IAuthProvider{
    children: JSX.Element;
}