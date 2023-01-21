var pri = 0;
function a(box, price) {
    console.log("1:price="+price);
var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
var str = "";
for(var j=0; j<markedCheckbox.length; j++) {
    if(markedCheckbox.item(j).type == "checkbox" && markedCheckbox.item(j).checked) {
        str += markedCheckbox.item(j).value + "\ ";
    }
}
if(box.checked) {
    pri += price;
    console.log("2:price="+price);
    console.log("2:price="+pri);
} else {
    pri -= price;
    console.log("3:price="+price);
    console.log("3:price="+pri);
}
document.getElementById("selectProduct").value = str;
document.getElementById("price").value = pri.toLocaleString('ko-KR');
}

function isChecked(id, event, event1) {
    const checkbox = document.getElementById(id);
    const is_Checked = checkbox.checked;
    const data = document.getElementById(id).value;
    const l1 = document.getElementById('radio1');
    const l2 = document.getElementById('radio2');
    const l3 = document.getElementById('radio3');
    const l4 = document.getElementById('radio4');
    const l5 = document.getElementById('radio5');
    const l6 = document.getElementById('radio6');
    const l7 = document.getElementById('radio7');
    const l8 = document.getElementById('radio8');
    const l9 = document.getElementById('radio9');

    var res = "";

    if(l1.checked) {
        var pl1 = document.getElementById("radio1").value;
        res = pl1 + ",";
    }else if(l2.checked) {
        var pl2 = document.getElementById("radio1").value;
        res = pl2 + ",";
    }
/*
    if(!is_Checked){
        document.getElementById('price').value=0;    
        document.getElementById('selectProduct').value="";
    } else {x
        document.getElementById('price').value=event;
        document.getElementById('selectProduct').value=setProduct(event1.target.value);
    }
*/  
}


function setProduct(str) {
    const value = str;
        
    return value;
}
