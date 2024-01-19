function addRow() {
    let table=document.getElementById("table");

    //获取插入的位置
    let length = table.rows.length;

    //插入行节点
    let newRow=table.insertRow(length);

    //插入列表点对象
    let nameCol = newRow.insertCell(0);
    let phoneCol = newRow.insertCell(1);
    let actionCol = newRow.insertCell(2);

    //修改节点文本内容
    nameCol.innerHTML = '111'
    phoneCol.innerHTML = '222'
    actionCol.innerHTML = "<button onclick='editRow()'>编辑</button><button onclick='deleteRow(this)'>删除</button>"
    }
//删除数据函数 
function deleteRow(button) {
    //  console.log(button);
    var row=button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
    }

//编辑数据函数
function editRow(button){
    var row=button.parentNode.parentNode;
    var name= row.cells[0];
    var phone= row.cells[1];
    var action= row.cells[2];

    var inputName = prompt('输入姓名');
    var inputPhone = prompt('输入联系电话');

    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
}