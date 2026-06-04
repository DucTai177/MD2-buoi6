function simulateTask() {
  return new Promise((resolve, reject) => {
    let task = false;
    setTimeout(() => {
      if (task) {
        resolve("Task Completed!");
      } else {
        reject("Task Failed!");
      }
    }, 2000);
  });
}

simulateTask
  .then((KQ) => {
    console.log(KQ);
  })
  .catch((loi) => {
    console.log(loi);
  });

async function runTask() {
  try {
    const result = await simulateTask;
    console.log("thành công rồi:", result);
  } catch (error) {
    console.log("thất bại rồi:", error);
  }
}

runTask();
