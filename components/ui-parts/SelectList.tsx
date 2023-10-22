import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

interface SelectListProps {
  label: string
}

const SelectList: React.FC<SelectListProps> = (props) => {
  const { label } = props
  const handleChange = (event): void => {
    console.log(event.target.value)
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectList
