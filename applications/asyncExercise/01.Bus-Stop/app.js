function getInfo() {
    const stopIDRef = document.getElementById("stopId");
    const stopId = stopIDRef.value;
    const stopNameRef = document.getElementById("stopName");
    const busesRef = document.getElementById("buses");
    stopNameRef.textContent = "";
    busesRef.innerHTML = "";

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    const response = fetch(url);
    response.then(res =>{
        res.json().then(data =>{ stopNameRef.textContent = data.name;
            appendChild(Object.entries(data.buses))

        }).catch(err=>{
            stopNameRef.textContent = "Error"
        })
    }).catch(err=>{
        stopNameRef.textContent = "Error"
    })


    function appendChild(data){
        for([bus, time] of data){
           let li = document.createElement("li");
           li.textContent = `Bus ${bus} arrives in ${time} minutes`
           busesRef.appendChild(li);
        }
    }
}


/*Asinc:
get info must be async function
try
{const response = await fetc(url);
const data = await response.json();
stopNameRef.textContent = data.name;
appendChild(Object.entries(data.buses))}catch(err){
    stopNameRef.textContent = "Error"}

*/