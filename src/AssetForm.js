import React, { useState, useEffect } from "react";
import axios from "axios";

const AssetForm = ({ asset, onSave, setEditAsset }) => {
  const [formData, setFormData] = useState({
    asset_name: "",
    category: "",
    asset_type: "",
    status: "",
  });

  useEffect(() => {
    if (asset) {
      setFormData(asset);
    }
  }, [asset]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      asset_name: "",
      category: "",
      asset_type: "",
      status: "",
    });
    setEditAsset(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="asset_name"
        placeholder="Asset Name"
        value={formData.asset_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="asset_type"
        placeholder="Asset Type"
        value={formData.asset_type}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
        required
      />
      <button type="submit">{asset ? "Update" : "Create"}</button>
    </form>
  );
};

export default AssetForm;
