let userInput = document.querySelector("input.add-item");
	addButton = document.querySelector("i.add-item-icon");
	taskList = document.querySelector("ul.items-list");
	listItems = document.querySelectorAll("li");
	listItemText = document.querySelectorAll("p");
	statusIcon = document.querySelectorAll("i");
	card = document.querySelector("div.card");
	warning = document.querySelector("p.empty-info");
	idleBackground = document.querySelector("img.idle");

addButton.addEventListener("click", () => {

    if (userInput.value.trim() == "" && taskList.hasChildNodes() == false) {

        card.style.backgroundColor = "#dbdabe";
        card.style.color = "#686d76";

        warning.textContent = "Come on, is that really a task?";

        setTimeout( () => {
            idleBackground.src = "images/angry.jpg";
        }, 200);

        console.log("Enter something first");

    } else if (userInput.value.trim() == "" && taskList.hasChildNodes()) {
        console.log("Nothing happens");
    }

    else {

        idleBackground.src = "images/relaxed.jpg";
        warning.textContent = "No items in list, add some new";
        card.style.backgroundColor = "#f9f9f9";
        card.style.color = "rgba(0, 0, 0, .8)";

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

                for (let i = 0; i < listItemText.length; i++) {
                    listItemText[i];

                    paragraph.classList.toggle("task-complete");

                    if (taskList.hasChildNodes()) {
                        console.log("There are tasks in list");
                    } else {
                        document.querySelector("div.empty-list").style.display = "block";
                    }
                }

                for (let j = 0; j < statusIcon.length; j++) {
                    statusIcon[j];
                }

                if (paragraph.classList.contains("task-complete")) {
                    icon.textContent = "check_circle";
                } else {
                    icon.textContent = "panorama_fish_eye";
                }
            });

            deleteIcon.addEventListener("click", () => {
                newElement.remove();
            });
    }
});