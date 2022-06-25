import { useEffect, useState } from 'react';

export interface BasicUser {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<BasicUser>();

  useEffect(() => {
    fetch('http://localhost:4000/v4/user/basic', { credentials: 'include' })
      .then((res) => res.json())
      .then((data: { result?: BasicUser }) => setUser(data.result));
  }, []);

  return user;
};
