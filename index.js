const { analyserCode, recommanderRefactorisations, genererDocumentation } = require('./utils');

const main = async () => {
    console.log('Starting the legacy code manager...');
    try {
        await analyserCode();
        await recommanderRefactorisations();
        await genererDocumentation();
    } catch (error) {
        console.error('An error occurred during the process:', error);
    }
    console.log('End of analysis.');
};

main();