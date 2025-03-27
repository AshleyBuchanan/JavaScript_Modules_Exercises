//logger
console.log(
    'globalConfig.mjs accessed.'
)

const configs = {
    1: 'internals',
    2: 'externals',
    3: 'sysmon',
    4: 'laterals',
    5: 'quadrilaterals',
    6: 'quarks?'
}
let i = 1;
const i1 = setInterval(() => {
    console.log(
        `...${configs[i++]} configured`
    )
}, 700);

setTimeout(() => {
    console.log(
        '... ...globalConfig.mjs completed integration.'
    )
    clearInterval(i1);
}, 4200);