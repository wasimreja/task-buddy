let userInput = document.querySelector("input.add-item"),
	taskList = document.querySelector("ul.items-list"),
	card = document.querySelector("div.card"),
	info = document.querySelector("p.empty-info"),
	idleBackground = document.querySelector("img.idle");

function addNewTask() {

    if (userInput.value.trim() == "" && taskList.hasChildNodes() == false) {

        idleBackground.src = "images/angry.jpg";
        const emptyStringResponse = () => {
            card.style.backgroundColor = "#dbdabe";
            card.style.color = "#686d76";
            info.textContent = "Enter a proper task!";
        }
        idleBackground.onload = emptyStringResponse;

    } else if (userInput.value.trim() != "") {

        idleBackground.src = "images/relaxed.jpg";
        const properTaskAdded = () => {
            card.style.backgroundColor = "#f9f9f9";
            card.style.color = "rgba(0, 0, 0, .8)";
            info.textContent = "No items in list, add some new";
        }
        idleBackground.onload = properTaskAdded;

        document.querySelector("div.empty-list").style.display = "none";

        let newElement = document.createElement("li");
        taskList.appendChild(newElement);
        newElement.classList.add("list-items");

        let icon = document.createElement("i"),
        	paragraph = document.createElement("p"),
        	deleteIcon = document.createElement("i");

        newElement.appendChild(icon);
        newElement.appendChild(paragraph);
        newElement.appendChild(deleteIcon);

        icon.classList.add("material-icons", "task-status");
        icon.textContent = "panorama_fish_eye";

        paragraph.textContent = userInput.value;

        deleteIcon.classList.add("material-icons", "delete");
        deleteIcon.textContent = "delete";

        userInput.value = "";

            newElement.addEventListener("click", () => {

                    paragraph.classList.toggle("task-complete");

                    if (paragraph.classList.contains("task-complete")) {
                        icon.textContent = "check_circle";
                    } else {
                        icon.textContent = "panorama_fish_eye";
                    }
                });

                deleteIcon.addEventListener("click", () => {
                    newElement.remove();

                    if (taskList.hasChildNodes() == false) {
                        document.querySelector("div.empty-list").style.display = "block";
                    }
                });
            }
        }
        
        document.querySelector("i.add-item-icon").addEventListener("click", () => {
            addNewTask();
        });

        userInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                addNewTask();
    }
});