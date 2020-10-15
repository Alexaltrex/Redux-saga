import {CharactersDataType, CharacterType} from "../types/types";
import {GetActionsType} from "./store";

export const GET_CHARACTERS = 'GET_CHARACTERS';


const initialState = {
    characters: null as null | Array<CharacterType>,
    isLoading: false,
    lanError: false,
    currentPage: 1
};

const appReducer = (state = initialState, action: appActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_CHARACTERS': {
            return {
                ...state,
                characters: action.charactersData.results,
            }
        }
        case 'SET_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        case 'SET_LAN_ERROR': {
            return {...state, lanError: action.lanError}
        }
        default:
            return state;
    }

};

export const appAC = {
    setCharacters: (charactersData: CharactersDataType) => ({type: 'SET_CHARACTERS', charactersData} as const),
    setLoading: (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const),
    setLanError: (lanError: boolean) => ({type: 'SET_LAN_ERROR', lanError} as const)
};

export const getCharacters = (currentPage: number) => ({type: GET_CHARACTERS, currentPage});


export default appReducer;

//================== TYPE ==========================
export type InitialStateType = typeof initialState;
type appActionsType = GetActionsType<typeof appAC>