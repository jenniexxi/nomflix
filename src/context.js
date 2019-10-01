import React, { useState } from 'react';

// 다른 곳에서 꺼내 쓸 수 있도록 아래처럼
// NomflixContext 는 default로 뺀게 아니어서 아래와 같이 써줌
// import {NomflixContext} from 'context'
export const NomflixContext = React.createContext();

const NomflixContextProvider = ({children}) => {
    
    // 초기값 ""
    const [searchTerm, setSearchTerm] = useState("");

    const [movieResults, setMovieResults] = useState(null);

    const [tvResults, setTvResults] = useState(null);

    const changeSearchTerm = (value) => {
        setSearchTerm(value);
    }

    const changeMovieResults = (value) => {
        setMovieResults(value);
    }

    const changeTvResults = (value) => {
        setTvResults(value);
    }

    return(
        <NomflixContext.Provider 
            value={{ searchTerm, movieResults, tvResults, changeSearchTerm,
                changeMovieResults, changeTvResults }}
        >
            {children}
        </NomflixContext.Provider>
    )
}

export default NomflixContextProvider;


