function getData(Dataid,getNextData) {
    setTimeout(() => {
        console.log("data",Dataid);
        if (getNextData) {
            getNextData()
        }
        
    }, 5000);
}
getData(1, ()=>{
console.log("getting data2...");
getData(2,()=>{
    console.log("getting data3....");
    getData(3,()=>{
        console.log("getting data4.....")
        getData(4)
    })
})

})
// function getData(Dataid,getNextData) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("data" ,Dataid);
//         // resolve("success")
//         reject("somee error")
//         if (getNextData) {
//             getNextData();
//         }
        
//     }, 5000);
//    }) 
// }