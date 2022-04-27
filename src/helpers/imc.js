export const levels = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5], yourImc: 0 },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9], yourImc: 0 },
    { title: 'Sobrepesa', color: '#E2B039', icon: 'down', imc: [25, 30], yourImc: 0 },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99], yourImc: 0 }
]

export function calcIMC(weightField, heightField) {

    const imc = (weightField / (heightField * heightField)).toFixed(2)

    levels.forEach(level => {
        if(imc >= level.imc[0] && imc <= level.imc[1]) {
            level.yourImc = imc
            console.log(level) 
        }
    })
}