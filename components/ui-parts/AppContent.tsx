import Box from '@mui/material/Box'

interface LayoutProps {
  children: React.ReactNode
}

const AppContent = ({ children }: LayoutProps): JSX.Element => {
  const boxStyle = {
    p: 3,
    mt: 9
  }
  return (
    <Box component="main" sx={boxStyle}>
      {children}
    </Box>
  )
}

export default AppContent
