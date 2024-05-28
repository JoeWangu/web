// Initialize firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyCXOui69cqCaUhAmn9GDiTnuUyajuWnQ3E",
    authDomain: "plp-project-1be87.firebaseapp.com",
    projectId: "plp-project-1be87",
});

const db = firebase.firestore();

// function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.ariaValueMax.trim();
    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        taskInput.value = "";
    }
}

// function to render tasks
function renderTasks(doc) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
    <span>${doc.data().task}</span>
    <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

// real-time listener for tasks
db.collection("tasks")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.array.forEach(change => {
            if (change.type === "added") {
                renderTasks(change.doc);
            }
        });
    })

// function to delete a task
function deleteTask(id) {
    db.collection("tasks").doc(id).delete();
}