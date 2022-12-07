window.addEventListener("load", init);
window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault(); 
  }, false);
 
/**
 * TODO: Write a function comment using JSDoc.
 */
function init() {
  // Note: In this function, we usually want to set up our event handlers
  // for UI elements on the page.
  console.log("Window loaded!");

  getAssignmentClickCount(true);

}

function assignmentClicked(className, assignmentNum) {
    let storageId = className + '-' + assignmentNum; 
    
    const clickCount = sessionStorage.getItem(storageId);
    console.log(storageId + ": " + clickCount);
    if (clickCount != null) {
        sessionStorage.setItem(storageId, parseInt(clickCount) + 1);
    } else {
        sessionStorage.setItem(storageId, 0);
    }

    getAssignmentClickCount(false);
}

function getAssignmentClickCount(firstTime) {
    document.querySelectorAll('.link-list li').forEach((assignment) => {
        var className = assignment.parentElement.parentElement.id;
        var innerHyper = assignment.getElementsByTagName('a')[0];
        
        var test = innerHyper.innerHTML.split(" - (");
        var assignmentNum = test[0];
        var numOfClicks = sessionStorage.getItem(className + '-' + assignmentNum);
        if (numOfClicks == null)
            numOfClicks = 0;

        innerHyper.innerHTML = test[0] + " - ("+numOfClicks+")";

        console.log("here");

        if (firstTime) {
            assignment.addEventListener("click", function() {assignmentClicked(className, assignmentNum)});
        }
    });
}