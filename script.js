$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        anchors: ['welcome', 'menu', 'joggingsection', 'cyclingsection', 'weightsection'],
        sectionsColor: ['#6c757d', '#6c757d', '#6c757d', '#6c757d', '#6c757d'],
        navigation: false,
        navigationPosition: 'right',
        verticalCentered: false,

        // afterLoad: function (origin, destination, direction) {
        //     if (destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 3 || destination.index == 4 || destination.index == 5) { 
        //         contentSwoop.play(); 
        //         contentLeft.play();
        //         contentRight.play();
        //     }
        // }
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

    const leveldisplay1 = document.getElementById("level1");
    const leveldisplay2 = document.getElementById("level2");

    leveldisplay1.style.display = "none";
    leveldisplay2.style.display = "none";
    
});

function gotData1() {

    // var val = 0;
    // $('#input1, #input2, #input3, #input4, #input5, #input6, #input7').each(function () {
    //     val += parseInt(this.innerHTML, 10);
    // });
    // alert(val);

    var a = document.forms["myForm"]["input1"].value;
    var b = document.forms["myForm"]["input2"].value;
    var c = document.forms["myForm"]["input3"].value;
    var d = document.forms["myForm"]["input4"].value;
    var e = document.forms["myForm"]["input5"].value;
    var f = document.forms["myForm"]["input6"].value;
    var g = document.forms["myForm"]["input7"].value;

    var aInt = Number.parseInt(a, 10)
    var bInt = Number.parseInt(b, 10)
    var cInt = Number.parseInt(c, 10)
    var dInt = Number.parseInt(d, 10)
    var eInt = Number.parseInt(e, 10)
    var fInt = Number.parseInt(f, 10)
    var gInt = Number.parseInt(g, 10)

    var total = (aInt + bInt + cInt + dInt + eInt + fInt + gInt)


    if (a == null || a == "" || b == null || b == "" || c == null || c == ""
        || d == null || d == "" || e == null || e == "" || f == null || f == "" || g == null || g == "") {
        alert("Please Fill All Required Field");

    }

    else if (total < 10) {
        alert("Distance Does Not Meet The Minimum Requirement Of 10KM");

    }

    else {

        const targetDiv = document.getElementById("level1");
        targetDiv.style.display = "block";

        var btn1 = document.getElementById("cyclinglock");

        btn1.style.backgroundColor = '#007bff';
        btn1.style.borderColor = '#007bff';
        btn1.style.opacity = 1;
        btn1.disabled = false;

        // document.getElementById("displaydata").innerHTML = input1 + "<br>";

        const labels = [
            'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];

        // Set labels, colours and data
        const data = {

            // var :name = document.getElementById("input1").value,

            labels: labels,
            datasets: [{

                label: 'Number of hours Jogging',
                backgroundColor:
                    'rgb(42.4, 45.9, 49)'

                ,
                borderColor: 'rgb(42.4, 45.9, 49)',
                data: [a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                ],
            }]
        };

        // Configure chart
        const config = {
            type: 'line',
            data: data,

        };

        // Render chart in <canvas>
        const myChart = new Chart(
            document.getElementById('runningchart'),
            config
        );
    }
}

function gotData2() {

    // var val = 0;
    // $('#input1, #input2, #input3, #input4, #input5, #input6, #input7').each(function () {
    //     val += parseInt(this.innerHTML, 10);
    // });
    // alert(val);

    var a = document.forms["cyclingForm"]["cyclinginput1"].value;
    var b = document.forms["cyclingForm"]["cyclinginput2"].value;
    var c = document.forms["cyclingForm"]["cyclinginput3"].value;
    var d = document.forms["cyclingForm"]["cyclinginput4"].value;
    var e = document.forms["cyclingForm"]["cyclinginput5"].value;
    var f = document.forms["cyclingForm"]["cyclinginput6"].value;
    var g = document.forms["cyclingForm"]["cyclinginput7"].value;

    var aInt = Number.parseInt(a, 10)
    var bInt = Number.parseInt(b, 10)
    var cInt = Number.parseInt(c, 10)
    var dInt = Number.parseInt(d, 10)
    var eInt = Number.parseInt(e, 10)
    var fInt = Number.parseInt(f, 10)
    var gInt = Number.parseInt(g, 10)

    var total = (aInt + bInt + cInt + dInt + eInt + fInt + gInt)


    if (a == null || a == "" || b == null || b == "" || c == null || c == ""
        || d == null || d == "" || e == null || e == "" || f == null || f == "" || g == null || g == "") {
        alert("Please Fill All Required Field");

    }

    else if (total < 10) {
        alert("Does Not Meet The Minimum Requirement Of 10KM");

    }

    else {
        const targetDiv = document.getElementById("level2");
        targetDiv.style.display = "block";

        var btn1 = document.getElementById("weightlock");

        btn1.style.backgroundColor = '#007bff';
        btn1.style.borderColor = '#007bff';
        btn1.style.opacity = 1;
        btn1.disabled = false;

        // document.getElementById("displaydata").innerHTML = input1 + "<br>";

        const labels = [
            'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];

        // Set labels, colours and data
        const data = {

            // var :name = document.getElementById("input1").value,

            labels: labels,
            datasets: [{

                label: 'Number of hours Cycling',
                backgroundColor:
                    'rgb(42.4, 45.9, 49)'

                ,
                borderColor: 'rgb(42.4, 45.9, 49)',
                data: [a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                ],
            }]
        };

        // Configure chart
        const config = {
            type: 'line',
            data: data,

        };

        // Render chart in <canvas>
        const myChart = new Chart(
            document.getElementById('cyclingchart'),
            config
        );
    }
}


function gotData3() {

    // var val = 0;
    // $('#input1, #input2, #input3, #input4, #input5, #input6, #input7').each(function () {
    //     val += parseInt(this.innerHTML, 10);
    // });
    // alert(val);

    var a = document.forms["weightform"]["weightinput1"].value;
    var b = document.forms["weightform"]["weightinput2"].value;
    var c = document.forms["weightform"]["weightinput3"].value;
    var d = document.forms["weightform"]["weightinput4"].value;
    var e = document.forms["weightform"]["weightinput5"].value;
    var f = document.forms["weightform"]["weightinput6"].value;
    var g = document.forms["weightform"]["weightinput7"].value;

    var aInt = Number.parseInt(a, 10)
    var bInt = Number.parseInt(b, 10)
    var cInt = Number.parseInt(c, 10)
    var dInt = Number.parseInt(d, 10)
    var eInt = Number.parseInt(e, 10)
    var fInt = Number.parseInt(f, 10)
    var gInt = Number.parseInt(g, 10)

    var total = (aInt + bInt + cInt + dInt + eInt + fInt + gInt)


    if (a == null || a == "" || b == null || b == "" || c == null || c == ""
        || d == null || d == "" || e == null || e == "" || f == null || f == "" || g == null || g == "") {
        alert("Please Fill All Required Field");

    }

    else if (total < 10) {
        alert("Does Not Meet The Minimum Requirement Of 10 Hours");

    }

    else {


        // document.getElementById("displaydata").innerHTML = input1 + "<br>";

        const labels = [
            'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];

        // Set labels, colours and data
        const data = {

            // var :name = document.getElementById("input1").value,

            labels: labels,
            datasets: [{

                label: 'Number of hours Lifting weights',
                backgroundColor:
                    'rgb(42.4, 45.9, 49)'

                ,
                borderColor: 'rgb(42.4, 45.9, 49)',
                data: [a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                ],
            }]
        };

        // Configure chart
        const config = {
            type: 'line',
            data: data,

        };

        // Render chart in <canvas>
        const myChart = new Chart(
            document.getElementById('weightchart'),
            config
        );
    }
}


// JavaScript to get and display form data
function getData() {
    var name = document.getElementById("name").value;
    document.getElementById("display").innerHTML = "Hello " + name + "!";

    var btn1 = document.getElementById("cyclinglock");
    btn1.disabled = true;

    var btn2 = document.getElementById("weightlock");
    btn2.disabled = true;
}




fullpage_api.setAllowScrolling(false);