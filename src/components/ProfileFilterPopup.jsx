import React, { useState } from "react";
import {
  Modal,
  Checkbox,
  Button,
  Switch,
  Text,
  Chip,
  Divider,
} from "@mantine/core";

const ProfileFilterPopup = ({ isOpen, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const profileFilters = [
    "Linkedln Bio",
    "Years of Experience ",
    "Current Expereince",
  ];

  const profileFilters2 = [
    "List of past jobs",
    "Current Job Discription ",
    "Current Job Specializations",
  ];

  const handleCheckboxChange = (value) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const applyFilters = () => {
    // Use the selectedFilters array for filtering your data
    console.log("Selected filters:", selectedFilters);
    onClose();
  };

  return (
    <Modal.Root
      opened={isOpen}
      onClose={onClose}
      size="55%"
      style={{ border: "2px solid green" }}>
      <Modal.Content>
        <Modal.Header
          style={{
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
          }}>
          <Modal.Title style={{ flex: 1, color: "white" }}>
            Personalization Settings
          </Modal.Title>
          <div
            style={{
              flex: 1,
              color: "white",
              display: "flex",
            }}>
            <Text
              fz="sm"
              style={{
                marginRight: "6px",
                marginBottom: "6px",
                marginLeft: "auto",
              }}>
              {" "}
              User Account Research
            </Text>
            <Switch style={{ marginTop: "2px" }} color="green" />
          </div>
        </Modal.Header>
        <Modal.Body style={{ padding: "12px" }}>
          <div style={{ width: "100%", display: "flex" }}>
            {" "}
            <div style={{ width: "50%" }}>
              <Text fw={700} style={{ padding: "4px" }}>
                {" "}
                Profile:
              </Text>
              {profileFilters.map((filter) => (
                <div key={filter} style={{ padding: "4px" }}>
                  <Checkbox
                    label={filter}
                    color="green"
                    checked={true}
                    onChange={() => handleCheckboxChange(filter)}
                  />
                </div>
              ))}
            </div>
            <div style={{ width: "50%", marginTop: "35px" }}>
              {profileFilters2.map((filter, index) => (
                <div key={filter} style={{ padding: "4px", display: "flex" }}>
                  <Checkbox
                    label={filter}
                    color="green"
                    disabled={index != 0}
                    //   checked={false}
                    //   onChange={() => handleCheckboxChange(filter)}
                  />
                  {index != 0 && (
                    <Chip
                      defaultChecked
                      color="red"
                      variant="light"
                      style={{ marginLeft: "3px" }}>
                      Disabled
                    </Chip>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Divider my="sm" />
          <div style={{ width: "100%", display: "flex" }}>
            {" "}
            <div style={{ width: "50%" }}>
              <Text fw={700} style={{ padding: "4px" }}>
                {" "}
                Account:
              </Text>
              {profileFilters.map((filter) => (
                <div key={filter} style={{ padding: "4px" }}>
                  <Checkbox
                    label={filter}
                    color="green"
                    checked={true}
                    onChange={() => handleCheckboxChange(filter)}
                  />
                </div>
              ))}
            </div>
            <div style={{ width: "50%", marginTop: "35px" }}>
              {profileFilters2.map((filter, index) => (
                <div key={filter} style={{ padding: "4px", display: "flex" }}>
                  <Checkbox
                    label={filter}
                    color="green"
                    disabled={index != 0}
                    //   checked={false}
                    //   onChange={() => handleCheckboxChange(filter)}
                  />
                  {index != 0 && (
                    <Chip
                      defaultChecked
                      color="red"
                      variant="light"
                      style={{ marginLeft: "3px" }}>
                      Disabled
                    </Chip>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ProfileFilterPopup;
