var table = document.createElement("table");
document.body.appendChild(table);

table.style.width = "50%";

var tHeader = document.createElement("thead");
table.appendChild(tHeader);

var tBody = document.createElement("tbody");
table.appendChild(tBody);

//---Table---//

for(var i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    
    if(i === 0) {
        tHeader.appendChild(row);
        for(var j = 0; j < 4; j++) {
            var cell = document.createElement("th");
            cell.style.border = "thin solid black";
            cell.textContent = "Header " + (j+1);
            row.appendChild(cell);
        }
    }
    else {
        tBody.appendChild(row);
        for(var k = 0; k < 4; k++) {
            var cell = document.createElement("td");
            cell.style.border = "thin solid black";
            cell.style.textAlign = "center";
            cell.textContent = (i) + ", " + (k+1);
            row.appendChild(cell);
        }
    }
}

//---Create Button---//
var upArrow = document.createElement("button");
upArrow.setAttribute("id", "upArrow");
upArrow.style.height = "35px";
upArrow.style.fontWeight = "bold";
upArrow.style.fontSize = "15px"
upArrow.style.width = "35px";
upArrow.style.margin = "2px";
upArrow.style.marginLeft = "41px";
upArrow.textContent = "↑"

var leftArrow = document.createElement("button");
leftArrow.setAttribute("id", "leftArrow");
leftArrow.style.height = "35px";
leftArrow.style.width = "35px";
leftArrow.style.margin = "2px";
leftArrow.style.fontWeight = "bold";
leftArrow.style.fontSize = "15px"
leftArrow.textContent = "←"

var downArrow = document.createElement("button");
downArrow.setAttribute("id", "downArrow");
downArrow.style.height = "35px";
downArrow.style.width = "35px";
downArrow.style.margin = "2px";
downArrow.style.fontWeight = "bold";
downArrow.style.fontSize = "15px"
downArrow.textContent = "↓"

var rightArrow = document.createElement("button");
rightArrow.setAttribute("id", "rightArrow");
rightArrow.style.height = "35px";
rightArrow.style.width = "35px";
rightArrow.style.margin = "2px";
rightArrow.style.fontWeight = "bold";
rightArrow.style.fontSize = "15px"
rightArrow.textContent = "→"

document.body.appendChild(upArrow);
var newLine1 = document.createElement("br");
document.body.appendChild(newLine1);
document.body.appendChild(leftArrow);
document.body.appendChild(downArrow);
document.body.appendChild(rightArrow);

var newLine2 = document.createElement("br");
document.body.appendChild(newLine2);

var markCell = document.createElement("button");
markCell.setAttribute("id", "markCell");
markCell.style.height = "35px";
markCell.style.width = "115px";
markCell.style.margin = "2px";
markCell.style.fontWeight = "bold";
markCell.style.fontSize = "15px"
markCell.textContent = "Mark Cell";
document.body.appendChild(markCell);

//---Button Functions---//
selected = tBody.firstElementChild.firstElementChild;
selected.style.border = "thick solid black";
row = 0;
column = 0;

function moveUp() {
    if(row > 0) {
        // alert("length: " + tBody.children.length + ", row: " + row);
        row--;
        selected.style.border = "thin solid black";
        selected = selected.parentNode.parentNode;
        selected = selected.children[row].children[column];
        selected.style.border = "thick solid black";
    }   
}

function moveLeft() {
    if(selected.previousElementSibling != null) {
        selected.style.border = "thin solid black";
        selected = selected.previousElementSibling;
        selected.style.border = "thick solid black";
        column--;
    }
}
function moveDown() {
    if(row < tBody.children.length - 1) {
        // alert("length: " + tBody.children.length + ", row: " + row);
        row++;
        selected.style.border = "thin solid black";
        selected = selected.parentNode.parentNode;
        selected = selected.children[row].children[column];
        selected.style.border = "thick solid black";
    }   
}

function moveRight() {
    if(selected.nextElementSibling != null) {
        selected.style.border = "thin solid black";
        selected = selected.nextElementSibling;
        selected.style.border = "thick solid black";
        column++;
    }
}

function colorCell() {
    selected.style.backgroundColor = "yellow";
}

document.getElementById("upArrow").addEventListener("click",moveUp);
document.getElementById("leftArrow").addEventListener("click",moveLeft);
document.getElementById("downArrow").addEventListener("click",moveDown);
document.getElementById("rightArrow").addEventListener("click",moveRight);
document.getElementById("markCell").addEventListener("click",colorCell);
