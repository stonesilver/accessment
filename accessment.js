const firstMissingPositive = (arr) => {
    const sortedArray = arr.sort((a, b) => a-b)
    
    let missingInteger = 1
    
    for(i=0; i < sortedArray.length; i++) {
      if(missingInteger < sortedArray[i]) {
        missingInteger = missingInteger
      } else if(missingInteger === sortedArray[i]) {
        missingInteger++
      } else {
        missingInteger = missingInteger
      }
    }
    
    return missingInteger
  }
  
  const removeNthNode = (arr, n) => {
    const newArray = [...arr]

    newArray.splice(n+1, 1)

    return newArray
  }
  
  console.log(firstMissingPositive([1,2,0]))

  console.log('Yes!!!')
  
  console.log(removeNthNode([4,5,3,2,2], 2))
