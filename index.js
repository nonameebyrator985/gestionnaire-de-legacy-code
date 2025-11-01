const { analyserCode, recommanderRefactorisations, genererDocumentation } = require('./utils');

const main = async () => {
    console.log('Starting the legacy code manager...');
    await analyserCode();
    await recommanderRefactorisations();
    await genererDocumentation();
    console.log('End of analysis.');
};

main();