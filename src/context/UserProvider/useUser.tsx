import { useContext } from "react";
import { UserContext } from ".";

export const useUser = () => {
    const contextUser = useContext(UserContext);

    return contextUser
}