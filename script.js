
var tscore = 1;
var b = Math.floor((Math.random() * 100) + 1);
console.log(b)  //to display the coreect answer in console

function check() {
    var a = document.getElementById("eno").value;
    console.log(b)
    var d = document.getElementById("rw");
    var e = document.getElementById("pe");
    var f = document.getElementById("border");
    var g = document.getElementById("but")
    var h = document.getElementById("45")
    var i = document.getElementById("refresh")
    if (a === "") {
        alert("Please enter a number between 1 and 100.");
        return false;
    }
    if (a == b) {
        console.log("Right");

        e.innerHTML = "<center>Congratulations!<br>You guessed the number in " + tscore + " attempts</center>";
        d.innerHTML = "<center>Guessing Number is " + b + "</center>";
        d.style.color = "green";
        e.style.color = "green";
        g.textContent = "Right Answer!!";
        g.style.marginLeft = "34%";
        e.style.marginLeft = "3%";
        d.style.backgroundColor = "green";
        d.style.color = "white";
        d.style.borderColor = "black";
        d.style.borderStyle = "solid";
        d.style.borderWidth = "2px";
        d.style.marginLeft = "10%"
        d.style.marginRight = "10%"
        var enoInput = document.getElementById("eno");
        enoInput.parentNode.removeChild(enoInput);

        h.parentNode.removeChild(h);
        document.getElementById("thank").textContent = "THANKYOU"

        i.innerHTML = "<button class='refresh' onclick='return refresh()'>Play Again</button>"


    } else {
        d.style.marginLeft = "1%";
        d.style.marginRight = "1%";
        d.style.borderColor = "black";
        d.style.borderStyle = "solid";
        d.style.borderWidth = "2px";
        d.style.backgroundColor = "red";
        d.style.color = "black";
        d.style.transition = "1s";


        if (a > b) {
            d.style.transition = "0.5s";
            d.textContent = "Too High!Try Again(attempt:" + tscore + ")";

        }
        else if (b > a) {
            d.style.transition = "0.5s";
            d.textContent = "Too Low!Try Again(attempt:" + tscore + ")";

        }


        tscore += 1;
        console.log("wrong");
    }

    function refresh() {

    }
}
function refresh() {
    location.reload();
}
