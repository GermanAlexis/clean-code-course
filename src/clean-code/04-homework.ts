(() => {



    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela']
        return redFruits.includes(fruit)
    }



    type FruitColor = 'red' | 'yellow' | 'purple'
    function getFruitsByColor( color: FruitColor ): string[] {

       const fruitsByColor = {
            yellow: ['pina', 'bananas'],
            red:    ['fresa', 'manzana'],
            purple: ['uvas', 'moras'],
       };

       if(!Object.keys(fruitsByColor).includes(color)) throw Error('Color no valid in funtion');

       return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

            
    function workingSteps() {
        if( !isFirstStepWorking )  return 'First step broken.';
        if( !isSecondStepWorking ) return 'Second step broken.';
        if( !isThirdStepWorking )  return 'Third step broken.';
        if( !isFourthStepWorking ) return 'Fourth step broken.';
        return 'Working properly!';
    }


    
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']

    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
