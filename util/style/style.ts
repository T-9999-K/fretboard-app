import {
  PrimaryRGBColor,
  DangerRGBColor,
  SuccessRGBColor,
  WarningRGBColor
} from 'components/const/const'

export const getBackGroundColor = (colorType: string): string => {
  return 'background-color:' + getColor(colorType) + ';'
}

const getColor = (colorType: string): string => {
  switch (colorType) {
    case 'primary':
      return PrimaryRGBColor
    case 'success':
      return SuccessRGBColor
    case 'warning':
      return WarningRGBColor
    case 'danger':
      return DangerRGBColor
    default:
      return 'background-color: rgb(231, 76, 60);'
  }
}
