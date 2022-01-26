import {Api} from '../../services/api'
import { getUserLocalStorage } from '../AuthProvider/util';

const user = getUserLocalStorage();

export async function UserDataRequest(){
    try{
        
        const request = await Api.get(`users/balance`, {
            headers: {
                'uid': `${user.uid}`,
                'client': `${user.account}`,
                'access-token': `${user.token}`,
            }
        });

        return request.data;
    } catch(error){
        console.log('user: error',error);
        return 'error';
    }
}