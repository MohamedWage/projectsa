document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employee = document.getElementById('employee').value;
    const date = document.getElementById('date').value;
    const inTime = document.getElementById('in_time').value;
    const outTime = document.getElementById('out_time').value;

    if (inTime && outTime) {
        const inDateTime = new Date(`2024-11-29T${inTime}`);
        const outDateTime = new Date(`2024-11-29T${outTime}`);
        const workedHours = (outDateTime - inDateTime) / (1000 * 60 * 60);

        const table = document.getElementById('attendanceTable');
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${employee}</td>
            <td>${date}</td>
            <td>${inTime}</td>
            <td>${outTime}</td>
            <td>${workedHours} hours</td>
        `;
    } else {
        alert('Please fill in all fields');
    }
});