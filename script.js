document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Get task details
        const taskName = document.getElementById("taskName").value;
        const taskTime = document.getElementById("taskTime").value;

        if (taskName && taskTime) {
            // Create task elements
            const taskList = document.getElementById("tasks");
            const taskItem = document.createElement("li");
            taskItem.textContent = `${taskName} - ${taskTime} `;

            // Done button
            const doneButton = document.createElement("button");
            doneButton.textContent = "Done";
            doneButton.style.marginRight = "10px"; // Add spacing
            doneButton.addEventListener("click", () => {
                taskItem.style.textDecoration = "line-through";
                doneButton.disabled = true;
            });

            // Remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                taskList.removeChild(taskItem);
            });

            // Append buttons to task item
            taskItem.appendChild(doneButton);
            taskItem.appendChild(removeButton);

            // Append task item to task list
            taskList.appendChild(taskItem);

            // Show success alert
            alert("Task added successfully!");

            // Clear the form
            taskForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
