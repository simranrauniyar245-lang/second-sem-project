function getMarks() {
    let n = document.getElementById("subjects").value;
    let marksDiv = document.getElementById("marksInput");
    marksDiv.innerHTML = "";

    for (let i = 1; i <= n; i++) {
        marksDiv.innerHTML += `
            <input type="number" id="mark${i}" placeholder="Enter marks for subject ${i}">
        `;
    }
}

function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let mark = parseFloat(document.getElementById("mark" + i).value);

        if (isNaN(mark)) {
            alert("Please enter all marks!");
            return;
        }

        total += mark;
    }

    let average = total / n;
    let grade, result;

    // Grade using if-else
    if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    // Pass/Fail
    if (average >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML = `
        <h3>Total Marks: ${total}</h3>
        <h3>Average: ${average.toFixed(2)}</h3>
        <h3>Grade: ${grade}</h3>
        <h3>Result: ${result}</h3>
    `;
}