function showSection(id){

    document.querySelectorAll(".section").forEach(sec=>{
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// Voting Logic (Frontend Demo)
let voted = false;

function vote(party){

    if(voted){
        alert("You have already voted!");
        return;
    }

    let confirmVote = confirm(
        "Confirm your vote for " + party + " ?"
    );

    if(confirmVote){
        voted = true;
        alert("✅ Vote successfully cast for " + party);
    }
}