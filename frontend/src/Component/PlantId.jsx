// src/components/PlantInfo.js
import React, { useState } from 'react';
import axios from 'axios';

const PlantId = () => {
  const [plantData, setPlantData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = 'X3U2GIziV43RSAdwv0IrPZsJ7SOJ8QTyBChG1ZUAd4NREfa2JJ';

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const fetchPlantInfo = async () => {
    setLoading(true);

    try {
      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append('images', selectedImage);

      const response = await axios.post(
        `https://plant.id/api/v3/identification`,
        formData,
        {
            
          headers: {
            'Api-Key' : 'X3U2GIziV43RSAdwv0IrPZsJ7SOJ8QTyBChG1ZUAd4NREfa2JJ',
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setPlantData(response.data);
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Plant Information</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <button onClick={fetchPlantInfo}>Identify Plant</button>
      {loading && <p>Loading...</p>}
      {plantData && (
        <div>
          <h2>Plant Name: {plantData.suggestions[0].plant_name}</h2>
          {/* Display more plant information as needed */}
        </div>
      )}
    </div>
  );
};

export default PlantId;
