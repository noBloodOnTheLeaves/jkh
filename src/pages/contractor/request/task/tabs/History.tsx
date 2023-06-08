import {Card, CardContent, Grid, Typography, TextField, Button} from "@mui/material";
import React from "react";
import {useRouter} from "next/router";
import {Lan, PrinterOutline, Reload} from "mdi-material-ui";


const History = () => {
  const router = useRouter();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} justifyContent={"flex-start"}>

          <Grid item xs={12}>
            <Typography variant={"h6"} color={"primary"}>
              История заявки
            </Typography>
          </Grid>

          <Grid item container xs={11} spacing={3} direction={'column'}>
            <Grid item >
              <TextField
                fullWidth
                multiline
                minRows={20}
                hiddenLabel={true}
                size={'medium'}
                value={router.query.title}
                sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                InputLabelProps={{style: {fontSize: 30}}}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} xs={1} direction={'column'} style={{padding: 8}}>
            <Grid item>
              <Button size={"large"} variant={"outlined"}><Reload color={"warning"} sx={{fontSize: 30}}/></Button>
            </Grid>
            <Grid item >
              <Button size={"large"} variant={"outlined"}><PrinterOutline color={"info"} sx={{fontSize: 30}}/></Button>
            </Grid>
            <Grid item >
              <Button size={"large"} variant={"outlined"}><Lan color={"info"} sx={{fontSize: 30}}/></Button>
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default History;
