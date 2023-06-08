import {
  Box, ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Phone from "mdi-material-ui/Phone";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { ru } from "date-fns/locale";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import {
  ArrowDownRight,
  CalendarMonth,
  Check,
  Cog,
  ContentSave,
  FileDocument,
  Folder,
  Hammer,
  Lan,
  Microphone
} from "mdi-material-ui";
import Button from "@mui/material/Button";


const Main = () => {

  return (
    <Card>
      <CardContent>
        <form>
          <Grid container spacing={6} direction={"row"} alignContent={"center"} justifyContent={"flex-start"}>
            <Grid item lg={6} sm={6}>
              <Grid container spacing={5} direction={"column"}>
                <Grid item>
                  <TextField fullWidth label='Заявка' defaultValue={undefined}/>
                </Grid>
                <Grid item>
                  <TextField fullWidth label='Тема' defaultValue={undefined}/>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Улица' defaultValue={undefined}/>
                    <TextField label='Дом' defaultValue={undefined}/>
                    <TextField label='Пом.' defaultValue={undefined}/>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Под.' defaultValue={""}/>
                    <TextField fullWidth label='Код доступа' defaultValue={""}/>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
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
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Дата' defaultValue={""}/>
                    <TextField fullWidth label='Дата начала выпол.' defaultValue={""}/>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Срок' defaultValue={""}/>
                    <TextField fullWidth label='Дата факт. выполн.' defaultValue={""}/>
                  </Box>
                </Grid>
                <Grid item >
                    <TextField
                      label={'Содержание заявки'}
                      fullWidth
                      multiline
                      minRows={10}
                      hiddenLabel={true}
                      size={'medium'}
                      value={undefined}
                      sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                    />
                </Grid>
                <Grid item>
                    <TextField
                      label={'История заявки'}
                      fullWidth
                      multiline
                      minRows={10}
                      hiddenLabel={true}
                      size={'medium'}
                      value={undefined}
                      sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} sm={6}>
              <Grid container spacing={5} direction={"column"}>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Задача' defaultValue={undefined}/>
                    <TextField fullWidth label='№' defaultValue={undefined}/>
                    <TextField fullWidth label='Дата' defaultValue={undefined}/>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-end"}>
                    <TextField fullWidth label='Исполнитель' defaultValue={undefined}/>
                    <FormControlLabel
                      label='Откр.: '
                      labelPlacement={"start"}
                      control={<Checkbox defaultChecked={true} value={true}/>}
                      sx={{'& .MuiButtonBase-root': {paddingTop: 0, paddingBottom: 0}}}
                    />
                  </Box>
                </Grid>
                <Grid item >
                  <FormControl fullWidth>
                    <InputLabel>Исполнитель</InputLabel>
                    <Select label='Исполнитель' defaultValue=''>
                      <MenuItem value='active'>В работе</MenuItem>
                      <MenuItem value='inactive'>Закрыта</MenuItem>
                      <MenuItem value='pending'>Подготовка</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item >
                  <FormControl fullWidth>
                    <InputLabel>Мастер</InputLabel>
                    <Select defaultValue='' label={'Мастер'}>
                      <MenuItem value='active'>В работе</MenuItem>
                      <MenuItem value='inactive'>Закрыта</MenuItem>
                      <MenuItem value='pending'>Подготовка</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item >
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-start"} alignItems={"center"}>
                    <FormControl>
                      <RadioGroup
                        defaultValue="morning"
                        row
                      >
                        <FormControlLabel value="morning" control={<Radio />} label="Утро" />
                        <FormControlLabel value="evening" control={<Radio />} label="Вечер" />
                      </RadioGroup>
                    </FormControl>
                    <LocalizationProvider adapterLocale={ru} dateAdapter={AdapterDateFns} >
                      <DatePicker label={'Плановая дата'}/>
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-start"} alignItems={"center"}>
                    <FormControlLabel
                      label='Без файла: '
                      labelPlacement={"start"}
                      control={<Checkbox/>}
                      sx={{'& .MuiButtonBase-root': {paddingTop: 0, paddingBottom: 0}}}
                    />
                    <TextField label='Категория' type={"number"} sx={{width: 120}} defaultValue={undefined}/>
                  </Box>
                </Grid>
                <Grid item>
                  <Grid container spacing={5} direction={"row"} alignItems={"start"} justifyContent={"start"}>
                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={13}
                        hiddenLabel={true}
                        size={'medium'}
                        value={undefined}
                        sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-start"} alignItems={"center"}>
                        <ButtonGroup orientation={"vertical"}>
                          <Button size={"large"} variant={"outlined"} ><CalendarMonth color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><ContentSave color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><Folder color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><Microphone color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><Lan color={"secondary"} sx={{fontSize: 20}}/></Button>

                          <Button sx={{fontSize: 15, padding: '5px'}} variant={"outlined"} color={"inherit"} fullWidth>П</Button>
                        </ButtonGroup>
                        <ButtonGroup orientation={"vertical"}>
                          <Button size={"large"} variant={"outlined"} ><FileDocument color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><Check color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} ><Hammer color={"secondary"} sx={{fontSize: 20}}/></Button>
                          <Button size={"large"} variant={"outlined"} fullWidth><Cog color={"secondary"} sx={{fontSize: 20}}/></Button>
                        </ButtonGroup>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Button size={"large"} variant={"outlined"} ><ArrowDownRight color={"secondary"}/></Button>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        hiddenLabel={true}
                        size={'medium'}
                        value={undefined}
                        sx={{'& .MuiOutlinedInput-root': {alignItems: 'baseline'}}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display: 'flex', columnGap: 5}} justifyContent={"flex-start"} alignItems={"center"}>
                        <FormControl fullWidth>
                          <InputLabel>Статус обзвона</InputLabel>
                          <Select label='Статус обзвона' defaultValue='active'>
                            <MenuItem value='active'></MenuItem>
                            <MenuItem value='inactive'>Выполнен</MenuItem>
                            <MenuItem value='pending'>В ожидании</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControlLabel
                          label='Контроль'
                          labelPlacement={"end"}
                          control={<Checkbox/>}
                          sx={{'& .MuiButtonBase-root': {paddingTop: 0, paddingBottom: 0}}}
                        />
                      </Box>

                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Main;
