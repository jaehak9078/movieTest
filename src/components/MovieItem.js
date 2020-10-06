import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ItemStyle = styled.div`
        display:flex;
        margin:10px 0px;
        justify-content:center;
        align-items:center;

    `;
    const ImageStyle = styled.img`
        width:300px;
        height: 300px;
        
    `;
    const TitleStyle = styled.div`
        color: silver;
        font-size: 64px;
        font-weight:500;
    `;
    const ButtonStyle = styled.button`
    width:100px;
    height:60px;
    background-color:black;
    color:white;
    
`;
const MovieItem = (props) => {
    const {title,rating,medium_cover_image,summary,id} = props.movie;
    const deleteById = props.deleteById;
    
    
    return (
        <ItemStyle>
            <Link to={`/detail/${id}`} ><ImageStyle src={medium_cover_image}></ImageStyle></Link>
            <Link to={`/detail/${id}`}><TitleStyle>{title}</TitleStyle></Link>
            <ButtonStyle onClick={() => deleteById(id)}>삭제</ButtonStyle>
        </ItemStyle>
    );
};

export default MovieItem;