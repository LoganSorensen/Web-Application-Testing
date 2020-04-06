export const addStrike = currentStrikes => {
    if (currentStrikes === 2) {
        return currentStrikes * 0;
    } else {
        return currentStrikes + 1;
    }
}

export const addBall = currentBalls => {
    if (currentBalls === 3) {
        return currentBalls * 0;
    } else {
        return currentBalls + 1;
    }
}

export const addFoul = currentStrikes => {
    if(currentStrikes <= 1 ) {
        return currentStrikes + 1;
    } else {
        return currentStrikes;
    }
}

export const addHit = () => {
    
}