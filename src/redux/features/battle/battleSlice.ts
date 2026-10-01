import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BattleRecord = {
    heroName: string;
    opponentName: string;
    winner: string;
    date: string;
}

type BattleHistoryState = {
    battles: BattleRecord[];
}

const initialState: BattleHistoryState = {
    battles: [],
}

export const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        addBattleRecord: (state, action: PayloadAction<BattleRecord>) => {
            state.battles.push(action.payload);
        }
    }
})

export const { addBattleRecord } = battleSlice.actions

export default battleSlice.reducer;