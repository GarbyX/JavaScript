
const api_url = "https://employeedetails.free.beeceptor.com/my/api/path"; 

  
// Define my async function 

async function getapi(url) { 
    // Storing response 
    const response = await fetch(url); 
    // Storing data in JSON format
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    show(data); 
}

// testing the method (in the program this would be attached to a Class)
getapi(api_url); 


function hideloader() { 

    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 

    let tab =  
        `<tr> 
          <th>Name</th> 
          <th>Office</th> 
          <th>Position</th> 
          <th>Salary</th> 
         </tr>`; 

    // Loop through all rows  
    for (let r of data.list) { 
        tab += `<tr>  
    <td>${r.name} </td> 
    <td>${r.office}</td> 
    <td>${r.position}</td>  
    <td>${r.salary}</td>           
</tr>`; 

    } 

    // Setting innerHTML as tab variable 
    document.getElementById("employees").innerHTML
