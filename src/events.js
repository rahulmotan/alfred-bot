const eventHandler = async (req, res) => {
  console.log(req.body);
  const { challenge } = req.body;
  const response = { challenge };

  res.json(response);
};


export default eventHandler;
