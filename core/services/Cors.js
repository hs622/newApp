module.exports = (req, res, next) => {

  // common headers
  res.setHeader('X-Powered-By', 'newApp');
  res.setHeader('Date', Date.now());
  res.setHeader('Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Accept', 'application/json');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Connection', 'Keep-Alive');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  switch (req.method) {
    case "GET":
      break;

    case "POST":
      break;

    case "PUT":
      break;

    case "DELETE":
      break;
  
    default:
      break;
  }
  next();
};
