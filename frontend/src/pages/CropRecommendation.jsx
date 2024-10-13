import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CropRecommendation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    state: "",
    district: "",
    N: 0,
    P: 0,
    K: 0,
    pH: 0,
    temperature: 0,
    tempUnit: "C",
    rainfall: 0,
    area: 0,
    areaUnit: "Hectares",
    season: "",
    yield: 0,
    production: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/crop-recommendation/response", { state: { formData } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="m-5 w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>
            CROP{" "}
            <span className="text-gray-700 font-medium">
              RECOMMENDATION FORM
            </span>
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white px-8 py-8 mt-5 border rounded shadow-md max-h-[80vh] overflow-y-scroll">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p>State</p>
                <select
                  name="state"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  required
                >
                  <option value="">Select State</option>
                  <option value="State 1">State 1</option>
                  <option value="State 2">State 2</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <p>District</p>
                <input
                  type="text"
                  name="district"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="District"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Nitrogen (N)</p>
                <input
                  type="number"
                  name="N"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="N"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Phosphorus (P)</p>
                <input
                  type="number"
                  name="P"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="P"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Potassium (K)</p>
                <input
                  type="number"
                  name="K"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="K"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>pH</p>
                <input
                  type="number"
                  step="0.01"
                  name="pH"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="pH"
                  required
                />
              </div>
            </div>

            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p>Temperature</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="temperature"
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Temperature"
                    required
                  />
                  <select
                    name="tempUnit"
                    onChange={handleChange}
                    className="border rounded px-2"
                  >
                    <option value="C">Celsius (C)</option>
                    <option value="F">Fahrenheit (F)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p>Rainfall (mm)</p>
                <input
                  type="number"
                  name="rainfall"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="Rainfall"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Area</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="area"
                    onChange={handleChange}
                    className="border rounded px-3 py-2"
                    placeholder="Area"
                    required
                  />
                  <select
                    name="areaUnit"
                    onChange={handleChange}
                    className="border rounded px-2"
                  >
                    <option value="Hectares">Hectares</option>
                    <option value="Acres">Acres</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p>Season</p>
                <input
                  type="text"
                  name="season"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="Season"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Preferred Yield (tons)</p>
                <input
                  type="number"
                  name="yield"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="Yield"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <p>Preferred Production (tons)</p>
                <input
                  type="number"
                  name="production"
                  onChange={handleChange}
                  className="border rounded px-3 py-2"
                  placeholder="Production"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
          >
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default CropRecommendation;
