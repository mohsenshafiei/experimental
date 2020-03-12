const a  = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
}

let t = (key) => a[key];

const b = {
  "t(aasdasdasdasda)": () => t("a"),
  "t(bsdasdadasdasdasdaasdasd)": () => t("b"),
  "t(csdasdadsasdasd123131231231)": () => t("c"),
}

const y = (fn) => (arg) => b[arg[0]];

const z = (fn, arg) => {
  const x = fn(arg)
  return x.toString()
}

console.log(z(t, "aasdasdasdasda")

t = y(t)

console.log(t("aasdasdasdasda"));
