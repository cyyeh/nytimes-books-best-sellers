export const generateLastNYears = (num = 10) => {
  const currentYear = new Date().getFullYear()
  const lastNYears = []
  for (let i = 0; i <= num; i++) {
    lastNYears.push(currentYear - i)
  }

  return lastNYears
}


export const COLORS = [
  ['#ff3300', '#ff99cc'],
  ['#ff9900', '#ff99cc'],
  ['#ffff00', '#ff99cc'],
  ['#00ff00', '#009933'],
  ['#00ccff', '#0000ff'],
  ['#00ccff', '#6699ff'],
  ['#9933ff', '#cc00cc']
]
