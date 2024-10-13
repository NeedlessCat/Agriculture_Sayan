import jwt from "jsonwebtoken";

//API for admin Login...
const loginAdmin = async (req, res) => {
  try {
    const { gmail, password } = req.body;
    if (
      gmail === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(gmail + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginAdmin };
