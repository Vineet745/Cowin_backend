import Centermodel from "../models/Centermodel.js";

export const addcenter = async (req, res) => {
  try {
    const { title, address, pincode, state, city, slots,dates,timing  } = req.body; 
     const addcenter = await new Centermodel({
      title,
      address,
      pincode,
      state,
      city,
      slots,
      dates,
      timing
    }).save()
    res.status(200).send({
      status: true,
      message: "Center Add successfully",
      addcenter,
    });
  } catch (error) {
    res.status(404).send({
      message: "Center not added",
      status: false,
      error,
    });
    console.log(error);
  }
};
