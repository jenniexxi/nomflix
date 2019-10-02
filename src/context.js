import React, { useState } from 'react';

// 다른 곳에서 꺼내 쓸 수 있도록 아래처럼
// NomflixContext 는 default로 뺀게 아니어서 아래와 같이 써줌
// import {NomflixContext} from 'context'
export const NomflixContext = React.createContext();

const NomflixContextProvider = ({children}) => {
    
    // 초기값 ""
    // const [searchTerm, setSearchTerm] = useState("");

    // const [results, setResults] = useState({movieResults: null, tvResults: null});

    const [searchInfo, setSearchInfo] = useState({
        movieResults: null,
        tvResults: null,
        searchTerm: ""
    })

    const changeSearchTerm = (value) => {
        setSearchInfo({...searchInfo, searchTerm: value});
    }

    const changeResults = (movieResults, tvResults) => {
        setSearchInfo({...searchInfo, movieResults: movieResults, tvResults: tvResults});
    }

    return(
        <NomflixContext.Provider 
            value={{ searchInfo, changeSearchTerm,
                changeResults }}
        >
            {children}
        </NomflixContext.Provider>
    )
}

export default NomflixContextProvider;


