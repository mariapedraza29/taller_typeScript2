//Taller de typeScript 2
//ejercicio1
function tipoBooleano(x:boolean):boolean {
    return true;   
    }
    tipoBooleano(false);
    console.log(tipoBooleano);

    //ejercicio2
    function obligatorios(nombre: string, ciudad?:string, salario: number=1000000):string {
        if (ciudad) {
            return `nombre: ${nombre}, salario: ${salario}, ciudad: ${ciudad}`;
        }
        return`ciudad: ${ciudad}`;    
    }
    
    let parametrosUno = obligatorios(`juan`, `pereira`,);
    console.log(parametrosUno);
    
    //ejercicio3
    function suma(a:number, b:number) {
        return a*b;
    }
    console.log(suma(5,4));
    //ejercicio4
    
    let tiempo = setTimeout(
        function () {
            console.log(`HOLIII ADSO`);
        }, 5000
    )
    
    //ejercicio5
    const flecha = () =>console.log(`Hola ASDO`);
    flecha();
    
    //ejercicio6
    let edad = (edad: number)=> `La edad que tenia el año anterior es ${edad-1}`;
    console.log(edad(5));
    
    let dosParametros = (a:number, b:number)=>{
        let x = a%b;
        return x;
    }
    console.log(dosParametros(5,2));