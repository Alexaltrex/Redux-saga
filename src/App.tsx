import React, {useEffect} from 'react';
import {AppPropsType} from "./AppContainer";


const App: React.FC<AppPropsType> = (props: AppPropsType) => {

    const {characters, getCharacters, isLoading,
      lanError, setLanError} = props;

    useEffect(() => {
        getCharacters(1);
    }, []);

    const charactersElements = characters &&
        characters.map(character => <div>
            <div>{character.name}</div>
            <img src={character.url} alt=""/>
        </div>);

    const onClick = (): void => {
        getCharacters(1);
    };

    const onLanErrorClick = (): void => {
      setLanError(false)
    }

    if (lanError) return (
        <div>
          <button onClick={onLanErrorClick}>ok</button>
          Some lan error
        </div>)

    return (
        <>
            <div>
                <button onClick={onClick}>load</button>
            </div>
            <div>
                {isLoading || !characters
                    ? <div>...loading</div>
                    : <div>{charactersElements}</div>}
            </div>
        </>
    );
};

export default App;
