
/*const Accounts = [
    {name: "Carlos", saldo:900, password: "hello"}, {name: "Cecilia", saldo: 970, password: "12345"}, 
    {name: "Ever", saldo: 899, password: "classroom"}, {name: "Stephano", saldo: 900, password: "9876"}
]
 */

function validarDatos(){
    var user = document.getElementById("user").value
    var pass = document.getElementById("password").value
    

    if(user=="carlos" && pass=="carlos"){
        window.location="/dashboard/"; 
        //alert("Hola Carlos ")
    }

    else if(user=="cecilia" && pass=="cecilia"){
        window.location="/dashboard/"; 
        //alert("Hola Cecilia")
    }

    else if(user=="stephano" && pass=="stephano"){
        window.location="/dashboard/"; 
        //alert("Hola Estephano")
    }


    else if(user=="ever" && pass=="ever"){
        window.location="/dashboard/newindex.html";  
    }

    else if(user==="" && pass===""){
        alert("Por favor ingresa un usuario y un password")
    }


    else{
        alert("usuario o  password incorrectos")
    }
    return false;  // Add return false, because submitting a form will refresh the page return false will keep the page static and your window.location.href will redirect.
} 
function consultarSaldo(){
    const Cantidad=document.getElementById('cuenta').value
    alert("Su saldo en cuenta es: "+Cantidad)
}
function ingresarMonto(){
    const Cantidad = parseFloat(document.getElementById('monto1').value)
    const Cantidad1 = parseFloat(document.getElementById('cuenta').value)
    document.getElementById('cuenta').value = parseFloat(Cantidad + Cantidad1)
    const saldo = parseFloat(Cantidad + Cantidad1)
    if(saldo>991){
        const ingreso = 990 - Cantidad1
        alert("Su ingreso excede nuestra politica, puede ingresar hasta: "+ ingreso)
        document.getElementById('cuenta').value = parseFloat(Cantidad1)
    }else{
        alert("Su monto ingresado es: "+Cantidad)
        alert("Su saldo es: "+saldo)
    }
    
}
function retirarMonto(){
    const Cantidad = parseFloat(document.getElementById('monto1').value)
    const Cantidad1 = parseFloat(document.getElementById('cuenta').value)
    document.getElementById('cuenta').value = parseFloat( Cantidad1 - Cantidad)
    const saldo = parseFloat(Cantidad1 - Cantidad)
    if(saldo<10){
        const egreso = Cantidad1 - 10
        alert("Su egreso excede nuestra politica, puede retirar hasta: "+ egreso)
        document.getElementById('cuenta').value = parseFloat(Cantidad1)
    }else{
        alert("Su monto a retirar es: "+Cantidad)
        alert("Su saldo es: "+saldo)
    }
}
function cerrarSesion () {
    const Sesion = document.getElementById('cerrar_id')
    window.location = "/"
}

//Interface Ever

function consultarSaldos(){
    const Cantidades=document.getElementById('consultas_id').value
    alert("Su saldo en cuenta es: "+Cantidades)
}
function ingresarMontos(){
    const Cantidades = parseFloat(document.getElementById('insertar_dogecoin').value)
    const Cantidades1 = parseFloat(document.getElementById('consultas_id').value)
    document.getElementById('consultas_id').value = parseFloat(Cantidades + Cantidades1)
    const saldos = parseFloat(Cantidades + Cantidades1)
    if(saldos>991){
        const ingresos = 990 - Cantidades1
        alert("Tu ingreso excede nuestra Dogelitica, puedes ingresar hasta: "+ ingresos)
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    
    else if(document.getElementById('insertar_dogecoin').value===""){
        alert("Por favor ingresa un monto")
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    else if(document.getElementById('insertar_dogecoin').value<0){
        alert("Un fallo en la Matrix, no puedes depositar cantidades negativas")
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    else{
        alert("Depositaste: "+Cantidades +" Dogecoins")
        alert("Tu  nuevo saldo es: "+saldos +" Dogecoins")
    }
    
}
function retirarMontos(){
    const Cantidades = parseFloat(document.getElementById('retirar_dogecoin').value)
    const Cantidades1 = parseFloat(document.getElementById('consultas_id').value)
    document.getElementById('consultas_id').value = parseFloat( Cantidades1 - Cantidades)
    const saldos = parseFloat(Cantidades1 - Cantidades)
    if(saldos<10){
        const egresos = Cantidades1 - 10
        alert("Tu egreso excede nuestra Dogelitica, puedes retirar hasta: "+ egresos +" Dogecoins")
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    else if(document.getElementById('retirar_dogecoin').value===""){
        alert("Ingresa el monto que deseas retirar")
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    else if(document.getElementById('retirar_dogecoin').value<0){
        alert("Error de Javas..., no es cierto, ingresa una cantidad positiva")
        document.getElementById('consultas_id').value = parseFloat(Cantidades1)
    }
    
    else{
        alert("Estas retiranto: "+Cantidades +" Dogecoins")
        alert("Tu  nuevo saldo es: "+saldos +" Dogecoins")
    }
}
