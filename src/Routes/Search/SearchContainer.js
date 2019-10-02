import React,{ useContext } from 'react';
import { NomflixContext } from 'context';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi} from 'api';

export default () => {
    
    // {key1: vale1, {key2: {key3: value3}}}
    // 이게 jasons

    const { searchInfo: {searchTerm, tvResults, movieResults}, changeSearchTerm,
        changeResults } = useContext ( NomflixContext );
    let loading = false;
    let error = null;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm !== "") {
            searchByTerm();
        }
    };

    const updateTerm = (event) => {
        const {
            target: { value }
        } = event;
        changeSearchTerm(value);
    };

    const searchByTerm = async () => {
        loading = true;
        try {
            const { data : {results : movieResults} } = await moviesApi.search(searchTerm)
            const { data : {results : tvResults} } = await tvApi.search(searchTerm)
            changeResults(movieResults, tvResults)
        } catch {
            error = "Can't find results"
        } finally {
            loading = false
        }
    }; 
    
    return(
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            handleSubmit={handleSubmit}
            updateTerm={updateTerm}
        />
    )
}



