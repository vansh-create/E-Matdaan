// SECTION SWITCHING
function showSection(id){

    document.querySelectorAll(".section").forEach(sec=>{
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// CANDIDATE MANAGEMENT
function addCandidate(){

    let name = document.getElementById("candidateName").value;

    if(name === "") return;

    let li = document.createElement("li");
    li.textContent = name;

    document.getElementById("candidateList").appendChild(li);

    document.getElementById("candidateName").value="";
}


// ELECTION CONTROL
function startElection(){
    alert("Election Started Successfully!");
}

function endElection(){
    alert("Election Ended. Results Locked.");
}


// ANALYTICS CHART
const ctx = document.getElementById('voteChart');

new Chart(ctx,{
    type:'bar',
    data:{
        labels:['Candidate A','Candidate B','Candidate C'],
        datasets:[{
            label:'Votes',
            data:[3000,4200,2010]
        }]
    }
});