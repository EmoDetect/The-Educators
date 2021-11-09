const logoutButton = document.getElementById('nav-logout');

logoutButton.addEventListener('click', () => {
    console.log('try to logout...');
    firebase.auth().signOut();
    window.location.href = '/src/pages/login/login.html';
});

const allKidsEmotions = {};

// let data1 = document.getElementById('data1');
// let data2 = document.getElementById('data2');

// let joy = document.getElementById('joy');
// let anger = document.getElementById('anger');

const articleContainer = document.querySelector('.statistics-container');

const getKids = async () => {
    const snapshot = await firebase.firestore().collection('kidEmotions').get();

    const res = snapshot.docs.map((doc) => doc);
    let i = 0;
    res.forEach((element) => {
        if (i < 3) {
            articleContainer.insertAdjacentHTML(
                'beforeend',
                `<article>
            <img src="data:image/png;base64,${element.data().emotions[0].base64Img}" alt="" />
            <div id="data">
                <div id="joy">${element.data().emotions[0].joyLikelihood}</div>
                <div id="anger">${element.data().emotions[0].angerLikelihood}</div>
            </div>
        </article>`
            );
        }
        i++;
    });
};

getKids();
