

    function addition (a,b){
        return a + b;
    }

    function substraction (a,b){
        return a - b;
    }

    function multiplication (a, b) {
        return a * b;
    }

    function divsion (a, b) {
        return a / b;
    }


    function calculator (operation , firstdigit, secondigit) {
        if (typeof firstdigit !== 'number' || typeof secondigit !== 'number' ){
            return "ERROR: Both arguments must be numbers";
        }

        if (operation === "addition"){
        return addition (firstdigit, secondigit);
    }

     if (operation === "substraction"){
        return substraction (firstdigit, secondigit);

    } if (operation === "multiplication"){
        return multiplication (firstdigit, secondigit);

    } if (operation === "division"){
        return divsion (firstdigit, secondigit);

    } 
    else {
        return "ERROR"
    }
    }

    console.log(calculator("addition", 5,5));
    console.log(calculator("substraction", 5,5));
    console.log(calculator("multiplication", 5,5));
    console.log(calculator("division", 5,5));


