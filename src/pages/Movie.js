import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const FormStyle = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const InputStyle = styled.input`
width:400px;
height: 40px;
margin:10px 0px;
`;
const ButtonStyle = styled.button`
width:100px;
height:60px;
background-color:black;
color:white;

`;

const Movie = () => {
    const [movie,setMovie] = useState({
        title: "",
        rating: "",
        summary: "",
        medium_cover_image: "",
    });

    function changeMovie(e) {
        //console.log(e.target.value);
        setMovie({ ...movie, [e.target.name]: e.target.value });
        console.log(movie);
      }
   
    
    const submit = (e) => {
        e.preventDefault();
   
        console.log(movie);
        fetch("http://10.100.102.2:8000/api/movie",{
            method:"post",
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(movie),
        }).then((res)=>res.text()).then((res)=>{
            if(res ==="ok"){
                alert("영화가 등록되었습니다");
                
            }
        });
    
    };
    
    return (
        <div>

            
            <div>
                <FormStyle>
                <h1>영화등록</h1>
                    <InputStyle type="text" name="title" placeholder="제목" onChange={changeMovie}  ></InputStyle>
                    <InputStyle type="text" name="rating" placeholder="평점" onChange={changeMovie}  ></InputStyle>
                    <InputStyle type="text" name="summary" placeholder="줄거리" onChange={changeMovie}></InputStyle>
                    <InputStyle type="text" name="medium_cover_image" placeholder="사진" onChange={changeMovie} ></InputStyle>
                    <ButtonStyle onClick={submit}>등록</ButtonStyle>
                </FormStyle>
            </div>
            
        </div>
    );
};

export default Movie;