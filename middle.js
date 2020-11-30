

const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    if ( array.length === 1 || array.length === 2) {
       return []
    } else if (array.length % 2 !== 0) {
        let oddAarray = array.length / 2
        let valueIndex = Math.floor(oddAarray)
        let value = array[valueIndex]
        return [value]
    } else if (array.length % 2 === 0) {
        let evenArray = (array.length -1) / 2
        let startIndex = Math.floor(evenArray)
        let result = array.splice(startIndex, 2)
        return result;
    }
  } 
}


module.exports = middle;