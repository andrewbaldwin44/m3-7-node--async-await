// Exercise 3
// ----------

const doublesLater = async (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(num * 2)}, 2000);
  });
};

const handleSum = async num => {
  const a = await doublesLater(num);
  const b = await doublesLater(a);
  const c = await doublesLater(b);

  return a + b + c;
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
