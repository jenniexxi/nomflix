import React, {useState} from 'react';

export const NomflixContext = React.createContext();

const NomflixContextProvider = ({children}) => {

    const [searchInfo, setSearchInfo] = useState(
        {
            movieResults : null,
            tvResults : null,
            searchTerm : ""
        }
    );
    
    const onChangeSearchTerm = (param) => {
        setSearchInfo({...searchInfo, searchTerm : param});
        //...searchInfo  ...으로 searchInfo의 값을 다 가져오고
        // searchTerm 값을 param으로 바꿔준다.
    }

    const onChangeSearchResults = (movieResults, tvResults) => {
        setSearchInfo({...searchInfo, movieResults: movieResults, tvResults: tvResults})
    }

    return(
        <NomflixContext.Provider 
            value={
                {searchInfo, onChangeSearchTerm, onChangeSearchResults}
            }
        >
            {children}
        </NomflixContext.Provider>
    )
}


export default NomflixContextProvider; 




