// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


const C1 = styled.div`
    background-color: rgba(128,128,128,0.5);
    width: 50%;
    margin-left: 25%;
    border: 1px solid black;
    border-radius: 30%;
    margin: 30px auto 30px auto;
`;

const Name = styled.h2`
    font-size: 2em;
    font-style: italic;
    text-decoration: underline;
`;

const Date = styled.h3`
    font-size: 1.3em;
`;

const Misc = styled.h4`
    font-size: 1.1em;
    font-style: italic;

`;
const Character = props => {
    return (
        <div>
                <C1 className="character1">
                    <Name>{props.character.name}</Name>
                    <Date> Birth Year: {props.character.birth_year}</Date>
                    <Misc>Height: {props.character.height}</Misc>
                    <Misc>Hair Color: {props.character.hair_color}</Misc>
                    <Misc>Skin Color: {props.character.skin_color}</Misc>
                </C1>
        </div>
    )


}

export default Character;