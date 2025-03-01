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



// current data section 
const currentDate = new Date();
document.getElementById('current-date').innerHTML = currentDate.toDateString();





// ========== main marks tasks =========


const completeBtns = document.getElementsByClassName('complete-btn');

for (let btn of completeBtns) {
    btn.addEventListener('click', function (event) {
        alert('Board updated successfully');
        let assignTasksElement = document.getElementById('task-assign');
        let assignTasks = parseInt(assignTasksElement.innerText);

        let checkBtn = document.getElementById('check-btn');
        let convertedCheckBtn = parseInt(checkBtn.innerText);

        // Decrease task-assign by 1
        if (assignTasks > 0) {
            assignTasks--;
            assignTasksElement.innerText = assignTasks;

            // Increase check-btn by 1
            convertedCheckBtn++;
            checkBtn.innerText = convertedCheckBtn;

            // Disable the clicked button
            btn.disabled = true;
            btn.classList.add('disabled');

            // Get the current time
            const now = new Date();
            const timeString = now.toLocaleTimeString(); // Format: HH:MM:SS

            // Traverse up the DOM to find the task card using a for loop
            for (let taskCard = btn.parentElement; taskCard; taskCard = taskCard.parentElement) {
                if (taskCard.classList.contains('rounded-2xl')) {
                    const taskName = taskCard.querySelector('h1').innerText; // Get the h1 text

                    // Create a new activity log entry
                    const activityLog = document.createElement('div');
                    activityLog.className = 'bg-[#f4f7ff] rounded-2xl p-3 mt-7';
                    activityLog.innerHTML = `<p>You have completed the task ${taskName} at ${timeString}</p>`;

                    // Append the activity log to the activity container
                    const activityContainer = document.getElementById('activity');
                    activityContainer.appendChild(activityLog);
                    break; // Exit the loop once the task card is found
                }
            }

            // Check if all tasks are completed
            if (assignTasks === 0) {
                alert("Congratulations!!! You Have Done All The Tasks.");
            }
        } else {
            alert("No tasks left to complete!");
        }
    });
}
// Clear all activities when the "Clear History" button is clicked
const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function () {
    const activityContainer = document.getElementById('activity');

    // Remove all child elements from the activity container
    while (activityContainer.firstChild) {
        activityContainer.removeChild(activityContainer.firstChild);
    }

    alert('Activity history cleared successfully!');
});




// Navigate to question.html
document.getElementById('discover-new').addEventListener('click', function () {
    window.location.href = 'question.html';
    alert('hi')

});

// Navigate back to index.html
document.getElementById('back-to-desk').addEventListener('click', function () {
    window.location.href = 'index.html';
    alert('hi')
});


