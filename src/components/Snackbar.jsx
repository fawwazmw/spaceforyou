import { useState, useEffect } from 'react';

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

  const colors = {
    success: 'bg-emerald-500',
    error: 'bg-rose-500',
    warning: 'bg-amber-500',
    info: 'bg-blue-500',
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-4 ${colors[type]} text-white rounded-lg shadow-2xl transform transition-all duration-300 z-50 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="text-xl font-bold">{icons[type]}</div>
      <div className="font-medium">{message}</div>
    </div>
  );
};

export const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel, icon = '⚠️' }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fade-in"
      onClick={onCancel}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl text-center mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-[#2c2c2c] text-center mb-3">{title}</h3>
        <p className="text-[#666666] text-center mb-8 leading-relaxed">{message}</p>
        <div className="flex gap-4">
          <button 
            className="flex-1 px-6 py-3 bg-[#e5e5e5] text-[#666666] rounded-lg font-medium hover:bg-[#d0d0d0] transition-all"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
