import React, { useState, useEffect } from "react";
import AddAnimal from "../component/AddAnimal";
import Card from "../component/Card";
import { AnimalProvider } from "../context/context";

function Home() {
  const [animals, setAnimals] = useState([]);

  /* Operation */
  const addAnimal = (animal) => {
    setAnimals((prev) => [{ id: Date.now(), ...animal }, ...prev]);
  };

  const updateAnimal = (id, animal) => {
    setAnimals((prev) =>
      prev.map((prevAnimal) => (prevAnimal.id === id ? animal : prevAnimal))
    );
  };

  const deleteAnimal = (id) => {
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  };

  /*  Local Storage */
  useEffect(() => {
    const animals = JSON.parse(localStorage.getItem("AnimalCard"));
    if (animals && animals.length > 0) {
      setAnimals(animals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("AnimalCard", JSON.stringify(animals));
  }, [animals]);

  return (
    <AnimalProvider value={{ animals, addAnimal, updateAnimal, deleteAnimal }}>
      <div className="flex flex-col items-center gap-20">
        <AddAnimal />
        <div className="flex gap-20">
          {animals.map((animal) => (
            <div key={animal.id}>
              <Card animal={animal} />
            </div>
          ))}
        </div>
      </div>
    </AnimalProvider>
  );
}

export default Home;
