import { useState, useEffect } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { supabase } from '../lib/supabase';
import './MemoryGarden.css';

const flowerTypes = [
  { type: 'rose', emoji: '🌹', name: 'Rose' },
  { type: 'tulip', emoji: '🌷', name: 'Tulip' },
  { type: 'sunflower', emoji: '🌻', name: 'Sunflower' },
  { type: 'blossom', emoji: '🌸', name: 'Blossom' },
  { type: 'hibiscus', emoji: '🌺', name: 'Hibiscus' },
  { type: 'daisy', emoji: '🌼', name: 'Daisy' },
];

const colors = [
  { name: 'pink', label: 'Pink', hex: '#FFB6C1' },
  { name: 'red', label: 'Red', hex: '#FF6B6B' },
  { name: 'yellow', label: 'Yellow', hex: '#FFD93D' },
  { name: 'purple', label: 'Purple', hex: '#DDA0DD' },
  { name: 'white', label: 'White', hex: '#FFFFFF' },
  { name: 'orange', label: 'Orange', hex: '#FFB347' },
];

export const MemoryGarden = () => {
  const { showSnackbar, showConfirm } = useNotification();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPlantModal, setShowPlantModal] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [newFlower, setNewFlower] = useState({
    flower_type: 'rose',
    color: 'pink',
    message: '',
  });

  useEffect(() => {
    loadFlowers();
  }, []);

  const loadFlowers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('memory_flowers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFlowers(data || []);
    } catch (error) {
      console.error('Error loading flowers:', error);
      showSnackbar('Failed to load flowers', 'error');
    } finally {
      setLoading(false);
    }
  };

  const plantFlower = async () => {
    if (!newFlower.message.trim()) {
      showSnackbar('Please add a message for your flower', 'warning');
      return;
    }

    const position_x = Math.floor(Math.random() * 80) + 10;
    const position_y = Math.floor(Math.random() * 80) + 10;

    try {
      const { error } = await supabase
        .from('memory_flowers')
        .insert({
          flower_type: newFlower.flower_type,
          color: newFlower.color,
          message: newFlower.message,
          position_x,
          position_y,
        });

      if (error) throw error;

      setShowPlantModal(false);
      setNewFlower({ flower_type: 'rose', color: 'pink', message: '' });
      showSnackbar('Flower planted successfully', 'success');
      loadFlowers();
    } catch (error) {
      console.error('Error planting flower:', error);
      showSnackbar('Failed to plant flower', 'error');
    }
  };

  const deleteFlower = (id) => {
    showConfirm(
      'Remove Flower?',
      'This flower will be removed from your garden. This action cannot be undone.',
      async () => {
        try {
          const { error } = await supabase
            .from('memory_flowers')
            .delete()
            .eq('id', id);

          if (error) throw error;

          setSelectedFlower(null);
          showSnackbar('Flower removed from garden', 'success');
          loadFlowers();
        } catch (error) {
          console.error('Error deleting flower:', error);
          showSnackbar('Failed to remove flower', 'error');
        }
      },
      '🌸'
    );
  };

  const getFlowerEmoji = (type) => {
    return flowerTypes.find((f) => f.type === type)?.emoji || '🌸';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="garden-page">
        <div className="loading">Growing your garden...</div>
      </div>
    );
  }

  return (
    <div className="garden-page">
      <div className="garden-header fade-in">
        <h1>Memory Garden</h1>
        <p>Each flower represents a memory, a feeling, or a moment of love</p>
      </div>

      <div className="garden-container">
        <button
          className="plant-button fade-in"
          onClick={() => setShowPlantModal(true)}
        >
          <span>🌱</span>
          <span>Plant a Flower</span>
        </button>

        <div className="garden-canvas">
          {flowers.length === 0 ? (
            <div className="empty-garden fade-in">
              <p>Your garden is ready for its first flower.</p>
              <p>Plant one to start growing your memories.</p>
            </div>
          ) : (
            flowers.map((flower, index) => (
              <button
                key={flower.id}
                className="flower-item fade-in"
                style={{
                  left: `${flower.position_x}%`,
                  top: `${flower.position_y}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setSelectedFlower(flower)}
                title={flower.message}
              >
                {getFlowerEmoji(flower.flower_type)}
              </button>
            ))
          )}
        </div>

        <div className="garden-stats fade-in">
          <p>
            <span className="stat-icon">🌸</span>
            <span>{flowers.length} flower{flowers.length !== 1 ? 's' : ''} planted</span>
          </p>
        </div>
      </div>

      {showPlantModal && (
        <div className="plant-modal" onClick={() => setShowPlantModal(false)}>
          <div className="plant-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setShowPlantModal(false)}
            >
              ✕
            </button>

            <h2>Plant a Flower</h2>
            <p className="modal-subtitle">
              Choose a flower that represents your memory
            </p>

            <div className="form-section">
              <label>Flower Type</label>
              <div className="flower-selector">
                {flowerTypes.map((flower) => (
                  <button
                    key={flower.type}
                    className={`flower-option ${
                      newFlower.flower_type === flower.type ? 'selected' : ''
                    }`}
                    onClick={() =>
                      setNewFlower({ ...newFlower, flower_type: flower.type })
                    }
                  >
                    <span className="flower-emoji">{flower.emoji}</span>
                    <span className="flower-name">{flower.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Color</label>
              <div className="color-selector">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-option ${
                      newFlower.color === color.name ? 'selected' : ''
                    }`}
                    style={{ background: color.hex }}
                    onClick={() =>
                      setNewFlower({ ...newFlower, color: color.name })
                    }
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Memory or Message</label>
              <textarea
                placeholder="What does this flower represent?..."
                value={newFlower.message}
                onChange={(e) =>
                  setNewFlower({ ...newFlower, message: e.target.value })
                }
                rows={4}
              />
            </div>

            <button className="submit-button" onClick={plantFlower}>
              Plant This Flower
            </button>
          </div>
        </div>
      )}

      {selectedFlower && (
        <div className="flower-detail-modal" onClick={() => setSelectedFlower(null)}>
          <div
            className="flower-detail-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedFlower(null)}
            >
              ✕
            </button>

            <div className="flower-detail-header">
              <div className="flower-detail-emoji">
                {getFlowerEmoji(selectedFlower.flower_type)}
              </div>
              <p className="flower-detail-date">
                Planted on {formatDate(selectedFlower.created_at)}
              </p>
            </div>

            <div className="flower-detail-body">
              <p>{selectedFlower.message}</p>
            </div>

            <button
              className="delete-flower-button"
              onClick={() => deleteFlower(selectedFlower.id)}
            >
              Remove Flower
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
