const smartGarbage = function (trash, bins) {
  for (let bin in bins){
    if (bin === trash) bins[bin] ++;
  }
  return bins;
}