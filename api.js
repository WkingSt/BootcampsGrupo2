function llamadoAPI(){
    // let endPoint = document.getElementById("endPoint").value;
    fetch('http://127.0.0.1:5000/generar-json/500000')

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);
        // Plotly.newPlot('myDiv', data);

        // var precios= [];
        // var key=[];
        
        // for (let i=0; i < data.length; i++) {
        //     key.push(data[i].name);
        //     precios.push(data[i].password);                
        // }
        
        // var grafica = [
        //     {
        //         x: key,
        //         y: precios,
        //         type: 'bar'
        //     }
        // ];
        
        // Plotly.newPlot('myDiv', grafica);   
        
        // console.log("HOLA" + data.filter(data => data.password.length === 5).length)
        // console.log("HOLA" + data.filter(data => data.password.length === 6).length)
        // console.log("HOLA" + data.filter(data => data.password.length === 7).length)
        console.log("HOLA" + data.filter(data => data.password.length === 8).length)
        console.log("HOLA" + data.filter(data => data.password.length === 9).length)
        console.log("HOLA" + data.filter(data => data.password.length === 10).length)
        console.log("HOLA" + data.filter(data => data.password.length === 11).length)
        console.log("HOLA" + data.filter(data => data.password.length === 12).length)

        const tamañoContrasena = {
            // 5: data.filter(data => data.password.length === 5).length,
            // 6: data.filter(data => data.password.length === 6).length,
            // 7: data.filter(data => data.password.length === 7).length,
            8: data.filter(data => data.password.length === 8).length,
            9: data.filter(data => data.password.length === 9).length,
            10: data.filter(data => data.password.length === 10).length,
            11: data.filter(data => data.password.length === 11).length,   
            12: data.filter(data => data.password.length === 12).length       

    };

        var tabla = [
            {
            x: Object.keys(tamañoContrasena),
            y: Object.values(tamañoContrasena),
            type: 'bar',
            marker: 
                {
                    color: 'rgb(158,202,225)', line: {color: 'rgb(8,48,107)', width: 1.5}
                },
            line: 
                {
                    color : 'rgb(8,48,107)', 
                    width: 1.5
                }
            }

        ];

        Plotly.newPlot('myDiv', tabla);

    })    

    
    .catch(function(error){
        console.log('Hubo un error con la petición realizada', error);
    })
    
}



