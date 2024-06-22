import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeamArray = [...team, fighter];
      setTeam(newTeamArray);
      setMoney(prevMoney => prevMoney - fighter.price);
      setStrength(strength + fighter.strength)
      setAgility(agility + fighter.agility)
    } else {
      alert('Not enough money to purchase this fighter!');
    }
  };
  const handleRemoveFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeamArray = [...team, fighter];
      setTeam(newTeamArray);
      setMoney(prevMoney => prevMoney + fighter.price);
      setStrength(strength - fighter.strength)
      setAgility(agility - fighter.agility)
    } else {
      alert('Not enough money to purchase this fighter!');
    }
  };
  const handleTeam = () => {
    if (team.length === 0) {
      alert('Pick some team members!');
    } else {
      console.log('Team has members:', team);
    }
  };

  const Characters = ({ character }) => (
    <ul>
      <li>Name: {character.name}</li>
      <li>Price: {character.price}</li>
      <li>Strength: {character.strength}</li>
      <li>Agility: {character.agility}</li>
      <li><img src={character.img} alt={character.name} /></li>
    </ul>
  );

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Stength: {strength}</h2>
      <h2>Agility: {agility}</h2>

      {team.length === 0 && <p>Pick some team members!</p>}

      <h3>All Characters</h3>
      <ul>
        {zombieFighters.map((fighter, idx) => (
          <li key={idx}>
            <Characters character={fighter} />
            <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove Fighter</button>
          </li>
        ))}
      </ul>

      <h3>Team</h3>
      <ul>
        {team.map((member, idx) => (
          <li key={idx}>
            <Characters character={member} />
          </li>
        ))}
      </ul>

      <button onClick={handleTeam}>Check Team</button>
    </>
  );
};

export default App;
