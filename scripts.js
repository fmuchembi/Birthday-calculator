const gender = document.getElementsByClassName('gender')
const birthDay = document.getElementsByClassName('birth_day')
const birthMonth = document.getElementsByClassName('birth_month')
const birthYear = document.getElementsByClassName('birth_year')
const birthCentury = birth_year[]
const year = birth_year[]
const day = dayOfWeek(birthCentury, birthYear, birthMonth, birthDay);

function validateBirthdate(birthDay) {
    if (birthDay < 1 || birthDay > 31) {
        return null;
    }
    else {
        birthDay = birthDay;
        return birthDay;
    }

}
function validateBirthmonth(birthMonth) {
    if (birthMonth < 1 || birthMonth > 12) {
        return null;
    }
    else {
        birthMonth = birthMonth;
        return birthMonth;
    }

}

function dayOfWeek(birthCentury,birthYear,birthMonth, birthDay){

    return (((birthCentury/4)-2*birthCentury-1) + ((5*birthYear/4)) +((26*(birthMonth+1)/10))+birthDay) % 7;
};

//alert(day);

function gender_akan(gender,day) {
    const day = result()//Check on how to call functions with arguments inside another function
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