import {NavLink} from "../../../@core/layouts/types";
import {NotebookEditOutline} from "mdi-material-ui";

const contractor = (): NavLink[] => {
  return [
    {
      title: 'Заявки подрядчика',
      icon: NotebookEditOutline,
      path: '/contractor/requests',
      disabled: true,
    },
    {
      title: 'Подрядчики',
      icon: NotebookEditOutline,
      path: '/contractor',
    },
    {
      title: 'Группа домов и мастеров',
      icon: NotebookEditOutline,
      path: '/contractor/group-of-builds-and-masters',
      disabled: true
    },
    {
      title: 'Журнал ВДГО',
      icon: NotebookEditOutline,
      path: '/contractor/vdgo',
      disabled: true
    },
    {
      title: 'Протокол осмотра МКД',
      icon: NotebookEditOutline,
      path: '/contractor/protocol',
      disabled: true
    },
    {
      title: 'Группа домов, тем и сотрудников',
      icon: NotebookEditOutline,
      path: '/contractor/group-of-builds-and-employers',
      disabled: true
    },
    {
      title: 'Группа тем и мастеров',
      icon: NotebookEditOutline,
      path: '/contractor/group-of-themes-and-masters',
      disabled: true
    },

    {
      title: 'Дома',
      icon: NotebookEditOutline,
      path: '/contractor/build',
      disabled: true
    },
    {
      title: 'Квартиры',
      icon: NotebookEditOutline,
      path: '/contractor/apartment',
      disabled: true
    },
    {
      title: 'Помещения',
      icon: NotebookEditOutline,
      path: '/contractor/room',
      disabled: true
    },
  ]
}

export default contractor
