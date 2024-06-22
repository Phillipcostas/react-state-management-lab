
const Characters = ({ character }) => {
   
    return (
        <>
        <ul>
            <li>
                {character.name}
            </li>
            <li>
                {character.price}
            </li>
            <li>
                {character.strength}
            </li>
            <li>
                {character.agility}
            </li>
            <button onClick={() => handleAddFighter( {name: 'Survivor', price: '12', strength: 6, agility: 4})}>Add Fighter</button>

        </ul>
        
        <ul>
        {zombieFighters.map((Fighter, idx) => (
          <li key={idx}> {Fighter.name} </li>
        ))}
      </ul>

        </>
    
    );
  };
  
  export default Characters;
  


