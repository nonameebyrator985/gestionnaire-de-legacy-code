const { analyserCode, recommanderRefactorisations, genererDocumentation } = require('./utils');

const main = async () => {
    console.log('Démarrage du gestionnaire de legacy code...');
    await analyserCode();
    await recommanderRefactorisations();
    await genererDocumentation();
    console.log('Fin de l’analyse.');
};

main();
