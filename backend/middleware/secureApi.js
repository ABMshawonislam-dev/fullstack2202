let secureApi = (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization == "samindonisia") {
    next();
  } else {
    res.send({ error: "Need valid permission" });
  }
};

module.exports = secureApi;
