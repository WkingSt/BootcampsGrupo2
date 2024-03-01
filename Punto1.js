function consumirAPI(){
    var endpoint = document.getElementById("EndPoint").value;
    fetch (endpoint)
    .then (function(response){
        return response.json();
    })    
    .then (function(data){
        var precios=[];
        var password=[]

        for (var i=0; i<data.length; i++){
            password.push(data[i].id)
            precios.push(data[i].rating.count)
        }
        var grafica = [
            {
                x: password,
                y: precios,
                type: 'bar'
            }
       ];
       Plotly.newPlot('myDiv', grafica);
    })    
    .catch (function(error){
        console.log(error)
    })    
    }