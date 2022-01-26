export interface userData {
    limit?: number
    balance?: number
    interest?: number
    blocked_amount?: number
    available_amount?: number
    waiting_total_amount?: number
    future_statements_total?: number
}

export interface DataContext extends userData{
    getUserData: () => Promise<void>;
    
}

export interface UserProvider{
    children: JSX.Element;
}