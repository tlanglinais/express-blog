/**
 *
 * @param {*} method
 * @param {*} url
 * @param {*} data
 */
const FetchData = async (method, url, data) => {
  let options = {
    method: method,
    credentials: "same-origin",
  };

  if (method === "PUT" || method === "POST") {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  // console.log(options);
  const response = await fetch(url, options);

  const results = await response.json();
  results.status = response.status;
  return results;
};

export default FetchData;
