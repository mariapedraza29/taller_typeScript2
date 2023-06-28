console.log("-----funcion---------");
//función en typescript
function edadUsuario(edad:number): string {
    return `La edad del usuario es ${edad}`;
}
let resultado = edadUsuario(25);
console.log(resultado);

//parametros en funciones en typescript 
console.log("-----funcion con parametros obligatorios, por defecto y opcionales---------");
function parametros(peso:number, ciudad?:string, salario:number=1000000 ): string {
    if (ciudad){
        return `peso: ${peso}, salario: ${salario}, ciudad: ${ciudad}`;
    }
    return `peso: ${peso}, salario: ${salario}`;
}

let mensajeParametros = parametros(60, "Armenia");
console.log(mensajeParametros);

console.log("-----variables tipo funcion o expresiones---------");

let mifuncion = function (a:number, b:number) {
    return a * b;
}
console.log(mifuncion(10, 5));

console.log("-----setTimeout---------");

let timer = setTimeout(
    function () {
        console.log("Estudiamos en el SENA Galan");
    }, 4000
)
console.log("No espero a que termine el setTimeout");

console.log("-----Funcion flecha sin argumentos---------");

const departamento = () => console.log("Quindio");
departamento();

console.log("-----Funcion flecha con un argumento y una instrucción---------");

let pais = (pais:string) => `Bienvenido a: ${pais}`;
console.log(pais("Argentina"));

console.log("-----Funcion flecha con dos argumentos y mas de una instrucción---------");

let fullname = (nombre:string, apellidos:string, ciudad:string) => {
    let nombreUsuario = nombre;
    let apellidoUsuario = apellidos;
    let ciudadUsuario = ciudad;
    let mensaje = `nombres y apellidos: ${nombreUsuario} ${apellidoUsuario}, ciudad: ${ciudadUsuario}`;
    return mensaje;
}
console.log(fullname("Pepe", "Perez", "Armenia"));

















