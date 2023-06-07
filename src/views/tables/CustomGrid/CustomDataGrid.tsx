// ** MUI Imports
import {darken, lighten, styled} from "@mui/material/styles";
import {DataGrid, GridColDef, GridEventListener, GridRowsProp, GridToolbar} from "@mui/x-data-grid";
import {FC} from "react";
import {GridColumnVisibilityModel} from "@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces";

const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getSelectedBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

const getSelectedHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
  '& .super-app-theme--Open': {
    backgroundColor: getBackgroundColor(theme.palette.info.main, theme.palette.mode),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.info.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.info.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .super-app-theme--Filled': {
    backgroundColor: getBackgroundColor(
      theme.palette.success.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.success.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.success.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .super-app-theme--PartiallyFilled': {
    backgroundColor: getBackgroundColor(
      theme.palette.warning.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.warning.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.warning.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.warning.main,
          theme.palette.mode,
        ),
      },
    },
  },
  '& .super-app-theme--Rejected': {
    backgroundColor: getBackgroundColor(
      theme.palette.error.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
    },
    '&.Mui-selected': {
      backgroundColor: getSelectedBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
      '&:hover': {
        backgroundColor: getSelectedHoverBackgroundColor(
          theme.palette.error.main,
          theme.palette.mode,
        ),
      },
    },
  },
}));

interface TableStickyHeaderProps {
  columns: GridColDef[],
  rows: GridRowsProp,
  onRowClick?: GridEventListener<'rowClick'>,
  onColumnVisibilityModelChange?: (model: GridColumnVisibilityModel) => void,
  columnVisibilityModel?: GridColumnVisibilityModel,
  hideFooter?: boolean,
  autoHeight?: boolean,
  disableColumnMenu?: boolean,
  slots?: boolean,
  style?: any,
  className?: string
}

const CustomDataGrid: FC<TableStickyHeaderProps> = ({
                                                      rows,
                                                      columns,
                                                      onRowClick,
                                                      onColumnVisibilityModelChange,
                                                      columnVisibilityModel,
                                                      hideFooter = false,
                                                      autoHeight = false,
                                                      disableColumnMenu = true,
                                                      slots = true,
                                                      style,
                                                      className
                                                    }) => {
  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 25,
          },
        },
      }}
      pageSizeOptions={[5, 25, 50, 100]}
      disableRowSelectionOnClick
      slots={slots ?{
        toolbar: GridToolbar,
      } : undefined}
      disableColumnMenu={disableColumnMenu}
      getRowClassName={(params) => `super-app-theme--${params.row.status}`}
      onRowClick={onRowClick}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={onColumnVisibilityModelChange}
      hideFooter={hideFooter}
      autoHeight={autoHeight}
      style={style}
      sx={onRowClick ? {
        '& .MuiDataGrid-row:hover': {
          cursor: 'pointer'
        }
      } : {}}
      className={className}
    />
  )
}

export default CustomDataGrid
