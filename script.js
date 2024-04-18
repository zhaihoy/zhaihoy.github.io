function formatJSON() {
    var input = document.getElementById('jsonInput').value;
    try {
        var formattedJSON = JSON.stringify(JSON.parse(input), null, 2);
        document.getElementById('formattedJSON').innerText = formattedJSON;
        document.getElementById('error').innerText = '';
        // Here you might want to save the formattedJSON to a file on desktop
    } catch (error) {
        document.getElementById('error').innerText = 'Error: ' + error.message + ' on line ' + error.lineNumber;
        document.getElementById('formattedJSON').innerText = '';
    }
}
