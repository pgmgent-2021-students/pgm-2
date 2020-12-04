const isDadHappy = true;

const willIGetANewSmartphone = new Promise((resolve, rejected) => {
    if (isDadHappy) {
        resolve({
            brand: 'Xiaomi',
            color: 'Gradient from blue to green'
        });
    } else {
        rejected();
    }
});

const showOff = (phone) => {
    return new Promise((resolve, rejected) => {
        resolve(`Hi my friend. Here is my ${phone.brand} with nice color ${phone.color}!`)
    });
}

willIGetANewSmartphone
    .then((phone) => showOff(phone))
    .then((message) => console.log(message))
    .catch(() => console.error('Rejected'));