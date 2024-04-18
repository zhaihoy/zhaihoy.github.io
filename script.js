document.getElementById('formatButton').addEventListener('click', function() {
    var input = document.getElementById('jsonInput').value.trim();
    var errorDisplay = document.getElementById('errorDisplay');
    var formattedJson;

    try {
        formattedJson = JSON.stringify(JSON.parse(input), null, 4);
        errorDisplay.textContent = ''; // Clear any previous errors
    } catch (error) {
        errorDisplay.textContent = 'Error: ' + error.message;
        return;
    }

    // If no errors, display formatted JSON
    document.getElementById('jsonInput').value = formattedJson;

    // Save the formatted JSON to a file
    var blob = new Blob([formattedJson], {type: 'application/json'});
    var fileName = prompt('Enter file name:');
    if (fileName) {
        var a = document.createElement('a');
        a.download = fileName + '.json';
        a.href = URL.createObjectURL(blob);
        a.click();
    }
});
