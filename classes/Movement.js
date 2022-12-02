import { Tile } from "./Tiles"

const legalHorizontalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement) * (startingX - targetX + movement) <= 0 && startingY == targetY
}

const legalVerticalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingY - targetY - movement) * (startingY - targetY + movement) <= 0 && startingX == targetX
}

const legalDiagonalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement) * (startingX - targetX + movement) <= 0 
    && (startingY - targetY - movement) * (startingY - targetY + movement) <= 0
    && (startingX - targetX - movement) * (startingX - targetX + movement) == (startingY - targetY - movement) * (startingY - targetY + movement)
}

const knightMovement = (startingTile, targetTile) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y

    let horiMovement = startingX - targetX
    let vertiMovement = startingY - targetY

    // return (horiMovement == 1 && vertiMovement == 2) || (horiMovement == -1 && vertiMovement == 2) 
    // || (horiMovement == 1 && vertiMovement == -2) || (horiMovement == -1 && vertiMovement == -2) || (horiMovement == 2 && vertiMovement == 1) || (horiMovement == 2 && vertiMovement == -1) || (horiMovement == -2 && vertiMovement == 1) || (horiMovement == -2 && vertiMovement == -1)

    return ((horiMovement - 1)*(horiMovement + 1) == 0 && (vertiMovement - 2)*(vertiMovement + 2) == 0 ) || (horiMovement - 2)*(horiMovement + 2) == 0 && (vertiMovement - 1)*(vertiMovement + 1) == 0 
}

export { legalHorizontalMovement, legalVerticalMovement, legalDiagonalMovement, knightMovement }