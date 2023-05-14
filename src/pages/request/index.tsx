// ** React Imports
import {Box, Button, ButtonGroup, Grid, Menu, MenuItem, Paper, Tab, Tabs} from '@mui/material'
import {FC, SyntheticEvent, useState, MouseEvent, useEffect} from 'react'
import TableStickyHeader from "../../views/tables/TableStickyHeader";

import {
  Check,
  Filter,
  FilterOff, MenuDown,
  Plus,
  Printer,
  Replay,
  SearchWeb,
  WifiPlus
} from "mdi-material-ui";
import RequestData from "../../types/request";

interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  {  id: 'number', label: 'Номер' },
  {  id: 'date', label: 'Дата' },
  {  id: 'updated_at', label: 'Дата изменения' },
  {  id: 'task_name', label: 'Наименование' },
  {  id: 'street', label: 'Улица' },
  {  id: 'house', label: 'Дом' },
  {  id: 'room', label: 'Помещение' },
  {  id: 'period', label: 'Срок' },
  {  id: 'executor', label: 'Исполнитель' },
  {  id: 'title', label: 'Тема' },
  {  id: 'description', label: 'Содержание', minWidth: 500 },
  {  id: 'applicant', label: 'Заявитель' },
  {  id: 'applicant_phone', label: 'Тел. заявителя' },
  {  id: 'responsible', label: 'Ответственный' },
  {  id: 'responsible_phone', label: 'Тел. ответственного' },
]

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const RequestPage: FC = () => {
  // ** States
  const [data, setData] = useState<RequestData[]>([]);
  const [tab, setTab] = useState(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElTask, setAnchorElTask] = useState<null | HTMLElement>(null);
  const openTask = Boolean(anchorElTask);

  useEffect(()=>{
    const fetchRequestData = async () => {
      const res = await fetch('http://localhost:3000/api/request');
      const data = await res.json();
      setData(data);
    }
    fetchRequestData();
  }, [])

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickTask = (event: MouseEvent<HTMLElement>) => {
    setAnchorElTask(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseTask = () => {
    setAnchorElTask(null);
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Задачи" {...a11yProps(0)} />
        <Tab label="Мои задачи" {...a11yProps(1)} />
        <Tab label="Заявки пуск тепла" {...a11yProps(2)} />
        <Tab label="Внетренняя работа" {...a11yProps(3)} />
        <Tab label="Венканалы и дымоходы" {...a11yProps(4)} />
        <Tab label="Задачи НКО" {...a11yProps(5)} />
        <Tab label="Осмотры МКД" {...a11yProps(6)} />
        <Tab label="Заявки пуск тепла" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Grid container spacing={3}>
          <Grid item>
            <Button
              color={'success'}
              startIcon={<Plus/>}
            >
              Создать Заявку
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup
              disableElevation
              variant={"outlined"}
            >
              <Button color={'success'} startIcon={<Replay/>}/>
              <Button color={'info'} startIcon={<WifiPlus/>}/>
              <Button color={'info'} startIcon={<SearchWeb/>}/>
              <Button disabled color={'info'} startIcon={<SearchWeb/>}/>
              <Button color={'info'} startIcon={<Filter/>}/>
              <Button disabled color={'info'} startIcon={<FilterOff/>}/>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <Button
              color={'success'}
              startIcon={<Check/>}
            >
              Выполнить
            </Button>
          </Grid>
          <Grid item>
            <Button
              id="demo-positioned-button"
              color={'inherit'}
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              startIcon={<Printer/>}
              endIcon={<MenuDown/>}
              onClick={handleClick}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Печать 1</MenuItem>
              <MenuItem onClick={handleClose}>Печать 2</MenuItem>
            </Menu>
          </Grid>
          <Grid item>
            <Button
              id="demo-positioned-button"
              color={'inherit'}
              aria-controls={openTask ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openTask ? 'true' : undefined}
              endIcon={<MenuDown/>}
              onClick={handleClickTask}
            >
              Все задачи
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
          <Grid item>
            <Button
              id="demo-positioned-button"
              color={'inherit'}
              aria-controls={openTask ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openTask ? 'true' : undefined}
              endIcon={<MenuDown/>}
              onClick={handleClickTask}
            >
              Доп. функции
            </Button>
          </Grid>
          <Grid item>
            <Button
              id="demo-positioned-button"
              color={'inherit'}
              aria-controls={openTask ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openTask ? 'true' : undefined}
              endIcon={<MenuDown/>}
              onClick={handleClickTask}
            >
              Ещё
            </Button>
          </Grid>
        </Grid>
        <TableStickyHeader
          rows={data}
          columns={columns}
        />
      </TabPanel>
    </Paper>
  )
}

export default RequestPage
