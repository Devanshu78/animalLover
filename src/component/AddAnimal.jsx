import React from "react";
import { useState } from "react";
import { useAnimal } from "../context/context";

function AddAnimal() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { addAnimal } = useAnimal();

  /* Uploading Image to cloudinary */
  const add = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "animalImage");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/devanshucloudinary/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const cloudData = await res.json();
      addAnimal({
        animalName: name,
        imgPath: cloudData.url,
        imgPublicId: cloudData.public_id,
      });
    } catch (error) {
      console.log(error);
    }
    setName("");
    setImage("");
  };

  return (
    <form onSubmit={add} method="post">
      <div className="h-[264px] w-[450px] relative bg-[#4D869C] rounded-[30px]">
        <div className="h-12 w-[330px] bg-[#EEF7FF] absolute left-[50%] -translate-x-1/2 top-[40px] rounded-[15px]">
          <input
            className=" pl-5 pt-2"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="absolute top-[130px] left-[50%] -translate-x-1/2 ">
          <input
            type="text"
            placeholder="Name of the animal"
            className="h-10 rounded-[15px] pl-5 w-[330px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id=""
          />
        </div>
        <button
          type="submit"
          className="border h-[50px] absolute bottom-[10px] right-[45px] w-[50px] hover:bg-white rounded-full "
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddAnimal;
