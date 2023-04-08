function solve(data) {
    let taskAssignees = {};
    let countPlayers = Number(data.shift());

    for (let i = 0; i <= countPlayers - 1; i++) {
        let [assignee, taskId, title, status, estPoints] = data
            .shift()
            .split(":");
        if (!taskAssignees.hasOwnProperty(assignee)) {
            taskAssignees[assignee] = [];
        }
        taskAssignees[assignee].push({
            taskId: taskId,
            title: title,
            status: status,
            estPoints: parseInt(estPoints)
        });

    }
    for (let i = 0; i <= data.length - 1; i++) {
        let [input, assignee, idOrIndex, title, status, estimatedPoints] = data[i].split(':');
        if (!taskAssignees.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }
        switch (input) {
            case "Add New":
                taskAssignees[assignee].push({
                    taskId: idOrIndex,
                    title: title,
                    status: status,
                    estPoints: parseInt(estimatedPoints),
                });
                break;
            case "Change Status":
                let index = taskAssignees[assignee].findIndex(task => task.taskId === idOrIndex);
                if (index === -1) {
                    console.log(`Task with ID ${idOrIndex} does not exist for ${assignee}!`);
                } else {
                    taskAssignees[assignee][index].status = title;
                }
                break;
            case "Remove Task":
                let taskToRemoveIndex = parseInt(idOrIndex);
                if (taskToRemoveIndex < 0 || taskToRemoveIndex >= taskAssignees[assignee].length) {
                    console.log("Index is out of range!");
                } else {
                    taskAssignees[assignee].splice(taskToRemoveIndex, 1);
                }
                break;
        }
    }
    let points = {
        toDo: 0,
        inProgress: 0,
        codeReview: 0,
        done: 0,
    }
    for (let assignee in taskAssignees) {
        for (let task of taskAssignees[assignee]) {
            switch (task.status) {
                case "ToDo":
                    points.toDo += task.estPoints;
                    break;
                case "In Progress":
                    points.inProgress += task.estPoints;
                    break;
                case "Code Review":
                    points.codeReview += task.estPoints;
                    break;
                case "Done":
                    points.done += task.estPoints;
                    break;
            }
        }
    }
    console.log(`ToDo: ${points.toDo}pts`);
    console.log(`In Progress: ${points.inProgress}pts`);
    console.log(`Code Review: ${points.codeReview}pts`);
    console.log(`Done Points: ${points.done}pts`);

    if (points.done >= (points.toDo + points.inProgress + points.codeReview)) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}

solve(      [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);
