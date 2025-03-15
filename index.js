function distanceFromHqInBlocks(street) {
    const hq = 42;
return Math.abs( street - hq);
}

function distanceFromHqInFeet(street){
    const blockLength = 264
    return distanceFromHqInBlocks(street)*blockLength;
}

function distanceTravelledInFeet (start, destination) {
    const blockLength = 264
return Math.abs(destination-start)*blockLength;
}

function calculatesFarePrice (start,destination){
const distance= distanceTravelledInFeet(start, destination)
if (distance <=400){
    return 0;
}
 else if (distance>400 && distance<=2000){
    return ( distance-400)*0.02;
}
  else if (distance>2000 &&  distance < 2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }
    
}
console.log( distanceFromHqInBlocks(43,44))
console.log( distanceFromHqInBlocks(43,48))
console.log(distanceFromHqInBlocks(50,58))
console.log(distanceFromHqInBlocks(50,60))
console.log(distanceFromHqInBlocks(34,32))
console.log(distanceFromHqInBlocks(34,28))
console.log(distanceFromHqInBlocks(34,24))
