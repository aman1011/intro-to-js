document.write("<section>");
document.write("<h3>Education</h3>");
document.write("<p id='education'></p>")
text = "";
const education = [
    {
        "School": "VIT University",
        "Course Name": "Bachelors in Technology"
    },
    {
        "School": "Udacity",
        "Course Name": "Full Stack Nanodegree"
    },
    {
        "School": "NSCC - Institute of Technology",
        "Course Name": "IT Programming - IoT"
    }
]

education.forEach(myFunction);

document.getElementById("education").innerHTML = text;
 
function myFunction(item, index) {
  text +=  "University/College" + ": " + item["School"] + "<br>"; 
}
document.write("</section>");


// Writing hobbie section
document.write("<section>");
document.write("<h3> Hobbies </h3>");
document.write("<p id='hobbies'></p>");
// resetting text for the new section.
text = "";
const hobbies = ["Formula 1", "Soccer", "Cricket", "Drums"];

hobbies.forEach(myFunctionForHobbies);

document.getElementById("hobbies").innerHTML = text;
 
function myFunctionForHobbies(item, index) {
  text +=   item + "<br>"; 
}
document.write("</section>");

// Time to throw in some math and add another section to it
document.write("<section>");
document.write("<h3>F1 2023 Analysis</h3>");

const f1Points = {
    "Verstappen": 575,
    "Perez": 285,
    "Hamilton": 234,
    "Alonso": 206,
    "Leclerc": 206
};

sum = 0;

var sum = 0;
const drivers = Object.keys(f1Points);

for (var i=0; i < drivers.length; i++) {
    sum = sum + f1Points[drivers[i]];
}

average = sum / Object.keys(f1Points).length;

// printing the drivers above average.
document.write("<p id='bh'>Above average drivers !</p>");
document.write("<p id='above'></p>")
abovetext = '';
belowtext = ''
for (var i=0; i < drivers.length; i++) {
    if (f1Points[drivers[i]] > average) {
        abovetext = abovetext + "<li>" + drivers[i] + "</li>" + "<br>";
    } else {
        belowtext = belowtext + "<li>" + drivers[i] + "</li>" + "<br>";
    }
}

document.write("<p id='bh'>Below average drivers !</p>");
document.write("<p id='below'></p>")

document.getElementById("above").innerHTML = abovetext;
document.getElementById("below").innerHTML = belowtext;
console.log(sum / Object.keys(f1Points).length);
document.write("</section>")




