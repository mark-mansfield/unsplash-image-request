import { useFormQuery } from './utils/hooks/useFormQuery';
import { useState, useEffect } from 'react';
import { AppContext } from './utils/context';
import { Form, GridLayout, Toast } from './components';
import './style.scss';

export default function App() {
  const { handleLoading, handleSubmit, isLoading, query, api } = useFormQuery();
  const [showToast, setShowToast] = useState(false);
  const [customInterval, setCustomInterval] = useState<ReturnType<typeof setInterval> | undefined>(undefined);

  const handleShowToast = () => {
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setInterval(() => {
        setShowToast(false);
      }, 3000);
      setCustomInterval(timer);
    }

    if (!showToast) {
      clearInterval(customInterval);
    }
  }, [showToast]);



  return (
    <div className="main">
      <AppContext.Provider value={{ showFn: handleShowToast }}>
        {showToast ? <Toast /> : null}
        <Form handleSubmit={handleSubmit} isLoading={isLoading} selected={api} />
        {query.length > 0 && <GridLayout query={query} handleLoading={handleLoading} api={api} />}
      </AppContext.Provider>
    </div>
  );
}
