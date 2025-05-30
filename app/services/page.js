import React from "react";

const page = () => {
  console.log("service page")
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Services</h1>
      <ul>
        <li>2D & 3D Modeling (including Sheet Metal Design)</li>
        <li>Product Modeling (Vessels, Accelerators)</li>
        <li>Hydraulic System Design and Fabrication</li>
        <li>Filament/Material Conversion for Custom Accessories</li>
        <li>Simulation & Motion Analysis</li>
        <li>Client-Centric Material Selection & Consulting</li>
      </ul>
    </div>
  );
};

export default page;
