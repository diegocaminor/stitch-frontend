import constants from "app/constants/constants";
const axios_ = require("axios");

function getEarnings() {
  axios_
    .post(constants.apiUrl, {
      query: constants.queries.getEarnings,
    })
    .then((res: any) => {
      console.log("--------------------- Earnings --------------------------");
      console.log(res.data);
      console.log(res.data.data.streamers[0].earnings);
      const tolalEarnings =
        parseInt(res.data.data.streamers[0].earnings) / 1000000000000000000;
      console.log("tolalEarnings");
      console.log(res.data.data);

      console.log(tolalEarnings);
      return tolalEarnings;
    })
    .catch((error: any) => {
      console.error(error);
    });

  return 0;
}

export default getEarnings;
