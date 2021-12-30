// Change getSleepHours per day and idealHours per night to 
// cater this for your weekly sleep debt calculator!




const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 8
      case 'tuesday':
        return 8;
      case 'wednesday':
        return 7.5;
      case 'thursday':
        return 8.5;
      case 'friday':
        return 9;
      case 'saturday':
        return 7;
      case 'sunday':
        return 8;
      default:
        return 'Please enter valid day of the week!'
    };
  };
  
  // console.log(getSleepHours('wednesday'));
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
    idealHours = 8
      return idealHours * 7
  };
  
  // console.log(getIdealSleepHours())
  // console.log(getActualSleepHours())
  
  const calculateSleepDebt = () => {
    const  actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week!`);
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needeed this week. Go to sleep   earlier!`);
    };  
  };
  
  calculateSleepDebt()
  
  
  
  
  
  
  
  
  
  
  
  
  
  