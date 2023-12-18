import { Kafka, ProducerBatch } from "kafkajs";
import { v4 as uuid } from "uuid";
async function main() {

    const kafka = new Kafka({
        brokers: ['bdsrv01:39092', 'bdsrv02:39092', 'bdsrv03:39092']
    });

    const producer = kafka.producer();
    await producer.connect();

    const kafkaRecord = [{
        topic: "test-topic",
        messages: [{
            value: JSON.stringify({
                id: uuid(),
                msg: 'test'
            })
        }]
    }]
    
    const st = new Date().getTime();
    await producer.sendBatch({ topicMessages: kafkaRecord });
    console.log(`${new Date().getTime() - st}ms`);
    await producer.disconnect();
}

main();