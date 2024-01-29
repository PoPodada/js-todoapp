// console.log('１番目');


// const logsample=()=>{
//     console.log('２番目');
// }
// logsample();
// console.log('３番目');
// console.log("1番目");

// // 1秒後に実行する処理
//  setTimeout(() =>{
//    console.log("2番目(1秒後に実行)");
// });

// console.log("3番目");

// const val1 = 1 > 0 ? "trueです":"falseです";
// console.log(val1)
// const num =1300;
// console.log(num.toLocaleString());

// const formatednum = 
//   typeof num === "number" ? num.toLocaleString() :"aaa";
// console.log(formatednum)
// const checksum = (num1,num2) =>{
//   return num1 +num2 >100 ? "100超えた":"許容範囲";
// }
// console.log(checksum(1,100))

// const val = "";
// if(val){
//   console.log("truthy")
// }else{
//   console.log("false")
// }

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1or 2 true")
// }
// if(flag1 && flag2){
//   console.log("")
// }
// const num =null;
// const fee = num || "金額未設定";
// console.log(fee)

// const num2 = null;
// const fee2 = num2 && "何か設定されました"
// console.log(fee2)

const onClickAdd = () =>{
    const inputtext = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createincompletetodo(inputtext);
   
}
const createincompletetodo = (todo) =>{
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo

    /* btn */
    const compbtn = document.createElement("button");
    compbtn.innerText = "完了";
    compbtn.addEventListener("click",()=>{
        // 押された完了ボタンの親にあるliタグは以下の完了ボタンと削除ボタンを削除
        const moveTarget = compbtn.closest("li");
        compbtn.nextElementSibling.remove();
        compbtn.remove();

        const backButton = document.createElement("button");
        backButton.innerText= "もどす";

        backButton.addEventListener("click",()=>{
            const todotext = backButton.previousElementSibling.innerText
            createincompletetodo(todotext);
            backButton.closest("li").remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);

        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "削除";
    deletebtn.addEventListener("click",()=>{
        const deleteTarget = deletebtn.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget)
        
    });

    div.appendChild(p);
    div.appendChild(compbtn);
    div.appendChild(deletebtn);
    li.appendChild(div);
    
    document.getElementById("incomplete-list").appendChild(li);



}
document.getElementById('add-btn').addEventListener("click",onClickAdd);
 

