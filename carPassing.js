const carPassing = function(cars, carSpeed) {
  let result = { time: Date.now(), speed: carSpeed };
  cars.push(result);
  return cars;
}