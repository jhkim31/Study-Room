const { Kafka } = require('kafkajs')

async function main(){
    const kafka = new Kafka({
        brokers: ['bdsrv01:39092', 'bdsrv02:39092', 'bdsrv03:39092']
    });
    
    const consumer = kafka.consumer({ groupId: 'test-group' });
    await consumer.connect();    
    await consumer.subscribe({topic: "test-topic", fromBeginning: false});

    consumer.run({
        eachMessage: msgHandler
    })
}

async function msgHandler({topic, partition, message}) {
    try {
        switch (topic) {
            case 'test-topic':
                const kafkaMsgStr = message.value.toString();
                const kafkaMsgObj = JSON.parse(kafkaMsgStr);
                console.log(topic, partition);
                console.log(kafkaMsgObj);
        }
    } catch (error) {
        console.error('kafka error : ', error);
    }
}

main();

