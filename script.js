import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    scenarios: {
        constant_load: {
            executor: 'constant-vus',
            vus: 10,
            duration: '1m',
        },
        ramping_load: {
            executor: 'ramping-vus',
            startVUs: 1,
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 20 },
                { duration: '30s', target: 0 },
            ],
        },
        constant_arrival_rate: {
            executor: 'constant-arrival-rate',
            rate: 20,
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 50,
            maxVUs: 100,
        },
    },
};

export default function () {
    const productId = Math.floor(Math.random() * 100) + 1;
    http.get(`http://localhost:5050/products/${productId}`);
    sleep(Math.random() * 2 + 1);
}
