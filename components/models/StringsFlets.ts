import { FIRST_FLET } from 'components/const/const'

// 弦とフレットの組み合わせ
export type StringsFlets = Record<number, number | 0>

export const GetMaxFlet = (stringsFlets: StringsFlets): number => {
  let max = 0
  for (const key of Object.keys(stringsFlets)) {
    if (max < stringsFlets[key]) {
      max = stringsFlets[key]
    }
  }
  return max + 2
}

export const GetMinFlet = (stringsFlets: StringsFlets): number => {
  let min = 0
  for (const key of Object.keys(stringsFlets)) {
    if (Number(key) === FIRST_FLET) {
      min = stringsFlets[key]
      continue
    }
    if (min > stringsFlets[key]) {
      min = stringsFlets[key]
    }
  }
  return min
}
