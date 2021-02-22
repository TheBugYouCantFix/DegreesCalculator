function convert(){

    let rbc = document.getElementById("rb1"); //radio button celsius
    let rbf = document.getElementById("rb2"); // radio button farenheit

    let temperature = parseFloat(document.getElementById("t").value); // input field
    let res = 0;
    let ready = true;

    let char1 = NaN;
    let char2 = NaN;

    if (Number.isNaN(temperature)){
        alert("Input the temperature");
        ready = false;
    }

    if (rbc.checked){
        res = (temperature * 9 / 5) + 32;
        char1 = 'C';
        char2 = 'F';
    }

    else if (rbf.checked){
        res = (temperature - 32) * 5 / 9;
        char1 = 'F';
        char2 = 'C';
    }

    else if (ready){
        alert("Select the radio button");
        ready = false;
    }


    if (ready){
        document.getElementById("lbl").innerHTML = `${temperature} °${char1} = ${res.toFixed(1)} °${char2}`;
    }

}
