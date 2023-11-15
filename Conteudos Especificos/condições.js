// If Else
// Switch case

// se, senão se e senão (if, else if e else.)
let hora = 20;
if (hora > 6 && hora < 12) {
    // do anything
} 
else if ( hora > 12 || hora === 18){
    // do anything
}
else {
    // do anything
}

// Switch case
let tituloUsuario = "comum";
let nvlPermissao; 

switch (nvlPermissao) {
    case "comum":
        nvlPermissao = 5;
        break;
    case "gerente":    
        nvlPermissao = 7;    
        break;        
    case "diretor":  
        nvlPermissao = 10;         
        break;        
    default:
        nvlPermissao = 5;
        break;
}
// Precisa dos breaks para não continuar a sequencia
