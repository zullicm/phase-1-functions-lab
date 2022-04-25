//total 13 need to pass

//3 of 3 passing 
function distanceFromHqInBlocks(street){
    if(street < 42){
        return 42 - street
    }else if(street > 42){
        return street - 42
    }
}

//3 of 3 passing 
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

//3 of 3 passing
function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264
    }else if(start < end){
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start,end) < 400){
        return 0
    }else if(distanceTravelledInFeet(start,end) < 2000){
        return (distanceTravelledInFeet(start, end) - 400) * 0.02
    }else if(distanceTravelledInFeet(start,end) <= 2500){
        return 25
    }else if(distanceTravelledInFeet(start,end) > 2500){
        return 'cannot travel that far'
    }
}