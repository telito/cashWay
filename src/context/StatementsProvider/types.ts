export interface Statements {
    group_by_date?: string
    statements?: string
    total_debits?:  number
    total_credits?: number
  }

export interface SContext extends Statements{
    getStatementsSeven: () => Promise<void>;
    getStatementsfifteen: () => Promise<void>;
    getStatementsLastMonth: () => Promise<void>;
    getStatementsThisMonth: () => Promise<void>;
    
}

export interface StatementProvider{
    children: JSX.Element;
}