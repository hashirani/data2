import firend from './product';
// import cameras from './camera';
// import laptops from './laptop';

//const fakeData = [...androids];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(firend);

export default firend;