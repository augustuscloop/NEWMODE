// Track the current background image state
let isImage1 = true;

function changeMode() {
    // Change the background image based on the current state
    if (isImage1) {
        document.body.style.backgroundImage = "url('Designer (16).jpeg')";
    } else {
        document.body.style.backgroundImage = "url('Designer (15).jpeg')";
    }

    // Toggle the state
    isImage1 = !isImage1;
}
