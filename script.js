function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if(name === "" || age === ""){
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("patientList");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = age;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}