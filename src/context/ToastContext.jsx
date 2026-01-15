import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = ({ message, type = "success", duration = 2500 }) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast toast={toast} />}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

/* ---------- Toast UI ---------- */

function Toast({ toast }) {
    const styles = {
    success: "border border-white/20 text-white",
    error: "border border-white/20 text-white",
    info: "border border-white/20 text-white/90",
    };


  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
        <div
        className={`bg-green-900/80 backdrop-blur
        px-5 py-3 rounded-xl shadow-lg
        ${styles[toast.type]}`}
        >
        {toast.message}
        </div>

    </div>
  );
}
