import {Api} from '../../services/api'
import { getUserLocalStorage } from '../AuthProvider/util';

const user = getUserLocalStorage();

export async function RequestStatementSevenDays(){
    try{
        if(!user){
            document.location.reload()
        }
        const request = await Api.get(`statements/last_seven_days_total_credits_and_debits`, {
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

export async function RequestStatementFifteenDays(){
    try{
        if(!user){
            document.location.reload()
        }
        
        const request = await Api.get(`statements/last_fifteen_days_total_credits_and_debits`, {
            headers: {
                'uid': `${user.uid}`,
                'client': `${user.account}`,
                'access-token': `${user.token}`,
            }
            
        });
        console.log(request)
        return request.data;
    } catch(error){
        console.log('user: error',error);
        return 'error';
    }
}

export async function RequestStatementPeriod(){
    try{
        if(!user){
            document.location.reload()
        }

        const request = await Api.get(`statements?period=current_month`, {
            headers: {
                'uid': `${user.uid}`,
                'client': `${user.account}`,
                'access-token': `${user.token}`,
                'Accept': 'application/json'
            }
            
        });

        console.log(request.data)
        return request.data;
    } catch(error){
        console.log('period: ',error);
        return 'error';
    }
}

export async function RequestStatementLastPeriod(){
    try{
        if(!user){
            document.location.reload()
        }

        const request = await Api.get(`statements?period=last_month`, {
            headers: {
                'uid': `${user.uid}`,
                'client': `${user.account}`,
                'access-token': `${user.token}`,
                'Accept': 'application/json'
            }
            
        });

        console.log(request.data)
        return request.data;
    } catch(error){
        console.log('period: ',error);
        return 'error';
    }
}