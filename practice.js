const sumArray = array => array.sort((a,b) => a - b).slice(1,-1).reduce((x,y) => x + y, 0)
