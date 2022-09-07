let selectedRow=null;


function readFormData(){
    const formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("productName").value;
    formData["quantity"]=document.getElementById("quantity").value;
    formData["price"]=document.getElementById("price").value;
    return formData;
}

function insertRecord(info){
    const table=document.getElementById("table2").getElementsByTagName("tbody")[0];
    const newRow=table.insertRow(table.length);
    const cell1=newRow.insertCell(0);
    cell1.innerHTML=info.productCode;
    const cell2=newRow.insertCell(1);
    cell2.innerHTML=info.productName;
    const cell3=newRow.insertCell(2);
    cell3.innerHTML=info.quantity;
    const cell4=newRow.insertCell(3);
    cell4.innerHTML=info.price;
    const cell5=newRow.insertCell(4);
    cell5.innerHTML=`  <button id="fafa" type="submit"><i class="fa fa-refresh" aria-hidden="true" style="color:white"></i></button>
    <button id=fared type="delete"><i class="fa fa-trash" aria-hidden="true" style="color: white;"></i></button>`
}