


perfectSquare = int => {
    if (Math.sqrt(int) % 1 === 0 ) {
        while(true) {
            int += 1
            if (Math.sqrt(int) % 1 === 0) {
                console.log("this is a the next perfect square: ", int)
                break
            }
        }
    } else {
       console.log("this is not a perfect square: ", -1)
    }
}

perfectSquare(15)   // not a perfect square
perfectSquare(28561)    // perfect square
perfectSquare(289)    // perfect square
perfectSquare(3000)   // not a perfect square

