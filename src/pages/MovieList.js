import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import MovieItem from '../components/MovieItem';

const MovieList = () => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        fetch("http://10.100.102.2:8000/api/movie")
        .then((res)=>res.json())
        .then((res)=>setMovies(res));
    },[]);
    const deleteById = (movieId) => {
        fetch("http://10.100.102.2:8000/api/movie/"+movieId,{
            method:"delete",
        }).then((res)=>res.text())
        .then((res)=>{
            if(res==="ok"){
                alert("삭제되었습니다");
                getMovie();
            }
        })
    }

    const getMovie = ()=>{
        fetch("http://10.100.102.2:8000/api/movie")
        .then((res)=>res.json())
        .then((res)=>setMovies(res));
    }
    const FlexContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;

    `;
    return (
        <div>
            
            
            <FlexContainer>
            <h1>무비리스트</h1>
                {movies.map((movie)=>(
                    <MovieItem movie={movie} deleteById={deleteById} key={movie.id}/>
                ))}
            </FlexContainer>
        </div>
    );
};

export default MovieList;