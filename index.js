function distanceFromHqInBlocks(start) {
    return Math.abs(42-start);
};

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start)*264;
};

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264;
};

function calculatesFarePrice(start, destination){ 
    const distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled <= 400) {
        return 0;
    } else if (distanceTraveled > 400 && distanceTraveled <= 2000) {
        return (distanceTraveled - 400)*0.02;
    } else if (distanceTraveled > 2000 && distanceTraveled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};