import {Card, Grid, TextField, CardContent, Button} from "@mui/material";
import {GridColDef} from "@mui/x-data-grid";
import CustomDataGrid from "../../../../views/tables/CustomGrid/CustomDataGrid";

const dataGridColumnsTable1: GridColDef[] = [
  {field: 'name', headerName: 'Наименование', flex: 2, sortable: false},
  {field: 'isRead', headerName: 'Прочитан', flex: 1, sortable: false},
  {field: 'coments', headerName: 'Комментарий', flex: 4, sortable: false},
  {field: 'date', headerName: 'Дата', flex: 2, sortable: false},
  {field: 'author', headerName: 'Автор', flex: 2, sortable: false},
  {field: 'code', headerName: 'Код', flex: 1, sortable: false},
]

const Comments = () => {

  return (
    <Card>
      <CardContent>
        <Grid container spacing={4} style={{marginBottom: '20px'}} alignItems={"center"}>
          <Grid item xs={10}>
            <TextField fullWidth label='Комментарии'/>
          </Grid>
          <Grid item xs={2}>
            <Button variant={"contained"}>
              Добавить
            </Button>
          </Grid>
        </Grid>
        <Grid container={true} spacing={10}>
          <Grid item xs={12} md={12}>
            <CustomDataGrid
              columns={dataGridColumnsTable1}
              rows={[]}
              hideFooter={true}
              autoHeight={false}
              slots={false}
              style={{height: '600px'}}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Comments;
