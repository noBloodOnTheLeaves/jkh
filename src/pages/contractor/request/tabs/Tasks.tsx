import {Card, Grid, TextField, CardContent} from "@mui/material";
import {useRouter} from "next/router";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import CustomDataGrid from "../../../../views/tables/CustomGrid/CustomDataGrid";
import {Check, AlertCircle} from "mdi-material-ui";

const dataGridColumnsTable1: GridColDef[] = [
  {field: 'id', headerName: 'N', flex: 1, sortable: false},
  {field: 'action', headerName: 'Действие', flex: 4, sortable: false},
  {field: 'kd', headerName: 'КД', flex: 1, sortable: false},
  {field: 'date', headerName: 'Срок', flex: 2, sortable: false},
  {field: 'executor', headerName: 'Исполнитель', flex: 2, sortable: false},
  {field: 'respondent', headerName: 'Ответственный', flex: 2, sortable: false},
  {field: 'status', headerName: 'Статус заявки', flex: 2, sortable: false},
]

const dataGridColumnsTable2: GridColDef[] = [
  {field: 'date', headerName: 'Дата', flex: 2, sortable: false},
  {field: 'name', headerName: 'наименование', flex: 2, sortable: false},
  {field: 'dateExpired', headerName: 'Срок', flex: 2, sortable: false},
  {field: 'isOpen', headerName: 'Открывалось', flex: 1, sortable: false, renderCell: (params) => {
    return params.value ? <Check color={"success"}/> : <AlertCircle color={"error"}/>;
    }},
  {field: 'fact', headerName: 'Факт', flex: 2, sortable: false},
  {field: 'executor', headerName: 'Исполнитель', flex: 4, sortable: false},
  {field: 'respondent', headerName: 'Ответственный', flex: 4, sortable: false},
]

const rowTable1: GridRowsProp = [
  {
    ['id']: 1,
    'action': 'Приём обращения',
    'kd': '',
    'date': '17.05.23 23:59:59',
    'executor': '',
    'respondent': '',
    'status': ''
  },
  {
    'id': 2,
    'action': 'Выполненигn работ',
    'kd': '',
    'date': '31.05.23 23:59:59',
    'executor': '',
    'respondent': '',
    'status': ''
  },
  {
    'id': 3,
    'action': 'Создать заявкой Уведомление заявителя (СМС, КЦ)',
    'kd': '',
    'date': '31.05.23 23:59',
    'executor': '',
    'respondent': '',
    'status': ''
  },
];

const rowTable2: GridRowsProp = [
  {'id': 1, 'date': '16.05.23 08.38', 'name': 'Приём обращения', 'dateExpired': '17.05.23 23:59:59', 'isOpen': true, 'fact': '16.05.23 10:13', 'executor': 'АО "Комфотрис" Бекетовский РЭУ', 'respondent': 'Сергун Сергей Борисовчик'},
  {'id': 2, 'date': '16.05.23 10.13', 'name': 'Выполнение работ', 'dateExpired': '31.05.23 23:59:59', 'isOpen': true, 'fact': '', 'executor': 'АО "Комфотрис" Бекетовский РЭУ', 'respondent': 'Сергун Сергей Борисовчик'},
];
const Tasks = () => {
  const router = useRouter();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} style={{marginBottom: '20px'}}>
          <Grid item>
            <TextField fullWidth label='Срок' defaultValue={router.query.period}/>
          </Grid>
          <Grid item>
            <TextField fullWidth label='Ответственный'/>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel>Шаблон</InputLabel>
              <Select label='Телефонное обращение' defaultValue='active'>
                <MenuItem value='active'>Телефонное обращение</MenuItem>
                <MenuItem value='inactive'>Второе</MenuItem>
                <MenuItem value='pending'>Третье</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container={true} spacing={10}>
          <Grid item xs={12} md={12}>
            <CustomDataGrid
              columns={dataGridColumnsTable1}
              rows={rowTable1}
              hideFooter={true}
              autoHeight={true}
              slots={false}
              style={{height: '300px'}}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CustomDataGrid
              columns={dataGridColumnsTable2}
              rows={rowTable2}
              hideFooter={true}
              autoHeight={true}
              slots={false}
              style={{height: '600px'}}
              onRowClick={(params)=>{router.push(
                {
                  pathname: `/contractor/request/task/${params.id}`,
                  query: {
                    id: params.id,
                    name: params.row.name,
                    date: params.row.date,
                    dateExpired: params.row.dateExpired,
                    executor: params.row.executor,
                    isOpen: params.row.status,
                    fact: params.row.applicant,
                    respondent: params.row.house,
                  },
                }
              )}}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Tasks;
