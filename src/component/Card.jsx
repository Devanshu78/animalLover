import React, { useState } from "react";
import { useAnimal } from "../context/context";

function Card({ animal }) {
  const { updateAnimal, deleteAnimal } = useAnimal();
  const [isAnimalEditable, setIsAnimalEditable] = useState(false);
  const [animalName, setAninmalName] = useState(animal.animalName);

  const editAnimal = () => {
    updateAnimal(animal.id, { ...animal, name: animalName });
    setIsAnimalEditable(false);
  };

  return (
    <div className="h-[360px] bg-[#4D869C] w-[300px] rounded-[15px]">
      <img
        className="h-[250px] w-[300px] p-3 object-cover overflow-hidden"
        src={`${animal?.imgPath}`}
        alt={`${animal.imgPath}`}
      />
      <input
        type="text"
        className="outline-none w-full bg-transparent rounded-lg text-3xl pl-4 h-[50px] font-bold text-white"
        value={animalName}
        onChange={(e) => setAninmalName(e.target.value)}
        readOnly={!isAnimalEditable}
      />
      <div className="flex justify-between m-5 text-white">
        <button
          className="h-[30px] w-[80px] border rounded-lg"
          onClick={() => {
            deleteAnimal(animal.id);
          }}
        >
          Delete
        </button>

        <button
          className="h-[30px] w-[80px] border rounded-lg"
          onClick={() => {
            if (isAnimalEditable) {
              editAnimal();
            } else setIsAnimalEditable((prev) => !prev);
          }}
        >
          {isAnimalEditable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default Card;
