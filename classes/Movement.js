import { Tile } from "./Tiles"

const legalHorizontalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement)*(startingX - targetX + movement) == 0 && startingY == targetY
}

const legalVerticalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingY - targetY - movement)*(startingY - targetY + movement) == 0 && startingX == targetX
}

const legalDiagonalMovement = (startingTile, targetTile, movement) => {
    let startingX = startingTile.getCoordinates().x
    let targetX = targetTile.getCoordinates().x
    let startingY = startingTile.getCoordinates().y
    let targetY = targetTile.getCoordinates().y
    return (startingX - targetX - movement)*(startingX - targetX + movement) == 0 && (startingY - targetY - movement)*(startingY - targetY + movement) == 0
}

export { legalHorizontalMovement, legalVerticalMovement , legalDiagonalMovement}