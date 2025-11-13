import db from "../database/connection.js";

export const dataUser = async (req, res) => {
  try {
    const role = "user"
    const [dataUser] = await db.query("SELECT * FROM users WHERE role = ?",[role])

    if (dataUser.length >= 0) {
        return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data User",
        dataUser,
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};
