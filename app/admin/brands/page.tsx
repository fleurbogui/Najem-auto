'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, X } from 'lucide-react';

interface Brand {
  _id: string;
  name: string;
  country: string;
  description: string;
  logo: string;
  createdAt: string;
}

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    description: '',
    logo: '',
  });

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const res = await fetch('/api/brands');
      const data = await res.json();
      setBrands(data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingId ? `/api/brands?id=${editingId}` : '/api/brands';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', country: '', description: '', logo: '' });
        setEditingId(null);
        setIsModalOpen(false);
        fetchBrands();
      }
    } catch (error) {
      console.error('Error saving brand:', error);
    }
  };

  const handleEdit = (brand: Brand) => {
    setFormData({
      name: brand.name,
      country: brand.country,
      description: brand.description,
      logo: brand.logo,
    });
    setEditingId(brand._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/brands?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchBrands();
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ name: '', country: '', description: '', logo: '' });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Brands
          </h1>
          <p className="text-slate-400 mt-2">Manage car brands</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-magenta text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Brand
        </button>
      </div>

      {/* Brands Table */}
      {loading ? (
        <div className="bg-slate-800 rounded-xl p-6 animate-pulse h-96" />
      ) : (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Logo
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Brand
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Country
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr
                    key={brand._id}
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="text-2xl">{brand.logo}</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-100">
                      {brand.name}
                    </td>
                    <td className="px-6 py-4 text-slate-300">{brand.country}</td>
                    <td className="px-6 py-4 text-slate-400 text-sm truncate max-w-xs">
                      {brand.description}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(brand)}
                          className="p-2 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(brand._id)}
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-neon-cyan/30 rounded-xl p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-100">
                {editingId ? 'Edit Brand' : 'Add Brand'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Logo
                </label>
                <input
                  type="text"
                  maxLength={2}
                  value={formData.logo}
                  onChange={(e) =>
                    setFormData({ ...formData, logo: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 text-2xl text-center focus:outline-none focus:border-neon-cyan"
                  placeholder="🏁"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-neon-cyan"
                  placeholder="Ferrari"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-neon-cyan"
                  placeholder="Italy"
                  required
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
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-neon-cyan min-h-24 resize-none"
                  placeholder="Brand description..."
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
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
