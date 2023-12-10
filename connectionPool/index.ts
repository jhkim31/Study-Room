import EventEmitter from "events";
import axios, { AxiosResponse } from "axios";
import https from "https";

type AxiosResolve = (d: AxiosResponse) => void;
type AxiosReject = (e: unknown) => void;

interface QueueItem {
    url: string;
    resolve: AxiosResolve;
    reject: AxiosReject;
}


const agent = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
        keepAlive: true
    })
})

export default class ConnectionPool {
    queue: QueueItem[];
    maxSize: number;
    currentSize: number;
    events: EventEmitter;

    constructor(size = 4) {
        this.maxSize = size;
        this.queue = [];
        this.events = new EventEmitter();
        this.currentSize = 0;
        this.events.on('next', () => {            
            if (this.currentSize < this.maxSize) {
                if (this.queue.length > 0) {
                    const item = this.queue[0];
                    this.queue = this.queue.slice(1);
                    this.currentSize++;           
                    agent.get(item.url)
                        .then(item.resolve)
                        .catch(item.reject)
                        .finally(() => {
                            this.currentSize--;
                            this.events.emit('next');
                        })
                    this.events.emit('next');
                }

            }
        })
    }

    add(item: QueueItem) {
        this.queue.push(item);
        this.events.emit('next');
    }
}
