// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
// ** Demo Components Imports
import Trophy from 'src/views/dashboard/Trophy'

const Dashboard = () => {
  return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
      </Grid>
  )
}

export default Dashboard
