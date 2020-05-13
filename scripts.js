
function grab_data() {
    const gender = document.getElementsByName("gender");
    var year_of_birth = document.getElementById("year-of-birth").value
    const month_of_birth = document.getElementById("month-of-birth").value
    const day_of_birth = document.getElementById("day_of_birth").value

    // date of birth validation

    function validateBirthdate(day_of_birth) {
        if (day_of_birth < 1 || day_of_birth > 31) {
            alert("date invalid");

        }
        else {
            day_of_birth = day_of_birth;
            return day_of_birth;
        }

    }
    // month of birth validation

    function validateBirthmonth(month_of_birth) {
        if (month_of_birth < 1 || month_of_birth > 12) {
            alert("month invalid");
        }
        else {
            month_of_birth = month_of_birth;
            return month_of_birth;
        }

    }

    //year of birth validation

    function validateBirthYear(year_of_birth) {
        if (year_of_birth < 1950 || year_of_birth > 2020) {
            alert("year invalid");

        }
        else {
            year_of_birth = year_of_birth;
            return year_of_birth;
        }
    }

    var foundGenger;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            foundGenger = gender[i].value
        }
    }

    year_of_birth = year_of_birth.toString();
    var birthCentury = year_of_birth.slice(0, 2);
    var year = year_of_birth.slice(2, 4);
    year = parseInt(year);
    birthCentury = parseInt(birthCentury);

    const day = dayOfWeek(birthCentury, year, month_of_birth, day_of_birth);
    const name = akanName(foundGenger, Math.round(day));
    alert("Your Akan name is " + name);

}

let dayOfWeek = function (birthCentury, year, month_of_birth, day_of_birth) {
    return (((birthCentury / 4) - 2 * birthCentury - 1) + ((5 * year / 4)) + ((26 * (month_of_birth + 1) / 10)) + day_of_birth) % 7;

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
