const logoutButton = document.getElementById('logout-educator');

logoutButton.addEventListener('click', () => {
    console.log('try to logout...');
    firebase.auth().signOut();
    window.location.href = '/src/pages/login/login.html';
});

const allKidsEmotions = {};

let data1 = document.getElementById('data1');
let data2 = document.getElementById('data2');

let joy = document.getElementById('joy');
let anger = document.getElementById('anger');

const getKids = async () => {
    const snapshot = await firebase.firestore().collection('kidEmotions').get()
    
    /* 
        array cu toate documentele din kidEmotions
        array[i].id = id-ul
        array[i].data() = obiectul emotions 
    */
    const res = snapshot.docs.map(doc => doc);

    const elem = res[1];

    joy.innerHTML = 'JoyLikelihood: ' + elem.data().emotion.joyLikelihood;
    anger.innerHTML = 'AngerLikelihood: ' + elem.data().emotion.angerLikelihood;
}

getKids();
