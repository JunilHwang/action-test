const axios = require("axios");

const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const dayjs = require("dayjs");

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Seoul");

axios.post(`https://api.github.com/repos/${process.env.REPO}/issues`, {
  title: dayjs().format("YYYY MM DD"),
  body: dayjs().format("YYYY-MM-DD HH:mm:ss")
}, {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
}).then(({ data }) => console.log(data));
