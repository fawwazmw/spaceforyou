import { useState, useEffect } from 'react';
import { useNotification } from '../contexts/NotificationContext';
import './Journal.css';

export const Journal = () => {
  const { showSnackbar, showConfirm } = useNotification();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    setLoading(true);
    const saved = localStorage.getItem('journal_entries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
    setLoading(false);
  };

  const saveToStorage = (updatedEntries) => {
    localStorage.setItem('journal_entries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
  };

  const saveEntry = () => {
    if (!currentEntry.content.trim()) {
      showSnackbar('Please write something before saving', 'warning');
      return;
    }

    if (editingId) {
      const updatedEntries = entries.map((entry) =>
        entry.id === editingId
          ? {
              ...entry,
              title: currentEntry.title,
              content: currentEntry.content,
              updated_at: new Date().toISOString(),
            }
          : entry
      );
      saveToStorage(updatedEntries);
      resetForm();
      showSnackbar('Entry updated successfully', 'success');
    } else {
      const newEntry = {
        id: Date.now().toString(),
        title: currentEntry.title,
        content: currentEntry.content,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      const updatedEntries = [newEntry, ...entries];
      saveToStorage(updatedEntries);
      resetForm();
      showSnackbar('Entry saved successfully', 'success');
    }
  };

  const deleteEntry = (id) => {
    showConfirm(
      'Delete Entry?',
      'This entry will be permanently deleted. This action cannot be undone.',
      () => {
        const updatedEntries = entries.filter((entry) => entry.id !== id);
        saveToStorage(updatedEntries);
        setSelectedEntry(null);
        showSnackbar('Entry deleted', 'success');
      },
      '🗑️'
    );
  };

  const startEdit = (entry) => {
    setCurrentEntry({ title: entry.title, content: entry.content });
    setEditingId(entry.id);
    setIsWriting(true);
    setSelectedEntry(null);
  };

  const resetForm = () => {
    setCurrentEntry({ title: '', content: '' });
    setEditingId(null);
    setIsWriting(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="journal-page">
        <div className="loading">Loading your journal...</div>
      </div>
    );
  }

  return (
    <div className="journal-page">
      <div className="journal-header fade-in">
        <h1>Her Space</h1>
        <p>Your private journal for thoughts, memories, and healing</p>
      </div>

      <div className="journal-container">
        {!isWriting && (
          <>
            <button className="new-entry-button fade-in" onClick={() => setIsWriting(true)}>
              <span>✍️</span>
              <span>Write New Entry</span>
            </button>

            <div className="entries-list">
              {entries.length === 0 ? (
                <div className="empty-state fade-in">
                  <p>Your journal is waiting for your first entry.</p>
                  <p>Take your time, write when you're ready.</p>
                </div>
              ) : (
                entries.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="entry-preview fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <h3>{entry.title || 'Untitled'}</h3>
                    <p className="entry-date">{formatDate(entry.created_at)}</p>
                    <p className="entry-snippet">
                      {entry.content.substring(0, 150)}
                      {entry.content.length > 150 ? '...' : ''}
                    </p>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {isWriting && (
          <div className="entry-editor fade-in">
            <div className="editor-header">
              <h2>{editingId ? 'Edit Entry' : 'New Entry'}</h2>
              <button className="cancel-button" onClick={resetForm}>
                Cancel
              </button>
            </div>

            <input
              type="text"
              placeholder="Title (optional)"
              value={currentEntry.title}
              onChange={(e) =>
                setCurrentEntry({ ...currentEntry, title: e.target.value })
              }
              className="entry-title-input"
            />

            <textarea
              placeholder="Write your thoughts here..."
              value={currentEntry.content}
              onChange={(e) =>
                setCurrentEntry({ ...currentEntry, content: e.target.value })
              }
              className="entry-content-input"
              rows={15}
            />

            <button className="save-button" onClick={saveEntry}>
              {editingId ? 'Update Entry' : 'Save Entry'}
            </button>
          </div>
        )}
      </div>

      {selectedEntry && (
        <div className="entry-modal" onClick={() => setSelectedEntry(null)}>
          <div className="entry-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedEntry(null)}>
              ✕
            </button>

            <div className="entry-modal-header">
              <h2>{selectedEntry.title || 'Untitled'}</h2>
              <p className="entry-modal-date">{formatDate(selectedEntry.created_at)}</p>
            </div>

            <div className="entry-modal-body">
              <p>{selectedEntry.content}</p>
            </div>

            <div className="entry-modal-actions">
              <button className="edit-button" onClick={() => startEdit(selectedEntry)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteEntry(selectedEntry.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
