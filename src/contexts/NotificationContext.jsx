import { createContext, useContext, useState } from 'react';
import { Snackbar, ConfirmDialog } from '../components/Snackbar';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '', type: 'info' });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null,
    icon: '⚠️',
  });

  const showSnackbar = (message, type = 'info') => {
    setSnackbar({ isOpen: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, isOpen: false });
  };

  const showConfirm = (title, message, onConfirm, icon = '⚠️') => {
    return new Promise((resolve) => {
      setConfirmDialog({
        isOpen: true,
        title,
        message,
        icon,
        onConfirm: () => {
          onConfirm?.();
          setConfirmDialog({ ...confirmDialog, isOpen: false });
          resolve(true);
        },
      });
    });
  };

  const closeConfirm = () => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
  };

  return (
    <NotificationContext.Provider value={{ showSnackbar, showConfirm }}>
      {children}
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        type={snackbar.type}
        onClose={closeSnackbar}
      />
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        icon={confirmDialog.icon}
        onConfirm={confirmDialog.onConfirm}
        onCancel={closeConfirm}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};
