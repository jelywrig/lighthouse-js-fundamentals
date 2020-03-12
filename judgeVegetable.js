const judgeVegetable = function (vegetables, metric) {
  let result = '';
  let maxScore = 0;
  
  for (let vegetable of vegetables) {
    if(vegetable[metric] > maxScore) {
      result = vegetable.submitter;
      maxScore = vegetable[metric];
    }
  }
  return result;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));