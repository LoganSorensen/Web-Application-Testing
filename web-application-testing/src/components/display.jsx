import React, { useState } from 'react';
import Dashboard from './dashboard';

const Display = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return (
       <div>
           <div className='scoreCards'>
                <div className='score'>
                    <h2>Balls</h2>
                    <div>{balls}</div>
                </div>
                <div className='score'>
                    <h2>Strikes</h2>
                    <div>{strikes}</div>
                </div>
            </div>
            <Dashboard
            strikes={strikes}
            setStrikes={setStrikes}
            balls={balls}
            setBalls={setBalls}
            />
       </div> 
    );
}

export default Display;