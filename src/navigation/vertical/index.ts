// ** Icon imports
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

//import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import {AccountHardHat, EmailOutline, HammerScrewdriver, NotebookEditOutline, TextBoxOutline} from "mdi-material-ui";
import contractor from "./children/contractor";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Главная',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Планирование',
      icon: NotebookEditOutline,
      path: '/planning'
    },
    {
      title: 'Подрядчики',
      icon: AccountHardHat,
      path: '/contractor',
      children: [
        ...contractor()
      ]
    },
    {
      title: 'Работы',
      icon: HammerScrewdriver,
      path: '/jobs',
    },
    {
      title: 'Отчётность',
      icon: TextBoxOutline,
      path: '/reports',
    },
    {
      title: 'Почта',
      icon: EmailOutline,
      path: '/mail',
    },

    /*{
      title: 'Настройки аккаунта',
      icon: AccountCogOutline,
      path: '/account-settings'
    },*/
    {
      sectionTitle: 'Страницы'
    },
    {
      title: 'Страница 404',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Примеры компонентов'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
