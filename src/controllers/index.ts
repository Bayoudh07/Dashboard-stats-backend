import { Request, Response } from "express";

import { mockData } from "../../config/mock-data-firebase";

export async function getBrandbyId(req: Request, res: Response) {
  const id_firebase = req.header("id_firebase");
  if (!id_firebase) {
    return res.status(400).json({
      success: false,
      message: "bad Request",
      data: "",
    });
  }
  try {
    mockData.map((data: any) => {
      if (data.brands[id_firebase]) {
        return res.status(200).json({
          success: true,
          message: "Data Found it!",
          data: {
            sales: data.brands[id_firebase].amount,
            salesNumber: data.brands[id_firebase].score,
            influencers: data.brands[id_firebase].influencers,
            commission: data.brands[id_firebase].commission,
            influencersCommission:
              data.brands[id_firebase].influencersCommission,
            soldProductsNumber: data.brands[id_firebase].soldProductsNumber,
            pic: data.brands[id_firebase].pic,
            displayName: data.brands[id_firebase].displayName,
          },
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "No Data Found it!",
          data: "",
        });
      }
    });
  } catch (err: any) {
    return res
      .status(500)
      .json({ success: false, message: err.message, data: "" });
  }
}
