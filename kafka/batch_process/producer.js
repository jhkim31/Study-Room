const { Kafka } = require('kafkajs')
const { v4 } = require('uuid');
async function main() {

    const kafka = new Kafka({
        brokers: ['bdsrv01:39092', 'bdsrv02:39092', 'bdsrv03:39092']
    });

    const producer = kafka.producer();
    await producer.connect();

    const kafkaRecord = {
        topic: "test-topic",
        messages: [{
            value: JSON.stringify({
                id: v4(),
                msg: 'test'
            })
        }]
    }

    const st = new Date();
    await producer.sendBatch(kafkaRecord)
        .then(d => console.log('d : ', d))
        .catch(e => console.error('e : ', e))
    console.log(`${new Date() - st}ms`);
    await producer.disconnect();
}

main();