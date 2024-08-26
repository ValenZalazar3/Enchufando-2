const helloAPI = (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default helloAPI;
