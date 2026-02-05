fetch("https://pastebin.com/raw/8zhsm6AK").then((data)=>{
    return data.json();
}).then((responseData)=>{
    console.log(responseData[0].id);
    let tabledata="";
    responseData.map((values)=>{
        tabledata+=`<tr>
        <td>${values.id}</td>
        <td><img src="${values.img_src}"> ${values.first_name} ${values.last_name}</td>
        <td>${values.gender}</td>
        <td>${values.class}</td>
        <td>${values.marks}</td>
        <td>${values.passing}</td>
        <td>${values.email}</td>
      </tr>`;
      
    });
    document.getElementById("table-body").innerHTML=tabledata;
}).catch((err)=>{
    console.log(err);
})

