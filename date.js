const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const dayjs = require("dayjs");
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Seoul");

console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
