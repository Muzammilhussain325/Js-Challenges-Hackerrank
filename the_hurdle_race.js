
  function hurdleRace(k, height) {
  let hurdle = height[0];
    for (let i = 1; i < height.length; i++) {
        if (height[i] > hurdle) {
            hurdle = height[i];
        }
    }
    if (hurdle > k) {
        return hurdle - k;
    } else {
        return 0;
    }
  }
  console.log(hurdleRace((4),([1,6,5,3,2])));
