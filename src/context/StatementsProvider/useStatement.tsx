import { useContext } from "react";
import { StatementContext } from ".";

export const useStatement = () => {
    const contextStatement = useContext(StatementContext);

    return contextStatement
}