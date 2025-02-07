const getLocalGreeting = (): string => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours >= 5 && hours < 12) {
      greeting = 'Good morning!';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
    return greeting;
};


module.exports.getLocalGreeting = getLocalGreeting;
