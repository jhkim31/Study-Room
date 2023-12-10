import axios, { AxiosResponse } from "axios";
import ConnectionPool from ".";
import dotenv from "dotenv";
import https from "https";

dotenv.config();
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});


const s = ['90', '93', '95', '98', '99', '100', '101', '102', '104', '105', '106', '108', '112', '114', '115', '119', '121', '127', '129', '130', '131', '133', '135', '136', '137', '138', '140', '143', '146', '152', '155', '156', '159', '162', '165', '168', '169', '170', '172', '174', '175', '177', '184', '185', '188', '189', '192', '201', '202', '203', '211', '212', '216', '217', '221', '226', '232', '235', '236', '238', '239', '243', '244', '245', '247', '248', '251', '252', '253', '254', '255', '257', '258', '259', '260', '261', '262', '263', '264', '266', '268', '271', '272', '273', '276', '277', '278', '279', '281', '283', '284', '285', '288', '289', '294'];

(async () => {
    for (let i = 0; i < s.length; i++) {
        const promises: any[] = [];
        let c = i;
        for (; c < Math.min(i + 5, s.length); c++) {
            console.log(s[c]);
            promises.push(axios.get(`https://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=${process.env.SERVICE_KEY}&pageNo=1&numOfRows=744&dataType=JSON&dataCd=ASOS&dateCd=HR&startDt=20231104&startHh=00&endDt=20231204&endHh=12&stnIds=${s[c]}`), { httpsAgent });
        }
        i = c;

        await Promise.allSettled(promises)
            .then(d => {
                console.log(d)
            })
    }
})();

