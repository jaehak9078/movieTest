import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


const HeadMenuStyle = styled.div`
        background-color:skyblue;
        width:50%;
        height: 120px;
        color:white;
        font-size:60px;
        display:flex;
        justify-content:center;
        align-items:center;
        border:1px solid black;
    `;
    const HeadStyle = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:30px;
        
    `;
    const LinkStyle = {
        textDecoration:'none',
        color:'white'
    };
const Header = () => {
    
    
    return (
        <HeadStyle>
            <HeadMenuStyle><NavLink to="/list" style={LinkStyle} >영화목록</NavLink></HeadMenuStyle>
            <HeadMenuStyle><NavLink to="/" style={LinkStyle}>영화등록</NavLink></HeadMenuStyle>
        </HeadStyle>
    );
};

export default Header;