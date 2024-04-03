/* eslint-disable no-unused-vars */
/* import { useRef, useState } from "react";
import logoImg from "./assets/logo.png";
import Modal from "./components/Modal.jsx";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  const places = AVAILABLE_PLACES;
  const modalRef = useRef();

  const [selectedPlaces, setSelectedPlaces] = useState([]);

  function openModal() {
    modalRef.current.open();
  }

  return (
    <>
      <Modal title={"Deleting..."} ref={modalRef} />
      <header>
        <img src={logoImg} alt="Stylized Globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="Selected Places"
          places={selectedPlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={openModal}
        />
        <Places
          title="Available Places"
          places={places}
          fallbackText="Sorting places by distance..."
          onSelectPlace={openModal}
        />
      </main>
    </>
  );
}

export default App;
*/

import { useState } from "react";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";

function App() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  function handlePlaceSelect(placeId) {
    setSelectedPlaces((prevPlaces) => {
      return [...prevPlaces];
    });
  }

  return (
    <>
      <header>
        <img />
        <h1>Place Picker</h1>
        <p>Create your places to visit.</p>
      </header>
      <main>
        <Places
          title="Available Places"
          fallbackText="Loading"
          places={AVAILABLE_PLACES}
        />
      </main>
    </>
  );
}

export default App;
