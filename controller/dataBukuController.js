import db from "../database/connection.js";

export const dataBuku = async (req, res) => {
  try {
    const [dataBuku] = await db.query("SELECT * FROM data_buku");

    if (dataBuku.length >= 0) {
        return res.status(200).json({
        statusCode: 200,
        status: "success",
        error: false,
        message: "Get Data Buku",
        dataBuku,
      });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error server",
    });
  }
};
