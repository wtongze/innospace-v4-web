import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/v4/auth/status')
      .then((res) => res.json())
      .then(({ status }) => setSignedIn(status === 'OK'));
  }, []);

  return signedIn;
};
