import { useState, useEffect } from 'react';
import './Snackbar.css';

export const Snackbar = ({ message, type = 'info', isOpen, onClose, duration = 3000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isOpen, duration, onClose]);

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  if (!isOpen) return null;

  return (
    <div className={`snackbar ${type} ${show ? 'show' : ''}`}>
      <div className="snackbar-icon">{icons[type]}</div>
      <div className="snackbar-message">{message}</div>
    </div>
  );
};

export const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel, icon = '⚠️' }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-dialog-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-dialog-icon">{icon}</div>
        <h3 className="confirm-dialog-title">{title}</h3>
        <p className="confirm-dialog-message">{message}</p>
        <div className="confirm-dialog-buttons">
          <button className="confirm-dialog-button cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-dialog-button confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
