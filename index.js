const axios = require("axios");
const date = new Date();
const y = date.getFullYear();
const m = `0${date.getMonth() + 1}`.substr(-2);
const d = `0${date.getDate()}`.substr(-2);

axios.post(`https://api.github.com/repos/${process.env.REPO}/issues`, {
  title: `${y} ${m} ${d}`,
  body: `${date.toLocaleTimeString()}`
}, {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
}).then(({ data }) => console.log(data));
