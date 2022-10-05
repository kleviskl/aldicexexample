import path from "path";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.files.file as UploadedFile;
    // console.log(
    //   "dir name ------> ",
    //   path.join(path.dirname("/src/"), "/files/")
    // );
    // console.log(__dirname);

    // await file.mv(path.join(path.dirname("/src/"), "/files/") + file.name);

    // return res.status(200).json({ message: "File Uploaded", code: 200 });

    file.mv(path.join(__dirname, "images/") + file.name, (err) => {
      if (err) {
        console.log("Error is: ", err);
        return res
          .status(500)
          .json({ message: "Fild e upload failed", code: 200 });
      }
      return res.status(200).json({ message: "File Uploaded", code: 200 });
    });
  } catch (error) {
    console.log("Erro is: ", error);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export default uploadFile;
