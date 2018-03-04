function forLoop(array){
  for(let i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

function whileLoop (n){
  n = Math.floor(Math.random() * 100)
  while (n < 100);
  return "done";
};
