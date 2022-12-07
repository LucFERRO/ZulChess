import { Tile } from "./Tiles"

const legalHorizontalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement) * (startingX - targetX + movement) <= 0 && (startingX != targetX) && startingY == targetY 
}

const legalVerticalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingY - targetY - movement) * (startingY - targetY + movement) <= 0 && (startingY != targetY) && startingX == targetX
}

const legalDiagonalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement) * (startingX - targetX + movement) <= 0 
    && (startingY - targetY - movement) * (startingY - targetY + movement) <= 0
    && (startingX - targetX - movement) * (startingX - targetX + movement) == (startingY - targetY - movement) * (startingY - targetY + movement)
    && startingTile != targetTile
}

const knightMovement = (startingTile, targetTile) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y

    let horiMovement = startingX - targetX
    let vertiMovement = startingY - targetY

    // return (horiMovement - 1)*(vertiMovement - 2) == 0 || (horiMovement + 1)*(vertiMovement - 2) == 0 || (horiMovement - 1)*(vertiMovement + 2) == 0 || (horiMovement + 1)*(vertiMovement + 2) == 0 

    // return (horiMovement == 1 && vertiMovement == 2) || (horiMovement == -1 && vertiMovement == 2) 
    // || (horiMovement == 1 && vertiMovement == -2) || (horiMovement == -1 && vertiMovement == -2) || (horiMovement == 2 && vertiMovement == 1) || (horiMovement == 2 && vertiMovement == -1) || (horiMovement == -2 && vertiMovement == 1) || (horiMovement == -2 && vertiMovement == -1)

    return ((horiMovement - 1)*(horiMovement + 1) == 0 && (vertiMovement - 2)*(vertiMovement + 2) == 0 ) || (horiMovement - 2)*(horiMovement + 2) == 0 && (vertiMovement - 1)*(vertiMovement + 1) == 0 
}

const pawnMovement = (startingTile, targetTile) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    let team = startingTile.getPiece().getTeam()
    let delta = team ? 1 : -1

    return (targetY == startingY + delta) && (targetX == startingX) || (team && startingTile.getCoordinates().y == 1 || !team && startingTile.getCoordinates().y == 6) && (targetY == startingY + 2*delta) && (targetX == startingX) 
    // && !targetTile.getPiece()
}

const handleHorizontalCollision = () => {
    
}

const handleVerticalCollision = () => {

}

const handleDiagonalCollision = (startingTile, tilesArray) => {
    let upLeft = 7
    let upRight = 7
    let downLeft = 7
    let downRight = 7

    let startingX = startingTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y

    for (let i=1 ; i<8 ; i++) {
        
    }

    console.log(startingTile, tilesArray)
}

export { legalHorizontalMovement, legalVerticalMovement, legalDiagonalMovement, knightMovement, pawnMovement, handleHorizontalCollision, handleVerticalCollision, handleDiagonalCollision }