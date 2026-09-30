import type { Hero } from "@/types/hero";
import { createContext, useContext } from "react";

type SquadContextType = {
    squad: Hero[]
    addToSquad: (hero: Hero) => void
    removeFromSquad: (id: number) => void
};

const SquadContext = createContext<SquadContextType>(null!);

export const useSquadContext = () => useContext(SquadContext);

export default SquadContext