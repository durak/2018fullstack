const x = 1
let y = 5

console.log(x, y)

const t = [1, 2, 3]
t.push(5)
console.log(t.length)

t.forEach((luku) => {
  console.log(luku)
})

t[6] = 99

console.log(t)

// uusi taulukko mapilla
const ml = t.map((luku) => luku * 2)
console.log(ml)

const m2 = t.map((luku) => '<li>' + luku + '</li>')
console.log(m2)

//destructive assignment
const t2 = [1,2,3,4,5]
const [eka, toka, ...loput] = t2
console.log(eka, toka)
console.log(loput)
console.log(t2)
