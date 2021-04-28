import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user.uid);
      // console.log(response);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
      // console.log('user', user);
    }
  }, [user]);

  return { user: activeUser };
}