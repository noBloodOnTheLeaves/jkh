// ** React Imports
import React, {useState, SyntheticEvent} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import {ButtonGroup, Tabs, Tab, TabsProps} from '@mui/material'

// ** Icons Imports
import {useRouter} from "next/router";
import {
  ArrowLeftBold,
  ArrowRightBold, Close, ContentSave, FeatureSearch,
  LinkVariant,
  Printer,
  StarOutline,
} from "mdi-material-ui";
import {styled} from "@mui/material/styles";
import {TabProps} from "@mui/material/Tab";
import DotsVertical from "mdi-material-ui/DotsVertical";
import History from "./tabs/History";
import Main from "./tabs/Main";

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
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const StyledTabs = styled((props: TabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled((props: TabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  '&.Mui-selected': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '0 0 8px 8px',
    marginLeft: 15
  }
}))

const RequestOrder = () => {
  // ** State
  const [tab, setTab] = useState(0);
  const router = useRouter();
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
    <CardContent>
      <Grid container mb={3} justifyContent={"space-between"}>
        <Grid item>
          <Box sx={{display: 'flex', alignItems: 'center', columnGap: 5}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button onClick={() => router.back()}><ArrowLeftBold/></Button>
              <Button disabled><ArrowRightBold/></Button>
            </ButtonGroup>
            <StarOutline/>
            <Typography variant={'h5'}>{router.query.name} работа по
              заявке {router.query.id} от {router.query.date}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{display: 'flex', columnGap: 1}} justifyContent={"flex-end"}>
            <Button size={"small"}><ContentSave/></Button>
            <Button size={"small"}><Printer/></Button>
            <Button size={"small"}><FeatureSearch/></Button>
            <Button size={"small"}><LinkVariant/></Button>
            <Button size={"small"}><DotsVertical/></Button>
            <Button size={"small"}><Close/></Button>
          </Box>
        </Grid>
      </Grid>
      <TabPanel value={tab} index={0}>
          <Main/>
      </TabPanel>
      <TabPanel value={tab} index={1}>
          <History/>
      </TabPanel>
      <TabPanel index={2} value={tab}>

      </TabPanel>
      <TabPanel index={3} value={tab}>

      </TabPanel>
      <StyledTabs
        value={tab}
        onChange={handleChange}
      >
        <StyledTab label="Основная" {...a11yProps(0)} />
        <StyledTab label="История" {...a11yProps(1)} />
        <StyledTab label="Документы" {...a11yProps(2)} />
        <StyledTab label="Ущерб" {...a11yProps(3)} />
      </StyledTabs>
    </CardContent>
  )
}

export default RequestOrder
