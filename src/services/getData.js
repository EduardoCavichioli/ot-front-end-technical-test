const getJsonDataFromApi = (url) => {
  let didTimeout = false;
  const timeoutValue = 5000; // 5 seconds

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      didTimeout = true;
      reject(new Error('Fetch timed out'));
    }, timeoutValue);

    fetch(url)
      .then((response) => {
        clearTimeout(timeout);
        if (!didTimeout) {
          resolve(response.json());
        }
      })
      .catch((error) => {
        if (didTimeout) return;
        reject(error);
      });
  });
}

export {
  getJsonDataFromApi,
};
