import {fork} from "child_process";

const st = new Date();
const cld_proc = fork(`./${process.argv[2]}`);
cld_proc.on('exit', (c, s) => {
    console.log(c, s);
    const et = new Date();
    console.log(`${et.getTime() - st.getTime()}ms`);
})