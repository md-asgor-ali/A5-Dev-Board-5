window.onload = function (){
    main();
}

function main(){
    const body = document.getElementById('body');
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.addEventListener('click', function(){
        const bgColor =generateRandomBG();
        body.style.backgroundColor = bgColor;
    });
}
function generateRandomBG(){
    const red = Math.floor(Math.random() * 225);
    const green = Math.floor(Math.random() * 225);
    const blue = Math.floor(Math.random() * 225);

    return `rgb(${red}, ${green}, ${blue})`
}



const currentDate = new Date();
document.getElementById('current-date').innerHTML = currentDate.toDateString();


const completeBtns = document.getElementsByClassName('complete-btn');

for (let btn of completeBtns) {
    btn.addEventListener('click', function () {
        alert('Board updated successfully');
        let assignTasksElement = document.getElementById('task-assign');
        let assignTasks = parseInt(assignTasksElement.innerText);

        let checkBtn = document.getElementById('check-btn');
        let convertedCheckBtn = parseInt(checkBtn.innerText);

        if (assignTasks > 0) {
            assignTasks--;
            assignTasksElement.innerText = assignTasks;

            convertedCheckBtn++;
            checkBtn.innerText = convertedCheckBtn;

            btn.disabled = true;
            btn.classList.add('disabled');

            const now = new Date();
            const timeString = now.toLocaleTimeString(); 

            
            const taskCard = btn.closest('.rounded-2xl');

            if (taskCard) {
                
                const taskName = taskCard.querySelector('h1').innerText;

                
                const activityLog = document.createElement('div');
                activityLog.className = 'bg-[#f4f7ff] rounded-2xl p-3 mt-7';
                activityLog.innerHTML = `<p>You have completed the task ${taskName} at ${timeString}</p>`;

                
                const activityContainer = document.getElementById('activity');
                activityContainer.appendChild(activityLog);
            }

            if (assignTasks === 0) {
                alert("Congratulations!!! You Have Completed All The Current Task.");
            }
        } else {
            alert("No tasks left to complete!");
        }
    });
}

const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function () {
    const activityContainer = document.getElementById('activity');

    while (activityContainer.firstChild) {
        activityContainer.removeChild(activityContainer.firstChild);
    }

    alert('Activity history cleared successfully!');
});

// switch page section
document.getElementById('discover-new').addEventListener('click', function () {
    window.location.href = 'question.html';
    alert('hi')

});




