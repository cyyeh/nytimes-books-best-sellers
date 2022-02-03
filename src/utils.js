import {
  red,
  orange,
  yellow,
  green,
  blue,
  cyan,
  purple
} from '@material-ui/core/colors'

export const generateLastNYears = (num = 10) => {
  const currentYear = new Date().getFullYear()
  const lastNYears = []
  for (let i = 0; i <= num; i++) {
    lastNYears.push(currentYear - i)
  }

  return lastNYears
}


export const COLORS = [
  red[300],
  orange[300],
  yellow[300],
  green[300],
  blue[300],
  cyan[300],
  purple[300]
]
