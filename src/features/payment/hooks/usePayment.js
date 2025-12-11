// src/features/payment/hooks/usePayment.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePayment() {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const processPayment = () => {
    setIsProcessing(true);
    
    // Simulate API delay (2 seconds)
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to success page (Task for later)
      navigate('/payment-success');
    }, 2000);
  };

  return { isProcessing, processPayment };
}