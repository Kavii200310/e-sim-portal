import { useState, useEffect } from 'react';

export function useEligibilityCheck() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  // Simulate an API call
  useEffect(() => {
    const timer = setTimeout(() => {
      // Toggle this boolean to 'false' to test the Red Screen!
      const isSuccess = true; 

      if (isSuccess) {
        setResult({
          status: 'eligible',
          title: 'You are eligible!',
          message: 'Congratulations! You can now proceed to the next step to select your new number.'
        });
      } else {
        setResult({
          status: 'ineligible',
          title: 'You are not eligible at this time.',
          message: 'Reason: Your National ID is already associated with the maximum number of connections.'
        });
      }
      setLoading(false);
    }, 1500); // 1.5 second loading delay

    return () => clearTimeout(timer);
  }, []);

  return { loading, result };
}