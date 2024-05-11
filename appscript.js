
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;
    const message = document.getElementById('message');
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const selectedTime = new Date(`${date}T${time}`);
    if (name && date && time && doctor) {
        if (selectedDate < currentDate) {
            message.textContent = 'You cannot schedule an appointment for yesterday. Please choose a future date.';
        } else if (selectedTime < currentDate) {
            message.textContent = 'You cannot schedule an appointment for a time that has already passed. Please choose a future time.';
        } else {
            message.textContent = `Appointment scheduled for ${name} on ${date} at ${time} with ${doctor}.`;
        }
    } else {
        message.textContent = 'Please fill out all fields.';
    }



  
});