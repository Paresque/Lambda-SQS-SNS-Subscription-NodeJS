
export const lambdaHandler = async (event, context) => {
    console.log(JSON.stringify(event, null, 4));
    
    for (let index = 0; index < event.Records.length; index++) {
        const record = event.Records[index];
        const body = JSON.parse(record.body);

        // executar a lógica de negócio 

        console.log(JSON.stringify(body, null, 4));
    }
};
