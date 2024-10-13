import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CropResponse = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const formData = state?.formData;

  // Navigate back to the form if formData is missing
  const handleGoBack = () => navigate("/crop-recommendation");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        {formData ? (
          <>
            {/* Form Data Table */}
            <h1 className="text-2xl font-semibold text-center mb-6">
              Form Data Summary
            </h1>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <tbody>
                {Object.entries(formData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border px-4 py-2 font-medium capitalize text-gray-600">
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td className="border px-4 py-2 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Crop Recommendation Section */}
            <div className="mt-8 text-center">
              <h2 className="text-xl font-semibold mb-4">
                Crop Recommendation
              </h2>
              <p className="text-lg">
                <span className="font-medium text-green-600">
                  Recommended Crop:
                </span>{" "}
                <strong>Wheat</strong>
              </p>
              <p className="text-lg mt-2">
                <span className="font-medium text-blue-600">Your Crop:</span>{" "}
                <strong>Rice</strong>
              </p>
            </div>
          </>
        ) : (
          // Error Handling when formData is missing
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-600">
              Oops! No Form Data Found.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Please go back and fill out the crop recommendation form to
              proceed.
            </p>
            <button
              onClick={handleGoBack}
              className="bg-primary mt-6 px-6 py-2 text-white font-medium rounded-full"
            >
              Go Back to Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropResponse;
