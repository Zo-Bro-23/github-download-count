module.exports = async (req, res) => {
  const axios = require("axios");
  const repo = require("./repo");
  axios
    .get(`https://api.github.com/users/${req.query.user}/repos?per_page=100`, {
      headers: {
        Authorization: "Bearer ###***###",
      },
    })
    .then((response) => {
      let count = 0;
      response.data.forEach((r) => {
        repo(
          {
            query: {
              user: req.query.user,
              repo: r.name,
            },
          },
          {
            send: (number) => {
              count += parseInt(number);
              console.log(response.headers);
              if (response.data.indexOf(r) == response.data.length - 1) {
                res.send(`${count}`);
              }
            },
          }
        );
      });
    });
};
