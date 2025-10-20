const dateTag = document.getElementsByTagName("time")[0]

dateTag.innerHTML = getCurrentDate();

function getCurrentDate() {
    return new Date().toDateString();
}