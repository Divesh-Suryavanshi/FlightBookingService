module.exports = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {},
    err: {},
    message: "welcome to the booking service",
  });
};
