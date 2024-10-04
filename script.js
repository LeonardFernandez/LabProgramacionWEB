function rellenarTabla(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById('tbody');
        data.equipos.forEach(equipo => {
            const fila = tabla.insertRow();
            
            
        });
    }

}