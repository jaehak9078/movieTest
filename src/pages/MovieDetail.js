import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const FlexBoxStyle = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `;
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

const MovieDetail = (props) => {
    console.log("MovieDetail");
    const id = props.match.params.id;
   

    const [movie1,setMovie1] = useState({
        id: "",
        title: "",
        rating: "",
        summary: "",
        medium_cover_image: "",
    });
 
    useEffect(()=>{
        console.log(id);
        fetch("http://10.100.102.2:8000/api/movie/"+id)
        .then((res)=>res.json())
        .then((res)=>setMovie1(res));
    },[id]);

   function inputHandle(e) {
        //console.log(e.target.value);
        setMovie1({ ...movie1, [e.target.name]: e.target.value });
        console.log(movie1);
      }

      const submit = (e) => {
        e.preventDefault();
        fetch("http://10.100.102.2:8000/api/movie/"+id,{
            method:"put",
            headers:{
                "Content-type" : "application/json; charset=utf-8",
            },
            body: JSON.stringify(movie1),
        })
        .then((res)=>res.text())
        .then((res)=>{
            if(res === 'ok'){
                alert("영화 수정 완료");
                
            }
        });
        console.log(movie1);
      
        
        
    };
    
    
    return (
        <div>
   
        <FlexBoxStyle>
            
            <FormStyle>
                <h1>영화등록</h1>
                <InputStyle type="text" name="medium_cover_image" placeholder="사진" value={movie1.medium_cover_image} onChange={inputHandle}  ></InputStyle>
                    <InputStyle type="text" name="title" placeholder="제목" value={movie1.title} onChange={inputHandle}  ></InputStyle>
                    <InputStyle type="text" name="rating" placeholder="평점" value={movie1.rating} onChange={inputHandle}  ></InputStyle>
                    <InputStyle type="text" name="summary" placeholder="줄거리" value={movie1.summary} onChange={inputHandle}></InputStyle>
 
                    <ButtonStyle onClick={submit}>수정</ButtonStyle>
                </FormStyle>

        </FlexBoxStyle>
        </div>
    );
};

export default MovieDetail;