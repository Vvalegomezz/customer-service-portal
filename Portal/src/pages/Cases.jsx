// Cases.js
import React from "react";
import CaseForm from "../components/CaseForm";
import CaseList from "../components/CaseList";


function Cases() {
  return (
    <div>
      <h1>Case Management</h1>
      <CaseForm />
      <CaseList />
    </div>
  );
};

export default Cases;
