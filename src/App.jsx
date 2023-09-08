import React, { useState } from "react";
import ProfileFilterPopup from "./components/ProfileFilterPopup";
import { Button } from "@mantine/core";
import "./App.css";

function App() {
  const [isProfileFilterOpen, setProfileFilterOpen] = useState(false);

  const openProfileFilter = () => {
    setProfileFilterOpen(true);
  };

  const closeProfileFilter = () => {
    setProfileFilterOpen(false);
  };

  return (
    <div>
      <div className="card">
        <Button onClick={openProfileFilter} color="green">
          Click to Personalize
        </Button>
        <ProfileFilterPopup
          isOpen={isProfileFilterOpen}
          onClose={closeProfileFilter}
        />
      </div>
    </div>
  );
}

export default App;
