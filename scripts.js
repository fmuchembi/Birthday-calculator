
function theAkanName(){
const gender = document.getElementById("gender").value;
const birthDay = document.getElementById("day").value;
const birthMonth = document.getElementById("month").value;
const birthYear = document.getElementById("year-of-birth").value;

const yearOfBirth = birthYear.toString();
const year = yearOfBirth.slice(2,4);
const birthCentury =yearOfBirth.slice (0,2);
const day = dayOfWeek(birthCentury, year, birthMonth, birthDay);
day.toFixed();

// date of birth validation

function validateBirthdate(birthDay) {
    if (birthDay < 1 || birthDay > 31) {
        alert("date invalid");

    }   
    else {
        birthDay = birthDay;
        return birthDay;
    }

}
// month of birth validation

function validateBirthmonth(birthMonth) {
    if (birthMonth < 1 || birthMonth > 12) {
        alert("month invalid");
    }
    else {
        birthMonth = birthMonth;
        return birthMonth;
    }

}

//year of birth validation

function validateBirthYear(birthYear){
    if (birthYear < 1950 || birthYear >2020){
        alert("year invalid");

    }
    else{
        birthYear=birthYear;
        return birthYear;
    }
}

    alert("Your Akan name is" + akanName(gender, day));  
}


// function to give us the day of the week
function dayOfWeek(birthCentury,year,birthMonth, birthDay){

    return (((birthCentury/4)-2*birthCentury-1) + ((5*year/4)) +((26*(birthMonth+1)/10))+birthDay) % 7;
}


//function to provide us the akan name

function akanName(gender, day) {
    if (gender === 'male') {
        if (day=== 0)
            return 'Kwasi';
        else if (day === 1)
            return 'Kwadwo';
        else if (day === 2)
            return 'Kwabena';
        else if (day === 3)
            return 'Kwaku';
        else if (day === 4)
            return 'Yaw';
        else if (day === 5)
            return 'Kofi';
        else
            return 'Kwame';
    }
    else if (gender === 'female') {
        if (day === 0)
            return 'Akosua';
        else if (day === 1)
            return 'Adwoa';
        else if (day === 2)
            return 'Abenaa';
        else if (day === 3)
            return 'Akua';
        else if (day === 4)
            return 'Yaa';
        else if (day === 5)
            return 'Afua';
        else
            return 'Ama';

    }
   

}
