import { useContext, createContext } from "react";

export const aniContext = createContext({
  animals: [
    {
      id: 1,
      animalName: "hello",
      imgPath: "",
      imgPublicId: "",
    },
  ],
  addAnimal: (animal) => {},
  updateAnimal: (id, animal) => {},
  deleteAnimal: (id) => {},
});

export const useAnimal = () => {
  return useContext(aniContext);
};

export const AnimalProvider = aniContext.Provider;
