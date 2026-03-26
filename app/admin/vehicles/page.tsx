'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, X } from 'lucide-react';

interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  year: number;
  mileage: number;
  image: string;
  power: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  fuelType: string;
  description: string;
  features: string[];
  createdAt: string;
}

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    price: 0,
    year: new Date().getFullYear(),
    mileage: 0,
    image: '',
    power: '',
    acceleration: '',
    topSpeed: '',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    description: '',
    features: [] as string[],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [vehiclesRes, brandsRes, categoriesRes] = await Promise.all([
        fetch('/api/vehicles'),
        fetch('/api/brands'),
        fetch('/api/categories'),
      ]);

      const vehiclesData = await vehiclesRes.json();
      const brandsData = await brandsRes.json();
      const categoriesData = await categoriesRes.json();

      setVehicles(vehiclesData);
      setBrands(brandsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingId ? `/api/vehicles?id=${editingId}` : '/api/vehicles';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        resetForm();
        fetchData();
      }
    } catch (error) {
      console.error('Error saving vehicle:', error);
    }
  };

  const handleEdit = (vehicle: Vehicle) => {
    setFormData({
      name: vehicle.name,
      brand: vehicle.brand,
      category: vehicle.category,
      price: vehicle.price,
      year: vehicle.year,
      mileage: vehicle.mileage,
      image: vehicle.image,
      power: vehicle.power,
      acceleration: vehicle.acceleration,
      topSpeed: vehicle.topSpeed,
      transmission: vehicle.transmission,
      fuelType: vehicle.fuelType,
      description: vehicle.description,
      features: vehicle.features || [],
    });
    setEditingId(vehicle._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/vehicles?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchData();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      brand: '',
      category: '',
      price: 0,
      year: new Date().getFullYear(),
      mileage: 0,
      image: '',
      power: '',
      acceleration: '',
      topSpeed: '',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      description: '',
      features: [],
    });
    setEditingId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Vehicles
          </h1>
          <p className="text-slate-400 mt-2">Manage car inventory</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Vehicle
        </button>
      </div>

      {/* Vehicles Table */}
      {loading ? (
        <div className="bg-slate-800 rounded-xl p-6 animate-pulse h-96" />
      ) : (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Brand
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr
                    key={vehicle._id}
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-slate-100">
                      {vehicle.name}
                    </td>
                    <td className="px-6 py-4 text-slate-300">{vehicle.brand}</td>
                    <td className="px-6 py-4 text-slate-300">
                      {vehicle.category}
                    </td>
                    <td className="px-6 py-4 text-slate-300">{vehicle.year}</td>
                    <td className="px-6 py-4 text-neon-cyan font-bold">
                      ${vehicle.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(vehicle)}
                          className="p-2 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(vehicle._id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-neon-cyan/30 rounded-xl p-8 w-full max-w-2xl my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100">
                {editingId ? 'Edit Vehicle' : 'Add Vehicle'}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Brand
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  >
                    <option value="">Select Brand</option>
                    {brands.map((b) => (
                      <option key={b._id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: parseFloat(e.target.value) })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: parseInt(e.target.value) })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mileage (km)
                  </label>
                  <input
                    type="number"
                    value={formData.mileage}
                    onChange={(e) =>
                      setFormData({ ...formData, mileage: parseFloat(e.target.value) })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Power (HP)
                  </label>
                  <input
                    type="text"
                    value={formData.power}
                    onChange={(e) =>
                      setFormData({ ...formData, power: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    placeholder="450 HP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Top Speed
                  </label>
                  <input
                    type="text"
                    value={formData.topSpeed}
                    onChange={(e) =>
                      setFormData({ ...formData, topSpeed: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    placeholder="280 km/h"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Acceleration 0-100
                  </label>
                  <input
                    type="text"
                    value={formData.acceleration}
                    onChange={(e) =>
                      setFormData({ ...formData, acceleration: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                    placeholder="3.5s"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Transmission
                  </label>
                  <select
                    value={formData.transmission}
                    onChange={(e) =>
                      setFormData({ ...formData, transmission: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                  >
                    <option>Automatic</option>
                    <option>Manual</option>
                    <option>CVT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Fuel Type
                  </label>
                  <select
                    value={formData.fuelType}
                    onChange={(e) =>
                      setFormData({ ...formData, fuelType: e.target.value })
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                  >
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 focus:outline-none focus:border-neon-cyan min-h-20 resize-none"
                  placeholder="Vehicle description..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-magenta text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                >
                  {editingId ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
