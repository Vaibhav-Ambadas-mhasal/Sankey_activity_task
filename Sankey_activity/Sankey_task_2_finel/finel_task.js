var selectedRow = null;




 
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
    formDate["task"] = document.getElementById("task").value;
    formDate["startDate"] = document.getElementById("startDate").value;
    formDate["endDate"] = document.getElementById("endDate").value;
    formDate["Status"] = document.getElementById("Status").value;
   
    return formDate;
}


// //part 2
// insert the data





function insertNewRecord(data) {

    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length); 
    // newRow.setAttribute("id", )
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.task ;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.startDate;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.endDate;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Status;
    var cell5 = newRow.insertCell(4);
     cell5.innerHTML = '<button id="Edit1" onClick="onEdit(this)">Edit</button> <button id="onDelite" onClick ="onDelete(this)">Delete</button>'
   


     // line-through 
     if(data.Status == "Completed" || data.Status == "Due-Passed"){
        cell1.style["text-decoration"]= "line-through";
        cell2.style["text-decoration"]= "line-through";
        cell3.style["text-decoration"]= "line-through";
        cell4.style["text-decoration"]= "line-through";
        // cell1.style["text-decoration"]= "line-throgh";
     }
    
     
       

    }

   

// //  edit function


function onEdit(td){
    selectedRow = td.parentElement.parentElement; // traversal method use 
    // console.log(td.parentElement.parentElement, td.parentElement);

    document.getElementById('task').value= selectedRow.cells[0].innerHTML;
    document.getElementById('startDate').value= selectedRow.cells[1].innerHTML;
    document.getElementById('endDate').value= selectedRow.cells[2].innerHTML;
    document.getElementById('Status').value= selectedRow.cells[3].innerHTML;
   
   


    
}




function updateRecord(formDate){

    selectedRow.cells[0].innerHTML=formDate.task;
    selectedRow.cells[1].innerHTML=formDate.startDate;
    selectedRow.cells[2].innerHTML=formDate.endDate;
    selectedRow.cells[3].innerHTML=formDate.Status;
    
}

// delet this data

function onDelete(td){
 if(confirm('Do you wantto delete this record?')){
    row=td.parentElement.parentElement; // traversal method
    document.getElementById('storelist').deleteRow(row.rowIndex);
 } 
  
 resetForem();
}


// // resert the data

function resetForem(){
    document.getElementById('task').value='';
    document.getElementById('startDate').value='';
    document.getElementById('endDate').value='';
     document.getElementById('Status').value='';
    //  document.getElementById('search').value='';


}


// searchfun
function searchfun(){
    let filter = document.getElementById('search').value.toUpperCase(); // store the search bar value in filter
     
    let myTable = document.getElementById('storelist');  // enetr the inside table

    let tr = myTable.getElementsByTagName('tr');
    




    for(var i=0; i<tr.length; i++)
    {
                let td = tr[i].getElementsByTagName('td')[0];
                        let td1 = tr[i].getElementsByTagName('td')[1];
                        let td2 = tr[i].getElementsByTagName('td')[2];
                        let td3 = tr[i].getElementsByTagName('td')[3];

                        var found =false;
                        
                        // check date 
                         
                        var isdate=filter.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);
    
                if(!found && td || isdate){
                    let textvalaue = td.textContent || td.innerHTML;
        
                    if(textvalaue.toUpperCase().indexOf(filter) >-1){
                        tr[i].style.display ="";
                        found = true;
                    }else{
                        tr[i].style.display = "none";
                    }
                }


                if(!found &&td1 || isdate ){
                    let textvalaue = td1.textContent || td1.innerHTML;
            
                    if(textvalaue.toUpperCase().indexOf(filter) >-1){
                        tr[i].style.display ="";
                        found = true;
                    }else{
                        tr[i].style.display = "none";
                    }
                }


                if(!found &&td2 || isdate){
                    let textvalaue = td2.textContent || td2.innerHTML;
            
                    if(textvalaue.toUpperCase().indexOf(filter) >-1){
                        tr[i].style.display ="";
                        found = true;
                    }else{
                        tr[i].style.display = "none";
                    }
                }
               
                if(!found &&td3 || isdate){
                    let textvalaue = td3.textContent || td3.innerHTML;
            
                    if(textvalaue.toUpperCase().indexOf(filter) >-1){
                        tr[i].style.display ="";
                        found = true;
                    }else{
                        tr[i].style.display = "none";
                    }
                }
                           
              
        }

    }
            // function endDate1(){

            // }



// validation

document.getElementById("endDate").addEventListener("input", function(event) {



    const startDateInput = document.getElementById("startDate").value;

    const endDateInput = document.getElementById("endDate").value;


// reset statues
    const addStatus = document.getElementById("Status");
 addStatus.innerHTML=
   ` <select name="Status" id="Status" required value="" >
    <option value="" selected disabled hidden></option>
    <option value="Upcoming">Upcoming</option>
    <option value="In-Progress">In-Progress</option>
    <option value="Completed">Completed</option>
    <option value="Due-Passed">Due-Passed</option>
</select>
`
    // console.log(startDateInput);
    // console.log(endDateInput);



    if (startDateInput !== "" && startDateInput > endDateInput) {

        event.target.setCustomValidity("End Date must be greater than equal to Start Date.");

        event.target.reportValidity();

    } else {

        document.getElementById("startDate").setCustomValidity("");

        event.target.setCustomValidity("");




        // const addStatus = document.getElementById("Status");

        // const todaysDate = getTodaysDate();
        const date=new Date();

           const todaysDate= [date.getFullYear().toString(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-");





        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {

            if (!addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (!addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else if (startDateInput > todaysDate) {

            if (addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (!addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (!addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (!addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else if (endDateInput < todaysDate) {

            if (!addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (!addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else {

            if (addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        }

    }

});




// startdate

document.getElementById("startDate").addEventListener("input", function(event) {

    const startDateInput = document.getElementById("startDate").value;

    const endDateInput = document.getElementById("endDate").value;


    // console.log(startDateInput);
    // console.log(endDateInput);

// reset statues

    const addStatus = document.getElementById("Status");
    addStatus.innerHTML=
      ` <select name="Status" id="Status" required value="" >
       <option value="" selected disabled hidden></option>
       <option value="Upcoming">Upcoming</option>
       <option value="In-Progress">In-Progress</option>
       <option value="Completed">Completed</option>
       <option value="Due-Passed">Due-Passed</option>
   </select>    
   `


    if (endDateInput !== "" && startDateInput > endDateInput) {

        event.target.setCustomValidity("End Date must be greater than equal to Start Date.");

        event.target.reportValidity();

    } else {

        document.getElementById("startDate").setCustomValidity("");

        event.target.setCustomValidity("");




        const addStatus = document.getElementById("Status");

        // const todaysDate = getTodaysDate();
        const date=new Date();

           const todaysDate= [date.getFullYear().toString(), (date.getMonth() + 1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0")].join("-");





        if (startDateInput <= todaysDate && todaysDate <= endDateInput) {

            if (!addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (!addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else if (startDateInput > todaysDate) {

            if (addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (!addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (!addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (!addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else if (endDateInput < todaysDate) {

            if (!addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (!addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        } else {

            if (addStatus.options[1].hasAttribute("disabled")) {

                addStatus.options[1].toggleAttribute("disabled"); // upcoming

            }

            if (addStatus.options[2].hasAttribute("disabled")) {

                addStatus.options[2].toggleAttribute("disabled"); // in-progress

            }

            if (addStatus.options[3].hasAttribute("disabled")) {

                addStatus.options[3].toggleAttribute("disabled"); // completed

            }

            if (addStatus.options[4].hasAttribute("disabled")) {

                addStatus.options[4].toggleAttribute("disabled"); // past-due

            }

        }

    }

});











































