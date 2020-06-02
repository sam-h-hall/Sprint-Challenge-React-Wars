// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

export default function Character ({character}) {

  const [url] = useState([character.url]),
    [abilityName, setAbilityName] = useState([]),
    [height, setHeight] = useState([]),
    [weight, setWeight] = useState([]),
    [experience, setExperience] = useState([]),
    [statName, setStatName] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        setAbilityName(response.data.abilities)
        setHeight(response.data.height)
        setWeight(response.data.weight)
        setExperience(response.data.base_experience)
        setStatName(response.data.stats.map(s => s.stat.name))
      })
      .catch(err => console.log(err.message))
  }, [])

  console.log(abilityName)

  const DIV = styled.div `

    background: whitesmoke;
    color: black;
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 20px;
    box-shadow: 3px 3px;
    border-radius: 5%;

  `;
  const Name = styled.h2 `
    border-bottom: 4px solid red;
  `;
  const Stats = styled.p `
    font-size: 1.15rem;
  `;


  return (
    <DIV>
      <Name>{character.name}</Name>
      <Stats>Height: {height}m</Stats>
      <Stats>Weight: {weight}lbs</Stats>
      {/* <p>Abilities: {abilityName.forEach(ability.name => name)}</p> */}
    </DIV>
  )
}