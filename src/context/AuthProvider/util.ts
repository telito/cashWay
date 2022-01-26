import {Api} from '../../services/api'
import {IUser} from './types'

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u')

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null;
}

export async function LoginRequest(account: string, password: string, holder: number){
    try{
        const request = await Api.post('auth/sign_in', {account,password,holder});
        return request;
    } catch(error){

        return null;
    }
}

export async function tokenRequest(uid: string, token: string, account: string){
    try{
        const request = await Api.get(`auth/validate_token?uid=${uid}&client=${account}&access-token=${token}`);
        return request;
    } catch(error){

        return null;
    }
}