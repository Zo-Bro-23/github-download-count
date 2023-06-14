module.exports = (req, res) => {
  const axios = require("axios");
  let downloads = 0;
  req.query.repo.split(",").forEach((repo) => {
    axios
      .get(`https://api.github.com/repos/${req.query.user}/${repo}/releases`, {
        headers: {
          Authorization: "Bearer ###***###",
        },
      })
      .then((response) => {
        const releases = response.data;
        releases.forEach((release) => {
          for (index in release.assets) {
            downloads += release.assets[index].download_count;
          }
        });
        if (
          req.query.repo.split(",").indexOf(repo) ==
          req.query.repo.split(",").length - 1
        ) {
          res.send(`${downloads}`);
        }
      });
  });
};
