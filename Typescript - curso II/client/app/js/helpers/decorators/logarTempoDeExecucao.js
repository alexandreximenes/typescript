function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.info("---------------------------------");
            console.log(`Parametros passado para o método: ${propertyKey} : ${JSON.stringify(args)}`);
            const ti = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tf = performance.now();
            console.log(`O retorno desse método foi ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey}, demorou ${tf - ti} para executar`);
            return retorno;
        };
        console.info("---------------------------------");
        return metodoOriginal;
    };
}
