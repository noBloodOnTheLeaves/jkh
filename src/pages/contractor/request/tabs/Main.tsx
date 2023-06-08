import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  AccountHardHat,
  Check, Close, Cog, ContentSave, EmailOpen,
  FileDocument,
  Folder, Hammer, HomeEdit,
  Lan,
  MenuDown,
  PrinterOutline,
  Reload,
  StarOutline,
  TableLarge
} from "mdi-material-ui";
import {ButtonGroup, Card, Checkbox, Divider, FormControlLabel, InputAdornment, Menu} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Phone from "mdi-material-ui/Phone";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import MessageOutline from "mdi-material-ui/MessageOutline";
import {MouseEvent, useState} from "react";
import {useRouter} from "next/router";
import {styled} from "@mui/material/styles";

const ImgStyled = styled('img')(({theme}) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const dataGridColumns: GridColDef[] = [
  {field: 'number', headerName: 'Дата отправки', sortable: false, width: 150},
  {field: 'date', headerName: 'Текст сообщения', sortable: false, width: 500},
]

const Main = () => {
  const [imgSrc,] = useState<string>('/images/avatars/1.png')
  const router = useRouter();

  const [anchorElTask, setAnchorElTask] = useState<null | HTMLElement>(null);
  const openTask = Boolean(anchorElTask);

  const handleClickTask = (event: MouseEvent<HTMLElement>) => {
    setAnchorElTask(event.currentTarget);
  };

  const handleCloseTask = () => {
    setAnchorElTask(null);
  };

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={6} direction={"row"} alignContent={"center"} justifyContent={"flex-start"}>
            <Grid item lg={2} sm={6}>
              <Grid container spacing={3} direction={"column"}>
                <Grid item>
                  <TextField fullWidth label='Номер' defaultValue={router.query.number}/>
                </Grid>
                <Grid item>
                  <TextField fullWidth label='Дата' defaultValue={router.query.date}/>
                </Grid>
                <Grid item>
                  <TextField fullWidth label='Срок' defaultValue={router.query.period}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3} sm={6}>
              <Grid container spacing={3} direction={"column"}>
                <Grid item>
                  <Button variant={"outlined"} color={"inherit"} fullWidth sx={{padding: '15.5px'}}>История
                    сроков</Button>
                </Grid>
                <Grid item>
                  <Button variant={"outlined"} disabled color={"inherit"} fullWidth sx={{padding: '15.5px'}}>Назначить
                    новый срок</Button>
                </Grid>
                <Grid item>
                  <TextField fullWidth label='Новый срок' defaultValue={router.query.period}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={7} md={12}>
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <TextField fullWidth label='УК' defaultValue={''}/>
                </Grid>
                <Grid item xs={3}>
                  <TextField fullWidth label='СЭ' defaultValue={''}/>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <TextField fullWidth label='Исполнитель' defaultValue={router.query.executor}/>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <Button variant={"contained"} startIcon={<TableLarge/>} color={"info"} fullWidth
                          sx={{padding: '15.5px', minWidth: '210px'}}>График мастеров</Button>
                </Grid>
                <Grid item lg={4} sm={6}>
                  <TextField fullWidth label='Телефон ПО' defaultValue={''}/>
                </Grid>
                <Grid item lg={12} sm={6}>
                  <TextField fullWidth label='Тема' defaultValue={router.query.period}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider/>
            </Grid>
            <Grid item lg={4} sm={6}>
              <Grid container spacing={3} direction={"column"}>
                <Grid item xs={4}>
                  <TextField fullWidth label='Вид обслуживания' defaultValue={""}/>
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth label='Вид заявки' defaultValue={""}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} sm={6}>
              <Grid container spacing={3} direction={"column"}>
                <Grid item>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <ImgStyled src={imgSrc} alt='Profile Pic'/>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container spacing={2} direction={"row"} alignItems={"center"}>
                <Grid item lg={2}>
                  <FormControlLabel
                    label='Выполнена: '
                    labelPlacement={"start"}
                    control={<Checkbox/>}
                    sx={{'& .MuiButtonBase-root': {paddingTop: 0, paddingBottom: 0}}}
                  />
                </Grid>
                <Grid item lg={2}>
                  <FormControl fullWidth>
                    <InputLabel>Статус</InputLabel>
                    <Select label='Статус' defaultValue='active'>
                      <MenuItem value='active'>В работе</MenuItem>
                      <MenuItem value='inactive'>Закрыта</MenuItem>
                      <MenuItem value='pending'>Подготовка</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider/>
            </Grid>

            <Grid item lg={12}>
              <Grid container spacing={6} direction={"row"} alignItems={"center"}>
                <Grid item lg={3} sm={6}>
                  <TextField fullWidth label='Заявитель' defaultValue={router.query.applicant}/>
                </Grid>
                <Grid item lg={3} sm={6}>
                  <TextField fullWidth label='Осмотр МКД' defaultValue={""}/>
                </Grid>
                <Grid item lg={3} sm={6}>
                  <TextField fullWidth label='Оценка заявителя' defaultValue={""}/>
                </Grid>
                <Grid item lg={1}>
                  <Button variant={"contained"}><StarOutline/></Button>
                </Grid>
                <Grid item lg={1}>
                  <Button variant={"contained"}><Reload/></Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={12}>
              <Grid container spacing={6} direction={"row"} alignItems={"center"}>
                <Grid item lg={6} sm={12}>
                  <TextField fullWidth label='Улица' defaultValue={router.query.street}/>
                </Grid>
                <Grid item lg={2} sm={3}>
                  <TextField fullWidth label='Дом' defaultValue={router.query.house}/>
                </Grid>
                <Grid item lg={1} sm={3}>
                  <TextField fullWidth label='Пом.' defaultValue={router.query.room}/>
                </Grid>
                <Grid item lg={1} sm={3}>
                  <TextField fullWidth label='Под.' defaultValue={""}/>
                </Grid>
                <Grid item lg={2} sm={3}>
                  <TextField fullWidth label='Код доступа' defaultValue={""}/>
                </Grid>
                <Grid item lg={2} sm={6}>
                  <TextField
                    fullWidth
                    label='Тел 1'
                    type='number'
                    placeholder='8(123)456-87-90'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Phone/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item lg={2} sm={6}>
                  <TextField
                    fullWidth
                    label='Тел 2'
                    type='number'
                    placeholder='8(123)456-87-90'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Phone/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item lg={3}>
                  <Button
                    id="demo-positioned-button"
                    color={'secondary'}
                    variant={"contained"}
                    aria-controls={openTask ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openTask ? 'true' : undefined}
                    startIcon={<FileDocument/>}
                    endIcon={<MenuDown/>}
                    onClick={handleClickTask}
                    sx={{padding: '15.5px'}}
                  >
                    Создать заявку
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorElTask}
                    open={openTask}
                    onClose={handleCloseTask}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem onClick={handleCloseTask}>Задача 1</MenuItem>
                    <MenuItem onClick={handleCloseTask}>Задача 2</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider/>
            </Grid>

            <Grid item lg={12}>
              <Grid container spacing={6} direction={"row"} alignItems={"center"}>
                <Grid item lg={7} md={7} sm={12}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={6}
                    hiddenLabel={true}
                    value={router.query.title}
                    sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                  />
                </Grid>
                <Grid item lg={5} md={5} sm={12}>
                  <DataGrid
                    rows={[]}
                    columns={dataGridColumns}
                    autoHeight
                    hideFooter
                    disableColumnMenu={true}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label='Комментарий' defaultValue={""}/>
            </Grid>

            <Grid item xs={12}>
              <Divider/>
            </Grid>
            <Grid item lg={4} md={4} sm={10}>
              <Grid container spacing={8} direction={"column"}>
                <Grid item lg={3}>
                  <TextField fullWidth label='Дата 1-го обращ.' defaultValue={""}/>
                </Grid>
                <Grid item lg={3}>
                  <TextField fullWidth label='Дата 2-го обращ.' defaultValue={""}/>
                </Grid>
                <Grid item lg={3}>
                  <TextField fullWidth label='Дата 3-го обращ.' defaultValue={""}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={1} md={1} sm={2}>
              <Grid container spacing={13} direction={"column"} alignSelf={"center"} alignItems={"center"}
                    justifyContent={"space-around"}>
                <Grid item lg={1} mt={1}>
                  <Button variant={"outlined"}><Check/></Button>
                </Grid>
                <Grid item lg={1}>
                  <Button variant={"outlined"}><Check/></Button>
                </Grid>
                <Grid item lg={1}>
                  <Button variant={"outlined"}><Check/></Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={1}>
              <Divider orientation="vertical"/>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <Grid container spacing={5} direction={"row"} alignItems={"start"} justifyContent={"start"}>
                <Grid item lg={12}>
                  <ButtonGroup>
                    <Button size={"large"} variant={"outlined"} ><Lan color={"secondary"} sx={{fontSize: 60}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><Folder color={"warning"} sx={{fontSize: 60}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><PrinterOutline color={"info"} sx={{fontSize: 60}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><EmailOpen color={"secondary"} sx={{fontSize: 60}}/></Button>
                  </ButtonGroup>
                </Grid>
                <Grid item lg={12}>
                  <ButtonGroup>
                    <Button sx={{fontSize: 20, padding: '15.5px'}} variant={"outlined"} color={"inherit"} fullWidth>АКП</Button>
                    <Button sx={{fontSize: 20, padding: '15.5px'}} style={{minWidth: '108px'}} variant={"outlined"} color={"inherit"} >АКТ А5</Button>
                    <Button size={"large"} variant={"outlined"} fullWidth><Cog color={"secondary"} sx={{fontSize: 50}}/></Button>
                    <Button sx={{fontSize: 20, padding: '15.5px'}} variant={"outlined"} color={"inherit"} fullWidth>НКО</Button>
                  </ButtonGroup>
                </Grid>
                <Grid item lg={12}>
                  <ButtonGroup>
                    <Button size={"large"} variant={"outlined"} ><ContentSave color={"secondary"} sx={{fontSize: 50}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><Close color={"secondary"} sx={{fontSize: 50}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><AccountHardHat color={"warning"} sx={{fontSize: 50}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><Hammer color={"secondary"} sx={{fontSize: 50}}/></Button>
                    <Button size={"large"} variant={"outlined"} ><HomeEdit color={"secondary"} sx={{fontSize: 50}}/></Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider/>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={7}
                hiddenLabel={true}
                placeholder='Заполните...'
                sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MessageOutline/>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Main;
