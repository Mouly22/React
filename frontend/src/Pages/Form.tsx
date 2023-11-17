import React, { useState, useEffect } from 'react';
import './Form.css';

type FormState = {
  food: string;
  district: string;
  area: string;
  quantity : number;
  quality: string;
  division: string;
};

const initialFormState: FormState = {
  food: '',
  district: '',
  area: '',
  quantity: 0,
  quality: '',
  division: '',
};

const divisionsAndDistricts = {
  Dhaka: ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur', 'Tangail'],
  Chittagong: ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati'],
  // Add other divisions and districts here...
};

function App() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (form.division) {
      setDistricts(divisionsAndDistricts[form.division]);
    } else {
      setDistricts([]);
    }
  }, [form.division]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Data For Foods</h1>
        <label>
          Food:
          <select name="food" value={form.food} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Maize">Maize</option>
            <option value="Potato">Potato</option>
          </select>
        </label>
        <label>
          Division:
          <select name="division" value={form.division} onChange={handleChange}>
            <option value="">Select...</option>
            {Object.keys(divisionsAndDistricts).map(division => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>
        </label>
        <label>
          District:
          <select name="district" value={form.district} onChange={handleChange}>
            <option value="">Select...</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </label>
        <label>
          Area:
          <input type="text" name="area" value={form.area} onChange={handleChange} />
        </label>
        <label>
          Quantity :
          <input type="text" name="quantity" value={form.quantity} onChange={handleChange} />
        </label>
        <label>
          Quality:
          <select name="quality" value={form.quality} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
