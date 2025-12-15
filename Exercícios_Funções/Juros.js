const jurosS = (c, i,t) => c*(1+i*t)
console.log(jurosS(1000, 0.5, 12))

const jurosC = (c,i,t) => c*(1+i)**t
console.log(jurosC(1000,0.01,12).toFixed(2))