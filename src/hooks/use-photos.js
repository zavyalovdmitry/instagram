import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getPhotos } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      if (following.length > 0) {
        // console.log('444');
        followedUserPhotos = await getPhotos(userId, following);
        // setPhotos(followedUserPhotos);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    // console.log(photos);
    // if (userId) {
    getTimelinePhotos();
    // }
  }, [userId]);

  return { photos };
}
