export function verificarVelocidade(value){
    if (typeof value !== "number"){ //Poderia ser feito tbm com a func typeof
        return "Não é uma velocidade valida!";
    }
    
    const max_velocity = 70;
    const km_per_point = 5;
    if (value <= max_velocity){
        return "Velocidade Permitida!"
    }    
    if (value > max_velocity){
        let total_of_points;
        total_of_points = Math.floor((value - max_velocity) / km_per_point);
        if (total_of_points > 12){
            return "Sua Carteira Foi Suspensa!"
        }
        return "Seu total de pontos foi " + total_of_points
    }
}   
