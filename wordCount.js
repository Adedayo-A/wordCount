const stringCount = (arg) => {
   if(typeof(arg) !== 'string'){
    return("Please enter a string")
    } else{
  let newArg = arg.toLowerCase()
  let argSplit = newArg.split(' ')
  const objName = {}
  for (i=0;i<argSplit.length;i++) {
    let key = argSplit[i]
    if(objName[key]){
      objName[key] = objName[key] + 1;
      } else {
      objName[key] = 1
      }
    }
  return JSON.stringify(objName)
  }
}

module.exports = stringCount;