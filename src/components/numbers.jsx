import React from 'react';

const Numbers = () => {
    const [ numbers, setNumbers ] = React.useState(['one', 'two', 'three']);

    const [ letters, setLetters ] = React.useState(['a', 'b', 'c']);

    const addNumber = () => {
        setNumbers([...numbers, 'f'])
    }

    const addLetters = () => {
        setLetters([...letters, 'f'])
    }

    React.useEffect( () => {
        console.log('use efects')
    }, [numbers, letters] )

    return (
        <div>
        <h1>Numbers</h1>
            { numbers.map( num => {
                return <h1> {num} </h1>
            })}
            <button onClick={addNumber} > Add a number </button>

{ letters.map( lett => {
                return <h1> {lett} </h1>
            })}

            <button onClick={addLetters} > Add a l </button>

        </div>

        )
}

export default Numbers;