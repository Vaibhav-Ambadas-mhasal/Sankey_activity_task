var selectedRow = null;

var emps_id = []; // created array to store id


function onFormSubmit() {
event.preventDefault();
var formDate = readForDate();
if(selectedRow === null){
    insertNewRecord(formDate);
}else{
    updateRecord(formDate);
    selectedRow = null;
}
resetForem();
}



// part 1
// retrieve the data
function readForDate() {
    var formDate = {};
    formDate["id1"] = document.getElementById("id1").value;
    formDate["name1"] = document.getElementById("name1").value;
    formDate["age1"] = document.getElementById("age1").value;
    formDate["gen1"] = document.getElementById("gen1").value;
   
    return formDate;
}


//part 2
// insert the data
function insertNewRecord(data) {

    //validation part
    if (emps_id.includes(data.id1)) {           
         return; // comes out of function
    }

    emps_id.push(data.id1); // when new employee is added at its id so that it can't be reused
    

    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length); 
    //table.length usealso -1 store last
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id1;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name1;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age1;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gen1;
    var cell5 = newRow.insertCell(4);
     cell5.innerHTML = '<button id="Edit1" onClick="onEdit(this)">Edit</button> <button id="onDelite" onClick ="onDelete(this)">Delete</button>'

     // onsubmit,onchange
    }



//  edit function

function onEdit(td){
    selectedRow = td.parentElement.parentElement; // traversal method use 
    document.getElementById('id1').value= selectedRow.cells[0].innerHTML;
    document.getElementById('name1').value= selectedRow.cells[1].innerHTML;
    document.getElementById('age1').value= selectedRow.cells[2].innerHTML;
    document.getElementById('gen1').value= selectedRow.cells[3].innerHTML;
   
}

function updateRecord(formDate){

    emps_id.splice(emps_id.indexOf(selectedRow.cells[0].innerHTML), 1);

    var z=document.getElementById('id1').value; // store the id value in z

    for(let i=0; i<emps_id.length; i++ ){
    if (emps_id[i]==z) {
        return; // comes out of function
   }
    // emps_id.indexOf(selectedRow.cells[0].innerHTML) -> find index of id in emps_id
    // splice -> remove id from emps_id

    // selectedRow.cells[0].innerHTML=formDate.id1;
    // selectedRow.cells[1].innerHTML=formDate.name1;
    // selectedRow.cells[2].innerHTML=formDate.age1;
    // selectedRow.cells[3].innerHTML=formDate.gen1;

 

}

selectedRow.cells[0].innerHTML=formDate.id1;
selectedRow.cells[1].innerHTML=formDate.name1;
selectedRow.cells[2].innerHTML=formDate.age1;
selectedRow.cells[3].innerHTML=formDate.gen1;
}

// delet this data

function onDelete(td){
 if(confirm('Do you wantto delete this record?')){
    row=td.parentElement.parentElement; // traversal method
    document.getElementById('storelist').deleteRow(row.rowIndex);
 }   
 resetForem();
}


// resert the data

function resetForem(){
    document.getElementById('id1').value='';
    document.getElementById('name1').value='';
    document.getElementById('age1').value='';
     document.getElementById('gen1').value='';

}



// validation

/*
1 not mant
*/

function myfun(){


    var valueid= document.getElementById("id1").value;

    if (emps_id.includes(valueid)) {
        document.getElementById("id1span2").innerHTML ="Id is already used.";
        return false;
    }else{
        document.getElementById("id1span2").innerHTML ="";

    }

   


    var valuename= document.getElementById("name1").value;
    var valueage= document.getElementById("age1").value;
    var valuegen= document.getElementById("gen1").value;
    var exp= /^[A-Za-z\s]+$/;

    // console.log("hhiiiiiiiiiiiiiiiii");
    // console.log(valueid);
    // console.log(valuename);
    // console.log(valueage);
    // console.log(valuegen);


// check the id
    if (valueid == ""){
        document.getElementById("id1span").innerHTML ="Please Fill ID";
        return false;
    }else if (valueid <=0){
        document.getElementById("id1span").innerHTML ="Positive Id required";
        return false;
    }
    
     if(valueid >=0){
        document.getElementById("id1span").innerHTML ="";
        // return true;
    }


// check the name



 if (valuename == ""){
    document.getElementById("name1span").innerHTML ="Please Fill Name";
    return false;
}
else if (valuename.match(exp))
    true;
    else{
    document.getElementById("name1span").innerHTML ="Enter The Alphabets";
    return false;
}

if(valuename.match(exp)){
    document.getElementById("name1span").innerHTML ="";
}

// check the age 

 if(valueage == ""){
    document.getElementById("age1span").innerHTML="Please Fill Age";
    return false;
}else if(valueage <18 || valueage >60){
   document.getElementById("age1span").innerHTML= "Enter the Age Between 18 to 60 ";
   return false;
}

if(valueage >18 || valueage <60 ){
   document.getElementById("age1span").innerHTML= "";
}

// check the age 

if(valuegen == ""){
    document.getElementById("gen1span").innerHTML="Please Fill Gender";

    return false;
    }

if(valuegen !=""){
    document.getElementById("gen1span").innerHTML="";
}    

// else if(valuegen != "MALE" || valuegen != "FEMALE" || valuegen != "OTHER"){
//    document.getElementById("gen1span").innerHTML= "Select the Gender";
// }

}



// update 
// var z=document.getElementById('id1').value; // store the id value in z

// for(let i=0; i<emps_id.length; i++ ){
// if (emps_id[i]==z) {
//     return; // comes out of function
// }
// }

// validatio part 2














// code2
//  var selectedRow = null;


// function onFormSubmit() {
// event.preventDefault();
// var formDate = readForDate();
// if(selectedRow == null){
//     insertNewRecord(formDate);
// }else{
//     updateRecord(formDate);
// }
// resetForem();
// }


// // retrieve the data
// function readForDate() {
//     var formDate = {};
//     formDate["id1"] = document.getElementById("id1").value;
//     formDate["name1"] = document.getElementById("name1").value;
//     formDate["age1"] = document.getElementById("age1").value;
//     formDate["gen1"] = document.getElementById("gen1").value;
//     return formDate;
// }

// // insert the data

// function insertNewRecord(data) {
//     var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id1;
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.name1;
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.age1;
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.gen1;
//     var cell5 = newRow.insertCell(4);
//      cell5.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick ="onDelet(this)">Delete</button>'
    
//     //   '<a onClick="onEdit(this)">Edit</a> <a>Delete</a>'
   
// }


// // resert the data

// function resetForem(){
//     document.getElementById('id1').value="";
//     document.getElementById('name1').value="";
//     document.getElementById('age1').value="";
//     document.getElementById('gen1').value="";
// //   selectedRow = null;
// }


// //  edit function

// function onEdit(td){
//    selectedRow = td.parentElement.parentElement;
//    document.getElementById("id1").value = selectedRow.cell[0].innerHTML;
//    document.getElementById("name1").value = selectedRow.cell[1].innerHTML;
//    document.getElementById("age1").value = selectedRow.cell[2].innerHTML;
//    document.getElementById("gen1").value = selectedRow.cell[3].innerHTML;
    
// }

// function updateRecord(formDate){
//     selectedRow.cell[0].innerHTML=formDate.id1;
//     selectedRow.cell[1].innerHTML=formDate.name1;
//     selectedRow.cell[2].innerHTML=formDate.age1;
//     selectedRow.cell[3].innerHTML=formDate.gen1;
// }




// code 1
// var selectedRow = null;


// function onFormSubmit(e) {
// event.preventDefault();
// var formDate = readForDate();
// if(selectedRow === null){
//     insertNewRecord(formDate);
// }else{
//     updateRecord(formDate);
// }
// resetForem();
// }

// // retrieve the data
// function readForDate() {
//     var formDate = {};
//     formDate["id1"] = document.getElementById("id1").value;
//     formDate["name1"] = document.getElementById("name1").value;
//     formDate["age1"] = document.getElementById("age1").value;
//     formDate["gen1"] = document.getElementById("gen1").value;
//     return formDate;
// }

// // insert the data

// function insertNewRecord(data) {
//     var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id1;
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.name1;
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.age1;
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.gen1;
//     var cell5 = newRow.insertCell(4);
//      cell5.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick ="onDelete(this)">Delete</button>'
// }



// //  edit function

// function onEdit(td){
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById('id1').value= selectedRow.cells[0].innerHTML;
//     document.getElementById('name1').value= selectedRow.cells[1].innerHTML;
//     document.getElementById('age1').value= selectedRow.cells[2].innerHTML;
//     document.getElementById('gen1').value= selectedRow.cells[3].innerHTML;
    
// }

// function updateRecord(formDate){
//     selectedRow.cells[0].innerHTML=formDate.id1;
//     selectedRow.cells[1].innerHTML=formDate.name1;
//     selectedRow.cells[2].innerHTML=formDate.age1;
//     selectedRow.cells[3].innerHTML=formDate.gen1;

// }


// // delet this data

// function onDelete(td){
//  if(confirm('Do you wantto delete this record?')){
//     row=td.parentElement.parentElement;
//     document.getElementById('storelist').deleteRow(row.rowIndex);
//  }   
//  resetForem();
// }


// // resert the data

// function resetForem(){
//     document.getElementById('id1').value='';
//     document.getElementById('name1').value='';
//     document.getElementById('age1').value='';
//      document.getElementById('gen1').value='';

// }
