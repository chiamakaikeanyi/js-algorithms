function mean(list, start, stop){
  let sum = 0;
  let counter = start;

  while(counter <= stop){
    sum += list[counter];
    counter++;
  }

  // calculate the mean of terms between start and stop
  return(sum/(stop-start+1));
}

mean([1,2,3,4,5,6,7], 0, 6)
