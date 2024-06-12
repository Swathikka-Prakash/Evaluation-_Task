import React from "react";

const AssetTable = ({ assets, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Asset Name</th>
          <th>Category</th>
          <th>Asset Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset._id}>
            <td>{asset.asset_name}</td>
            <td>{asset.category}</td>
            <td>{asset.asset_type}</td>
            <td>{asset.status}</td>
            <td>
              <button onClick={() => onEdit(asset)}>Edit</button>
              <button onClick={() => onDelete(asset._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetTable;
