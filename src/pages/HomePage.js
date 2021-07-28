import './HomePage.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import QuickShortcutSidebar from '../components/QuickShortcutSidebar/QuickShortcutSidebar';
import MainSidebar from '../components/MainSidebar/MainSidebar';
import MainBody from '../components/MainBody/MainBody';

const HomePage = ({auth, user}) => {

const firestore = firebase.firestore();
const usersRef = firestore.collection('users');

const [users] = useCollectionData(usersRef, {idField: 'uid'});

    

    //save to userlist DB
    if (users.some(el => items)){
        
    }

    // if (users){
    //     const {uid, photoURL,displayName, email} = auth.currentUser;
    //     usersRef.add({uid,photoURL,displayName, email})
    //     //get all data and prevent duplicates
    // }


    return (
            <div className='main-app'>
                <div className='quick-shortcut-sidebar'>
                    <QuickShortcutSidebar />
                </div>
                <div className='main-sidebar'>
                    <MainSidebar user={user} />
                </div>
                <div className='main-body'>
                    <MainBody auth={auth}/>
                </div>
            </div>
    )
}

export default HomePage;