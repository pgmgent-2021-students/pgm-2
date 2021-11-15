(()=>{
    //? THROW
    // console.log('Try something');
    // throw 'Something went wrong'; // Browser kan interpreteren dat dit fout liep, dit geeft je geen gedetailleerde stacktrace.
    // console.log('Continue doing whatever you were doing'); // Zal niet meer worden uitgevoerd

    //? ERROR OBJECT
    // console.log('Try something');
    // throw new Error('Something went wrong'); // Browser kan interpreteren dat dit fout liep, geeft extra informatie én stacktrace! Geeft ook info over de file, line-en columnnummer
    // console.log('Continue doing whatever you were doing'); // Zal niet meer worden uitgevoerd

    // //? TRY CATCH WITH ERROR, INSPECT ERROR OBJECT
    // try {
    //     console.log('Try something');
    //     throw new Error('Something went wrong'); // Browser kan interpreteren dat dit fout liep, geeft extra informatie en stacktrace. In catch krijgen we info over de name (type fout), en de (custom) message én zelf de stack..
    // } catch (error) {
    //     console.log('Error Name', error.name);
    //     console.log('Error Message', error.message);
    //     console.log('Error Stack', error.stack); // Niet standaard, sommige browsers
    // }

    //? TRY CATCH
    // function getMonthNameByNumber(monthNumber) {
    //     monthNumber = monthNumber - 1;
    //     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    //                   'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //     if (months[monthNumber]) {
    //       return months[monthNumber];
    //     } else {
    //       throw new Error('INVALID_MONTH_NUMBER');
    //     }
    // }

    // try {
    //     getMonthNameByNumber(13);
    // } catch (error) {
    //     console.error(error.message);
    // }

})();