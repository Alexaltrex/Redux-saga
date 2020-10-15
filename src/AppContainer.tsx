import {StateType} from "./store/store";
import {connect} from "react-redux";
import {appAC, getCharacters} from "./store/app-reducer";
import {CharacterType} from "./types/types";
import App from "./App";

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    characters: state.app.characters,
    isLoading: state.app.isLoading,
    lanError: state.app.lanError
});


const setLanError = appAC.setLanError;
const AppContainer = connect<MapStatePropsType, MapDispatchPropsType,
    OwnPropsType, StateType>(
        mapStateToProps, {getCharacters, setLanError}
        )(App);

export default AppContainer;

//============= TYPE ===============
type MapStatePropsType = {
    characters: Array<CharacterType> | null
    isLoading: boolean
    lanError: boolean
}
type MapDispatchPropsType = {
    getCharacters: (currentPage: number) => void
    setLanError: (lanError: boolean) => void
}
type OwnPropsType = {}
export type AppPropsType = MapStatePropsType & MapDispatchPropsType;