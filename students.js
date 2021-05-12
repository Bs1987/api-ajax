async function getStudents() {
    const response = await axios.get(
        "https://api.sheety.co/7b024705398ab0fd8f7484628bd0970f/studentDatabase/students"
    );

    console.log(response.data.students);

    for (const student of response.data.students) {
        console.log(student);
    }
}

getStudents();