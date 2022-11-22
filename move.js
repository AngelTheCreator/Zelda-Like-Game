function move(image){
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}