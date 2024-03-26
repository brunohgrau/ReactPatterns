import React, { useState } from "react";

const Preferences = ({ newProdInfo, prodUpdateInfo, onUpdateInfo }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={newProdInfo}
          onChange={onUpdateInfo.bind(null, "pref-new")}
        />
        <span>New Products</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="pref-updates"
          checked={prodUpdateInfo}
          onChange={onUpdateInfo.bind(null, "pref-updates")}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
};

export default Preferences;
