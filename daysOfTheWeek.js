var readlineSync = require('readline-sync');

const daysOfTheWeekObj = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}

const getDay = (day) => {
  return daysOfTheWeekObj[day];
}

const getDaysOfTheWeek = () => {
  let inputValue = readlineSync.question('\nEnter number values between 1 and 7. (Maximum of three numbers - Integers): ');

let result = "";

if(isNaN(inputValue)){
  console.log('\nInvalid Input. Kindly enter a maximum of three numbers and each number must be integers between 1 and 7.\n');
  getDaysOfTheWeek();
} 
else{
  if(inputValue.length > 3){
    console.log('\nInvalid Input. Kindly enter a maximum of three numbers and each number must be integers between 1 and 7.\n');
    getDaysOfTheWeek();
  }else{
    if(inputValue.length === 1){
      console.log(`\nSelected Day of the week: ${JSON.stringify(getDay(inputValue))} \n`);
      result = getDay(inputValue);
    }else {
      let multipleInputResult = {};

      let inputSummation = inputValue.split('').reduce((a, b) => Number(a) + Number(b), 0);

      if(inputSummation > 21){
        console.log('\nInvalid Input. Each number must be integers between 1 and 7.\n');
        getDaysOfTheWeek();        
      }

      inputValue.split('').forEach(element => {
        let day = getDay(element);
        if(multipleInputResult.hasOwnProperty(day)){
          multipleInputResult[day] += 1;
        }else{
          multipleInputResult[day] = 1;
        }
      });
      console.log(`\nMultiple Input Result: ${JSON.stringify(multipleInputResult)}\n`);
      result = multipleInputResult;
  }
}
}

let validResponse = false;
while(!validResponse){
 const restartApp = readlineSync.keyInYNStrict('Do you want to perform another check? Press Y for Yes and N for No: ');
 if(restartApp){
   getDaysOfTheWeek();
   break;
 }else{
   console.log('\nThank you for using this app. Goodbye!\n');
   process.exit();
   break;
 }
}
return result
};

getDaysOfTheWeek();




