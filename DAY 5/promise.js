const myPromise = new Promise((resolve, reject) => {
  const success = true; // try changing to false
  setTimeout(() => {
    if (success) resolve("Promise Resolved Successfully!");
    else reject("❌ Promise Rejected!");
  }, 1000);
});

myPromise
  .then(result => console.log("THEN →", result))
  .catch(error => console.error("CATCH →", error))
  .finally(() => console.log("FINALLY → Promise Done!"));