// import React from "react";
import Footer from "../components/Footer";
import GradeContent from "../components/GradeContent";
import Navbar from "../components/Navbar";

function GradeReport() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg">
          <GradeContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GradeReport;
