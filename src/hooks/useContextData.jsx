import { useContext } from "react";
import { contextData } from "../context/ContextData";

export default function useContextDataApp(){
    return useContext(contextData)
}