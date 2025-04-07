function status(){
  let rotation = 'horizontal';
  let arr  = ['carrier','battleship','cruiser','submarine','destroyer'];
  let curShip = arr[0];
  return {curShip,rotation,arr};
}
export {status}