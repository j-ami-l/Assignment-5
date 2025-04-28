

const btnCompletes = document.querySelectorAll(".btn-complete")

for(const btncomplete of btnCompletes)
{
    btncomplete.addEventListener("click", function(event){
        alert("Board Updated Successfully")
        let totalTask = getInnerTextById("total-task-toComplete")
        let alltotalTask = getInnerTextById("all-total-task")
        alltotalTask++;
        totalTask--;
        getElement("total-task-toComplete").innerText = totalTask;
        getElement("all-total-task").innerText = alltotalTask;

        event.target.disabled = true ;

        if(totalTask === 0) alert("congrates!!! You have completed all the current task")

        const completeParent = event.target.parentElement.parentElement;
        
        const completedTask = completeParent.children[1].innerText;

        const div = document.createElement("div");
        div.classList.add("p-4", "text-center", "common-bg", "rounded-lg")
        div.innerHTML = `
        <p>You have completed the task ${completedTask} at ${Timee()} ${Month()} ${Datee()} ${Year()}</p>
        `
        const history = getElement("histories")
        history.appendChild(div);





    })
}