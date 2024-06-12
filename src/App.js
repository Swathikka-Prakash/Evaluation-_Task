import React, { useState, useEffect } from "react";
import axios from "axios";
import AssetForm from "./AssetForm";
import AssetTable from "./AssetTable";
import "./App.css";

const App = () => {
  const [assets, setAssets] = useState([]);
  const [editAsset, setEditAsset] = useState(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/asset/list");
      setAssets(response.data.data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  const createAsset = async (asset) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/asset/create",
        asset
      );
      setAssets([...assets, response.data]);
    } catch (error) {
      console.error("Error creating asset:", error);
    }
  };

  const updateAsset = async (asset) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/asset/update/${asset._id}`,
        asset
      );
      setAssets(assets.map((a) => (a._id === asset._id ? response.data : a)));
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  };

  const deleteAsset = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/asset/delete/${id}`
      );
      console.log("Delete response:", response);
      console.log("response.data.status:", response.data.status);
      if (response.data.status === 200) {
        setAssets((prevAssets) =>
          prevAssets.filter((asset) => asset._id !== id)
        );
        console.log("Assets after deletion:", assets);
      }
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };

  const handleSave = (asset) => {
    if (editAsset) {
      updateAsset(asset);
    } else {
      createAsset(asset);
    }
  };

  return (
    <div className="container">
      <h1>Asset Management</h1>
      <AssetForm
        asset={editAsset}
        onSave={handleSave}
        setEditAsset={setEditAsset}
      />
      <AssetTable
        assets={assets}
        onEdit={setEditAsset}
        onDelete={deleteAsset}
      />
    </div>
  );
};

export default App;
