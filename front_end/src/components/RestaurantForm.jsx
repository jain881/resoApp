
import React, { useState } from 'react';
import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CButton,
} from '@coreui/react';

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cuisineType: '',
    description: '',
    openingHours: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server or perform other actions
  };

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="name">Restaurant Name</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="address">Address</CFormLabel>
        <CFormInput
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="cuisineType">Cuisine Type</CFormLabel>
        <CFormSelect
          id="cuisineType"
          name="cuisineType"
          value={formData.cuisineType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select cuisine type</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="description">Description</CFormLabel>
        <CFormTextarea
          id="description"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="openingHours">Opening Hours</CFormLabel>
        <CFormInput
          type="text"
          id="openingHours"
          name="openingHours"
          value={formData.openingHours}
          onChange={handleInputChange}
          placeholder="e.g., Mon-Fri: 9AM-10PM, Sat-Sun: 10AM-11PM"
        />
      </div>
      <CButton type="submit" color="primary">
        Submit
      </CButton>
    </CForm>
  );
};

export default RestaurantForm;
