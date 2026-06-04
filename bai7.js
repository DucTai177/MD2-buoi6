export function test() {
  const simulateTask = new Promise((resolve, reject) => {
    let task = true;
    setTimeout(() => {
      if (task) {
        resolve("Task Completed!");
      } else {
        reject("Task Failed!");
      }
    }, 2000);
  });

  simulateTask
    .then((KQ) => {
      console.log(KQ);
    })
    .catch((loi) => {
      console.log(loi);
    });
}
