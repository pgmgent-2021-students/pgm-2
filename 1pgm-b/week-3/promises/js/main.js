const isDadHappy = true;

const willAGetANewSmartphone = new Promise((resolve, reject) => {
    if (isDadHappy) {
        resolve({
            brand: 'Xiamoni',
            color: 'Gradient Blue to Green'
        });
    } else {
        reject(new Error('Dad is not happy!'));
    }
});

const showOff = (phone) => {
    return new Promise((resolve, reject) => {
        const message = `Hey friend. I have e new smartphone: ${phone.brand} - ${phone.color}`;
        resolve(message);
    });
}

// Chaining Promises
willAGetANewSmartphone
    .then((phone) => {
        return showOff(phone);
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.error(`Rejected: ${error}`);
    })
    .finally(() => {
        console.log('Always!');
    });


