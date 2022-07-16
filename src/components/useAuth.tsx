import { useEffect, useState } from 'react';
import { API, BasicUser } from '../api/endpoint';

export const useAuth = (): [BasicUser | undefined, () => Promise<void>] => {
  const [user, setUser] = useState<BasicUser>();

  const updateUser = () =>
    API.getUserBasic()
      .then((val) => setUser(val))
      .catch(() => setUser(undefined));

  useEffect(() => {
    updateUser();
  }, []);

  return [user, updateUser];
};
