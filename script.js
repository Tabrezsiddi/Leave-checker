function calculate() {
    const heldClasses = parseInt(document.getElementById('heldClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    
    // Input validation
    if (isNaN(heldClasses)) {
        alert("Please enter total classes held!");
        return;
    }
    
    if (isNaN(attendedClasses)) {
        alert("Please enter classes attended!");
        return;
    }
    
    if (attendedClasses > heldClasses) {
        alert("Attended classes can't be more than held classes!");
        return;
    }
    
    // Calculate 75% requirement
    const required = Math.ceil(heldClasses * 0.75);
    const canMiss = heldClasses - required;
    const alreadyMissed = heldClasses - attendedClasses;
    const remainingCanMiss = canMiss - alreadyMissed;
    
    // Current percentage
    const currentPercentage = (attendedClasses / heldClasses * 100).toFixed(1);
    
    // Prepare result
    let resultHTML = `
        <h3>Your Attendance Status</h3>
        <p><strong>Classes Held:</strong> ${heldClasses}</p>
        <p><strong>Classes Attended:</strong> ${attendedClasses}</p>
        <p><strong>Current Attendance:</strong> ${currentPercentage}%</p>
        <p><strong>Minimum Required:</strong> ${required} classes (75%)</p>
        <p><strong>Total Allowed Misses:</strong> ${canMiss} classes</p>
        <p><strong>Already Missed:</strong> ${alreadyMissed} classes</p>
    `;
    
    // Add warnings
    if (remainingCanMiss < 0) {
        resultHTML += `<p class="warning">⚠️ You've exceeded allowed misses by ${Math.abs(remainingCanMiss)} classes!</p>`;
    } else if (remainingCanMiss === 0) {
        resultHTML += `<p class="warning">⚠️ You can't miss any more classes!</p>`;
    } else {
        resultHTML += `<p><strong>Remaining Misses Allowed:</strong> ${remainingCanMiss} classes</p>`;
    }
    
    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('result').style.display = 'block';
}