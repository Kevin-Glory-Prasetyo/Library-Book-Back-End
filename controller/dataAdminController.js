import db from "../database/connection.js";

export const dataAdmin = async (req, res) => {
  try {
    const role = "admin"
    const [dataAdmin] = await db.query("SELECT * FROM users WHERE role = ?",[role])

    if (dataAdmin.length >= 0) {
        return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data Admin",
        dataAdmin,
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};
