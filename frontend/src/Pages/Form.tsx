import React, { useState, useEffect } from 'react';
import './Form.css';

type FormState = {
  userid: string;
  foods: {
    type: string;
    quantity: string;
    quality: string;
  }[];
  district: string;
  division: string;
};

const initialFormState: FormState = {
  userid: '',
  foods: [
    { type: 'rice', quantity: '', quality: '' },
    { type: 'wheat', quantity: '', quality: '' },
    { type: 'maize', quantity: '', quality: '' },
    { type: 'potato', quantity: '', quality: '' },
  ],
  district: '',
  division: '',
};

const divisionsAndDistricts = {
  Dhaka: ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', ],
  Chittagong: ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla'],
};

function App() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    setForm({ ...form, userid: storedUserId || '' });
  }, []);

  useEffect(() => {
    if (form.division) {
      setDistricts(divisionsAndDistricts[form.division]);
    } else {
      setDistricts([]);
    }
  }, [form.division]);

  const handleFoodChange = (index: number, field: string, value: string) => {
    const newFoods = [...form.foods];
    newFoods[index][field] = value;
    setForm({ ...form, foods: newFoods });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Data For Foods <h6>({form.userid})</h6></h1>

        <label>
          Division:
          <select name="division" value={form.division} onChange={(e) => setForm({ ...form, division: e.target.value })}>
            <option value="">Select...</option>
            {Object.keys(divisionsAndDistricts).map(division => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>
        </label>
        <label>
          District:
          <select name="district" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })}>
            <option value="">Select...</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </label>
        {form.foods.map((food, index) => (
  <div key={index} className="food-item">
    <label>
      {food.type.charAt(0).toUpperCase() + food.type.slice(1)}:
      <input type="text" value={food.quantity} onChange={(e) => handleFoodChange(index, 'quantity', e.target.value)} />
    </label>
    <label>
      Quality:
      <select value={food.quality} onChange={(e) => handleFoodChange(index, 'quality', e.target.value)}>
        <option value="">Select...</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Bad">Bad</option>
      </select>
    </label>
  </div>
))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
