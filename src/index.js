
exports.min = function min (array) {
  if(array == undefined || array.length == 0){
    return 0
  }
  var minim = array[0]
    for(var i = 0; i < array.length; i++){
      if((array[i]) < minim){
        minim = array[i]
      }
    }
    return minim
}


exports.max = function max (array) {
  if(array == undefined || array.length == 0){
    return 0
  }
  var maxim = array[0]
  for(var i = 0; i < array.length; i++){
      if(array[i] > maxim){

          maxim = array[i]

      }
  }
  return maxim
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0){
      return 0
  }
  var summ = 0
  for(var i = 0; i < array.length; i++){
    summ = (summ + array[i])
  }
  return summ / array.length
}
