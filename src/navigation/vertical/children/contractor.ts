import {NavLink} from "../../../@core/layouts/types";
import {NotebookEditOutline} from "mdi-material-ui";

const contractor = (): NavLink[] => {
  return [
    {
      title: 'Заявки подрядчика',
      icon: NotebookEditOutline,
      path: '/contractor/requests',
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
    },
    {
      title: 'Журнал ВДГО',
      icon: NotebookEditOutline,
      path: '/contractor/vdgo',
    },
    {
      title: 'Протокол осмотра МКД',
      icon: NotebookEditOutline,
      path: '/contractor/protocol',
    },
    {
      title: 'Группа домов, тем и сотрудников',
      icon: NotebookEditOutline,
      path: '/contractor/group-of-builds-and-employers',
    },
    {
      title: 'Группа тем и мастеров',
      icon: NotebookEditOutline,
      path: '/contractor/group-of-themes-and-masters',
    },

    {
      title: 'Дома',
      icon: NotebookEditOutline,
      path: '/contractor/build',
    },
    {
      title: 'Квартиры',
      icon: NotebookEditOutline,
      path: '/contractor/apartment',
    },
    {
      title: 'Помещения',
      icon: NotebookEditOutline,
      path: '/contractor/room',
    },
  ]
}

export default contractor
