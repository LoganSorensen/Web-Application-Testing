import React from 'react';
import { addStrike, addBall, addFoul, addHit } from '../utils/addScore';

const Dashboard = props => {
    return (
        <div>
            <button onClick={() => props.setStrikes(addStrike(props.strikes))}>Strike</button>
            <button onClick={() => props.setBalls(addBall(props.balls))}>Ball</button>
            <button onClick={() => props.setStrikes(addFoul(props.strikes))}>Foul</button>
            <button onClick={() => {
                props.setStrikes(0)
                props.setBalls(0)
                }}>Hit</button>
        </div>
    )
}

export default Dashboard;