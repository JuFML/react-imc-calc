export const levels = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5], yourImc: 0 },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9], yourImc: 0 },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30], yourImc: 0 },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99], yourImc: 0 }
]

export function calcIMC(weightField, heightField) {

    const imc = (weightField / (heightField * heightField)).toFixed(2)

    for(let i = 0; i < levels.length; i++) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let newLevel = {...levels[i]}
            
            newLevel.yourImc = imc
            return newLevel
        }
    }
}