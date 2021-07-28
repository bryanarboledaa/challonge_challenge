import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Login/Login';
import HomePage from './pages/HomePage';
import firebaseConfig from './api/firebaseConfig';
import GameProvider from './context/game-provider.js';
import 'firebase/firestore';

function App() {
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }

  const auth = firebase.auth();

  const [user] = useAuthState(auth);
  

  return (
      <GameProvider>
          {user ? <HomePage auth={auth} user={user}/> : <Login auth={auth} /> }
     </GameProvider>
  )
}

export default App;
