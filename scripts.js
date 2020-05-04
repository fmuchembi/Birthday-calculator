
function grab_data() {
    const gender = document.getElementsByName('gender');
    var year_of_birth = document.getElementById("year-of-birth").value
    const month_of_birth = document.getElementById("month-of-birth").value
    const day_of_birth = document.getElementById("day_of_birth").value

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

    function validateBirthYear(birthYear) {
        if (birthYear < 1950 || birthYear > 2020) {
            alert("year invalid");

        }
        else {
            birthYear = birthYear;
            return birthYear;
        }
    }

    var foundGenger;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            foundGenger = gender[i].value
        }
    }

    year_of_birth = year_of_birth.toString()
    var birthCentury = year_of_birth.slice(0, 2)
    birthCentury = parseInt(birthCentury)

    const day = dayOfWeek(birthCentury, year_of_birth, month_of_birth, day_of_birth)
    const name = akanName(foundGenger, Math.round(day))
    alert("Your Akan name is " + name);

}

let dayOfWeek = function (birthCentury, year, birthMonth, birthDay) {
    return (((birthCentury / 4) - 2 * birthCentury - 1) + ((5 * year / 4)) + ((26 * (birthMonth + 1) / 10)) + birthDay) % 7;

}
function akanName(gender, day) {
    if (gender === 'male') {
        if (day === 0)
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
