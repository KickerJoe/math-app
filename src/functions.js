
/* Base function that will generate a number from -50 to 50 */
export const getRandomValue = () => {
    const polar = Math.round(Math.random());
    
    if(polar === 0){
        return (Math.round(Math.random()*50)); 
    };

    return (-1* Math.round(Math.random()*50));
     
}

/* Uses the above function to generate two random number and store them in an object */
export const createPoint = () => {
    
    const point = {
        x: getRandomValue(),
        y: getRandomValue(),
    }

    return point;
};

/* Creates a line object with two points */
export const createLine = () => {
    
    const line = {
        point1: createPoint(),
        point2: createPoint(),
    } 
    
    line.distance = findDistance(line);
    return line;
};

/*Function that takes a line object and finds the distance between its two endpoints */
export function findDistance (line) {
    const distance = Math.round(Math.sqrt(Math.pow(line.point1.x-line.point2.x,2)+ Math.pow(line.point1.y-line.point2.y,2)))
    return distance
};