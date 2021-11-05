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

const articleContainer = document.querySelector('.statistics-container');

const getKids = async () => {
    const snapshot = await firebase.firestore().collection('kidEmotions').get();

    const res = snapshot.docs.map((doc) => doc);
    res.forEach((element) => {
        articleContainer.insertAdjacentHTML(
            'beforeend',
            `<article>
        <img src="/src/img/img1.jpg" alt="" />
        <div id="data1">
            <div id="joy">${element.data().emotion.joyLikelihood}</div>
            <div id="anger">${element.data().emotion.angerLikelihood}</div>
        </div>
      </article>`
        );
    });
};

getKids();
