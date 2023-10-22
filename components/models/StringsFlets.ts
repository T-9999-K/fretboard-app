import { FIRST_FLET, FLET_SIZE_MODE, FLET_COUNT } from 'components/const/const'

// 弦とフレットの組み合わせ
export type StringsFlets = Record<number, number | 0>

// フレットの初期状態
export const defaultFlets: StringsFlets = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
}

export const GetMaxFlet = (stringsFlets: StringsFlets): number => {
  if (FLET_SIZE_MODE === 'pc') return FLET_COUNT + 1
  let max = 0
  for (const key of Object.keys(stringsFlets)) {
    if (max < stringsFlets[key]) {
      max = stringsFlets[key]
    }
  }
  return max + 2
}

export const GetMinFlet = (stringsFlets: StringsFlets): number => {
  if (FLET_SIZE_MODE === 'pc') return 0
  let min = 0
  for (const key of Object.keys(stringsFlets)) {
    if (Number(key) < FIRST_FLET + 1) {
      continue
    }
    if (min > stringsFlets[key]) {
      min = stringsFlets[key]
    }
  }
  return min
}
