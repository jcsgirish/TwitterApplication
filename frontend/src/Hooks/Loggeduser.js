import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';

function useLoggeduser() {
  const [loggeduser, setLoggeduser] = useState({});
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/Loggeduser?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setLoggeduser(data);

        })
        .catch((error) => {
          console.error('Error fetching logged user:', error);
        });
    }
  }, [email]);

  return [loggeduser, setLoggeduser];
}

export default useLoggeduser;
