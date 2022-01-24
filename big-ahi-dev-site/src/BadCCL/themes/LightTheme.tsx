import { createTheme, ThemeOptions } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';
import generateScrollStyles from './ScrollsCss';
import Tokens from './Tokens';

const theme = createTheme({
  palette: {
    type: 'light',
    common: {
      white: Tokens.colors.lightTheme.white,
      black: Tokens.colors.lightTheme.black,
    },
    background: {
      paper: Tokens.colors.lightTheme.bgPaper,
      default: Tokens.colors.lightTheme.bgDefault,
    },
    primary: {
      main: Tokens.colors.lightTheme.primaryMain,
    },
    secondary: {
      main: Tokens.colors.lightTheme.secondaryMain,
    },
    error: {
      main: Tokens.colors.lightTheme.errorMain,
    },
    warning: {
      main: Tokens.colors.lightTheme.warningMain,
    },
    info: {
      main: Tokens.colors.lightTheme.infoMain,
    },
    success: {
      main: Tokens.colors.lightTheme.successMain,
    },
    text: {
      primary: Tokens.colors.lightTheme.textPrimary, // DEFAULT === rgba(0,0,0,0.87)
      // Waiting for design definition for secondary
      secondary: Tokens.colors.lightTheme.textSecondary, // DEFAULT === rgba(0,0,0,0.54)
      disabled: Tokens.colors.lightTheme.textDisabled, // DEFAULT === rgba(0,0,0,0.38)
      // Waiting for design definition for hint
      // hint: Tokens.colors.lightTheme.textHint,           // DEFAULT === rgba(0,0,0,0.12)
      icon: Tokens.colors.lightTheme.textIcon,
    },
    action: {
      hover: Tokens.colors.lightTheme.tableRowHover, // DEFAULT === rgba(0,0,0,0.87)
      hoverOpacity: 0.1, // DEFAULT === 0.04
      selected: Tokens.colors.lightTheme.actionHover, // DEFAULT === rgba(0,0,0,0.08)
      disabled: Tokens.colors.lightTheme.textDisabled, // DEFAULT === rgba(0,0,0,0.12)
      selectedOpacity: 0.1,
    },
    divider: Tokens.colors.lightTheme.divider,
    contrastThreshold: 3, // DEFAULT === 3
    tonalOffset: 0.2, // DEFAULT === 0.2
    grey: {
      50: Tokens.colors.lightTheme.grey['50'],
      100: Tokens.colors.lightTheme.grey['100'],
      200: Tokens.colors.lightTheme.grey['200'],
      300: Tokens.colors.lightTheme.grey['300'],
      400: Tokens.colors.lightTheme.grey['400'],
      500: Tokens.colors.lightTheme.grey['500'],
      600: Tokens.colors.lightTheme.grey['600'],
      700: Tokens.colors.lightTheme.grey['700'],
      800: Tokens.colors.lightTheme.grey['800'],
      900: Tokens.colors.lightTheme.grey['900'],
      A100: Tokens.colors.lightTheme.grey['A100'],
      A200: Tokens.colors.lightTheme.grey['A200'],
      A400: Tokens.colors.lightTheme.grey['A400'],
      A700: Tokens.colors.lightTheme.grey['A700'],
    },
  },
  direction: 'ltr',
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: Tokens.sizing.title1,
      fontWeight: 400,
    },
    h2: {
      fontSize: Tokens.sizing.title2,
      fontWeight: 500,
    },
    h3: {
      fontSize: Tokens.sizing.title3,
      fontWeight: 500,
    },
    h4: {
      fontSize: Tokens.sizing.title4,
      fontWeight: 500,
    },
    h5: {
      fontSize: Tokens.sizing.title5,
      fontWeight: 500,
    },
    body1: {
      fontSize: Tokens.sizing.textNormal,
      fontWeight: 400,
    },
    body2: {
      fontSize: Tokens.sizing.textSmall,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: Tokens.sizing.subtitle2,
      fontWeight: 400,
      lineHeight: Tokens.sizing.title2,
    },
    button: {
      fontSize: Tokens.sizing.textSmall,
      textTransform: 'capitalize',
    },
  },
  props: {},
} as ThemeOptions);

theme.overrides = {
  // OVERRIDE COLOR VALUES SHOULD COME FROM THEME ABOVE
  MuiTypography: {
    root: {
      color: theme.palette.text.primary,
    },
  },

  MuiButtonBase: {
    root: {
      color: theme.palette.text.primary,
      '&.MuiButton-root .MuiButton-startIcon': {
        marginLeft: theme.spacing(-1),
        height: theme.spacing(3),
        width: theme.spacing(3),
        marginRight: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },

  MuiLink: {
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'none',
      '&:hover': {
        color: theme.palette.primary.dark,
      },
      '&:active': {
        color: theme.palette.primary.light,
      },
    },
  },

  MuiButtonGroup: {
    root: {
      '& .MuiButton-sizeLarge': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(12),
        height: theme.spacing(5),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: theme.typography.fontFamily,
        '& .MuiButton-label': {
          fontFamily: theme.typography.fontFamily,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: theme.typography.fontSize,
          lineHeight: Tokens.sizing.title6,
        },
      },
      '& .MuiButton-sizeSmall': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(12),
        height: theme.spacing(4),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: theme.typography.fontFamily,
        '& .MuiButton-label': {
          fontFamily: theme.typography.fontFamily,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: theme.typography.fontSize,
          lineHeight: Tokens.sizing.title6,
        },
      },
      '& .MuiButtonGroup-groupedOutlinedSecondary': {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(0),
        width: theme.spacing(8),
        height: theme.spacing(5),
        left: theme.spacing(0),
        top: theme.spacing(0),
        textAlign: 'center',
        textTransform: 'capitalize',
        '&:hover': {
          borderColor: Tokens.colors.lightTheme.infoMain,
        },
      },
      '& .MuiSvgIcon-root': {
        fontSize: Tokens.sizing.title6,
      },
      '& .splitButtonIcon': {
        width: theme.spacing(5),
        height: theme.spacing(4),
      },
      '& .splitButtonText': {
        width: 'auto',
        padding: theme.spacing(0.5, 2),
      },
    },
    contained: {
      boxShadow: theme.shadows[0],
    },
  },

  MuiButton: {
    root: {
      height: theme.spacing(4),
      fontSize: theme.spacing(1.75),
      lineHeight: theme.spacing(0),
    },
    sizeSmall: {
      ...theme.typography.button,
      fontSize: theme.spacing(1.5),
      height: theme.spacing(3.75),
      lineHeight: theme.spacing(0),
    },
    sizeLarge: {
      ...theme.typography.button,
      fontSize: theme.spacing(2),
      height: theme.spacing(4.5),
      lineHeight: theme.spacing(0),
    },
    containedPrimary: {
      boxShadow: theme.shadows[0],
      '&:hover': {
        boxShadow: theme.shadows[0],
      },
      '&$disabled': {
        backgroundColor: theme.palette.grey['400'],
        color: theme.palette.primary.contrastText,
      },
    },
    outlinedPrimary: {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: Tokens.opacity.transparentColor,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
      '&$disabled': {
        borderColor: theme.palette.grey['400'],
      },
    },
    outlinedSecondary: {
      borderColor: theme.palette.secondary.main,
      borderWidth: 1,
      borderStyle: 'solid',
      '&$disabled': {
        borderColor: theme.palette.grey['400'],
      },
    },
  },
  MuiFab: {
    primary: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[4],
      '&:hover': {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.action.hover,
      },
      '&:active': {
        boxShadow: theme.shadows[10],
      },
    },
  },

  MuiTooltip: {
    arrow: {
      color: Tokens.colors.lightTheme.tooltipBg,
      fontSize: 9,
    },
    tooltip: {
      maxWidth: '90vw',
      padding: theme.spacing(1.25, 2),
      fontWeight: theme.typography.fontWeightRegular,
      margin: theme.spacing(0),
      backgroundColor: Tokens.colors.lightTheme.tooltipBg,
      color: theme.palette.getContrastText(Tokens.colors.lightTheme.tooltipBg),
      fontSize: Tokens.sizing.textLarge,
      boxShadow: theme.shadows[6],
      '&PlacementBottom&,&PlacementTop&': {
        margin: theme.spacing(1, 0),
      },
      '&PlacementLeft&,&PlacementRight&': {
        margin: theme.spacing(0, 1),
      },
    },
  },

  MuiSlider: {
    root: {
      height: 3,
      padding: '15px 0',
      '&$disabled': {
        color: theme.palette.grey['400'],
      },
    },
    rail: {
      height: 4,
      borderRadius: 6,
      backgroundColor: theme.palette.grey['400'],
      opacity: Tokens.opacity.semi,
    },
    track: {
      height: 4,
      opacity: Tokens.opacity.semi,
      '$disabled &': {
        opacity: Tokens.opacity.none,
      },
    },
    thumb: {
      height: theme.spacing(2),
      width: theme.spacing(2),
      marginTop: theme.spacing(-0.75),
      boxShadow: theme.shadows[4],
      transition: 'none',
      '&$disabled': {
        height: theme.spacing(2),
        width: theme.spacing(2),
        marginTop: theme.spacing(-0.75),
        boxShadow: theme.shadows[0],
      },
      '&.MuiSlider-active': {
        boxShadow: '0px 0px 0px 8px ' + Tokens.colors.lightTheme.sliderActive,
      },
      '& .MuiSlider-valueLabel *': {
        lineHeight: 1.2,
      },
    },
    valueLabel: {
      left: 'calc(-50%)',
      top: -22,
      '& *': {
        ...theme.typography.body2,
        background: 'transparent',
        color: theme.palette.text.primary,
        lineHeight: theme.spacing(1.5),
      },
    },
    disabled: {
      track: {
        opacity: Tokens.opacity.none,
      },
    },
  },

  MuiChip: {
    root: {
      fontSize: Tokens.sizing.textSmall,
      borderRadius: theme.spacing(3.75),
      backgroundColor: theme.palette.background.default,
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  MuiFormControlLabel: {
    label: {
      fontSize: Tokens.sizing.textLarge,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  MuiFormControl: {
    root: {
      '& .MuiInputLabel-root': {
        fontSize: theme.spacing(1.75),
      },
      '& .MuiFormLabel-root.MuiInputLabel-shrink': {
        fontSize: Tokens.sizing.title4,
        color: theme.palette.text.secondary,
        '&.Mui-focused': {
          color: theme.palette.info.main,
          '&.Mui-error': {
            color: theme.palette.error.main,
          },
        },
      },
      '& .MuiFormLabel-root.Mui-error': {
        color: theme.palette.error.main,
      },
      '& .MuiFormLabel-root.Mui-disabled': {
        color: theme.palette.text.disabled,
      },
    },
  },
  MuiSelect: {
    root: {
      '& .MuiInputLabel-root': {
        fontSize: theme.spacing(1.75),
      },
    },
    select: {
      '&:focus': {
        backgroundColor: Tokens.opacity.transparentColor,
      },
    },
  },

  MuiMenu: {
    paper: {
      boxShadow: theme.shadows[8],
    },
    list: {
      backgroundColor: Tokens.colors.lightTheme.bgPaper,
    },
  },

  MuiMenuItem: {
    root: {
      fontSize: Tokens.sizing.textLarge,
      fontWeight: 'normal',
      backgroundColor: 'transparent',
    },
  },

  MuiInputBase: {
    input: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },

  MuiInput: {
    underline: {
      '&:hover:not(.Mui-disabled):before': {
        borderBottomWidth: '2px',
      },
      '&$disabled:before': {
        borderBottomStyle: 'solid',
        borderBottomColor: Tokens.colors.lightTheme.textDisabled,
      },
    },
  },

  MuiFormLabel: {
    root: {
      color: theme.palette.text.secondary,
      fontSize: Tokens.sizing.textLarge,
    },
  },

  MuiTabs: {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '& .MuiTabs-flexContainer button.MuiButtonBase-root': {
        borderBottomWidth: 'thin',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.grey['300'],
        '&.Mui-disabled': {
          opacity: Tokens.opacity.full,
          '& span': {
            opacity: Tokens.opacity.semi,
          },
        },
      },
    },
    indicator: {
      backgroundColor: theme.palette.primary.main,
      height: theme.spacing(0.5),
    },
  },

  MuiTab: {
    root: {
      fontWeight: theme.typography.fontWeightBold,
    },
    textColorInherit: {
      fontSize: Tokens.sizing.textLarge,
      opacity: 1,
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:focus': {
        color: theme.palette.primary.main,
      },
    },
    selected: {
      color: theme.palette.primary.main,
    },
  },

  MuiCardHeader: {
    avatar: {
      '& > .MuiSvgIcon-root': {
        verticalAlign: 'top',
      },
    },
    action: {
      marginTop: theme.spacing(-0.5),
      marginBottom: theme.spacing(-0.5),
      '& .MuiSvgIcon-root': {
        fillOpacity: '25%',
      },
    },
  },

  MuiCardContent: {
    root: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: '1.5714285714',
      '&:last-child': {
        paddingBottom: theme.spacing(2),
      },
    },
  },

  MuiCardActions: {
    root: {
      justifyContent: 'flex-end',
    },
  },

  MuiMobileStepper: {
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    dot: {
      backgroundColor: theme.palette.grey['400'],
    },
  },
  MuiStepIcon: {
    root: {
      color: theme.palette.grey['400'],
    },
    text: {
      color: theme.palette.primary.contrastText,
    },
  },
  MuiDialogTitle: {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  MuiAppBar: {
    root: {
      boxShadow: theme.shadows[0],
    },
    colorPrimary: {
      backgroundColor: Tokens.colors.lightTheme.appBarColor,
    },
  },
  MuiAvatar: {
    root: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(21),
      letterSpacing: theme.spacing(0.02),
    },
  },
  MuiDivider: {
    light: {
      backgroundColor: Tokens.colors.lightTheme.dividerLight,
    },
  },
  MuiBreadcrumbs: {
    li: {
      fontSize: theme.spacing(2),
      color: Tokens.colors.lightTheme.breadCrumbInactive,

      '& .MuiLink-root': {
        //Remove capitalization if the element is a Link
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover': {
          color: theme.palette.common.white,
          textDecoration: 'none',
        },
      },

      //Adjust last child element
      '&:last-child .MuiTypography-root': {
        color: theme.palette.common.white,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.spacing(2),
        textDecoration: 'none',
      },
    },
    separator: {
      color: Tokens.colors.lightTheme.breadCrumbInactive,
    },
  },
  MuiExpansionPanel: {
    root: {
      '&$expanded': {
        margin: theme.spacing(0),
      },
      //Remove auto added borderline in favor of borderbottom
      '&:before': {
        content: 'none',
      },
      borderBottomColor: Tokens.colors.lightTheme.themeDivider,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    },
  },
  MuiExpansionPanelSummary: {
    root: {
      padding: theme.spacing(0, 2),
      '& .MuiTypography-root': {
        fontWeight: theme.typography.fontWeightMedium,
      },
      '& .MuiIconButton-root': {
        color: theme.palette.text.primary,
      },
      height: theme.spacing(6),
      '&$expanded': {
        height: theme.spacing(6),
        'min-height': 'auto',
      },
    },
  },
  MuiExpansionPanelDetails: {
    root: {
      padding: theme.spacing(0, 2, 2),
    },
  },
  MuiTableCell: {
    root: {
      fontSize: Tokens.sizing.textNormal,
      borderBottomColor: Tokens.colors.lightTheme.tableBorder,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    head: {
      color: Tokens.colors.lightTheme.tableTextHead,
      fontSize: Tokens.sizing.textSmall,
      fontWeight: theme.typography.fontWeightRegular,
      padding: theme.spacing(1, 2),
      '&[class*=-sizeSmall]': {
        padding: theme.spacing(1, 2),
      },
      '& .MuiTableSortLabel-root, .MuiTableSortLabel-root:hover': {
        color: Tokens.colors.lightTheme.tableTextHead,
      },
    },
    body: {
      fontWeight: theme.typography.fontWeightRegular,
      padding: theme.spacing(1.75, 2, 1.625),
    },
    sizeSmall: {
      padding: theme.spacing(0.75, 2, 0.625),
    },
  },
  MuiTableHead: {
    root: {
      '& .MuiTableRow-root:hover': {
        background: 'none',
      },
    },
  },
  MuiListItem: {
    root: {
      paddingTop: theme.spacing(0.875),
      paddingBottom: theme.spacing(0.875),
    },
  },
  MuiListItemText: {
    root: {
      color: theme.palette.text.primary,
    },
  },

  MuiSnackbarContent: {
    root: {
      '&.MuiPaper-outlined': {
        backgroundColor: Tokens.colors.lightTheme.white,
        borderColor: Tokens.colors.lightTheme.black,
        color: Tokens.colors.lightTheme.snackbarOutlinedText,
      },
      backgroundColor: Tokens.colors.lightTheme.snackbarBg,
      fontSize: Tokens.sizing.textNormal,
      fontWeight: theme.typography.fontWeightMedium,
    },
    message: {
      verticalAlign: 'center',
    },
  },
  MuiAlert: {
    root: {
      fontSize: Tokens.sizing.textNormal,
      fontWeight: theme.typography.fontWeightMedium,
      alignItems: 'center',
    },
    outlinedSuccess: {
      backgroundColor: Tokens.colors.lightTheme.outlinedSuccessBg,
      color: Tokens.colors.lightTheme.alertOutlinedText,
    },
    outlinedWarning: {
      backgroundColor: Tokens.colors.lightTheme.outlinedWarningBg,
      color: Tokens.colors.lightTheme.alertOutlinedText,
    },
    outlinedError: {
      backgroundColor: Tokens.colors.lightTheme.outlinedErrorBg,
      color: Tokens.colors.lightTheme.alertOutlinedText,
    },
    outlinedInfo: {
      backgroundColor: Tokens.colors.lightTheme.outlinedInfoBg,
      color: Tokens.colors.lightTheme.alertOutlinedText,
    },
    icon: {
      alignItems: 'center',
    },
  },
  MuiBadge: {
    badge: {
      color: theme.palette.error.contrastText,
      backgroundColor: Tokens.colors.lightTheme.badgeBg,
      fontSize: Tokens.sizing.textSmall,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: Tokens.sizing.textNormal,
      minWidth: theme.spacing(2.25),
      height: theme.spacing(2.25),
      padding: theme.spacing(0.25, 0.75),
    },
    anchorOriginBottomRightCircle: {
      right: theme.spacing(0),
      bottom: theme.spacing(1),
      transform: 'scale(.75) translate(100%, 5%)',
    },
  },
  MuiBackdrop: {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      color: theme.palette.common.white,
      MuiCircularProgress: {
        circle: {
          color: Tokens.colors.lightTheme.circularProgressColor,
        },
      },
    },
  },
  MuiDialog: {
    root: {
      '& .MuiBackdrop-root': {
        zIndex: 'auto',
      },
    },
  },
  MuiDialogContent: {
    root:
      navigator.appVersion.indexOf('Win') !== -1
        ? {
            ...generateScrollStyles(theme),
            overflowY: navigator.userAgent.indexOf('Firefox') !== -1 ? 'auto' : ('overlay' as any),
          }
        : {
            overflowY: navigator.userAgent.indexOf('Firefox') !== -1 ? 'auto' : ('overlay' as any),
          },
  },
  MuiPickersCalendar: {
    week: {
      '& .MuiIconButton-root:hover:not(.MuiPickersDay-daySelected)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
  MuiSvgIcon: {
    root: {
      fontSize: Tokens.sizing.iconReg,
    },
    fontSizeSmall: {
      fontSize: Tokens.sizing.iconSm,
    },
    fontSizeLarge: {
      fontSize: Tokens.sizing.iconLg,
    },
  },
  MuiTablePagination: {
    root: {
      '& .MuiTablePagination-spacer': {
        flex: 1,
      },
      '& p.MuiTypography-body2, & .MuiSelect-selectMenu, & nav ul li button': {
        fontSize: theme.typography.fontSize,
        lineHeight: Tokens.sizing.title6,
      },
      '& .MuiSelect-selectMenu': {
        textAlign: 'left',
        textAlignLast: 'left',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(0),
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: Tokens.colors.lightTheme.textPrimary + Tokens.opacity.A50,
      },
      '& nav ul li button.Mui-selected': {
        color: Tokens.colors.lightTheme.infoMain,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: Tokens.sizing.title4,
        backgroundColor: 'transparent',
      },
      '& .MuiPaginationItem-page.MuiPaginationItem-textPrimary.Mui-selected:hover': {
        background: 'transparent',
      },
      [theme.breakpoints.down('sm')]: {
        '& .MuiTablePagination-selectRoot, & .MuiTablePagination-spacer + p': {
          display: 'none',
        },
      },
    },
  },
  MuiPagination: {
    root: {
      '& ul li button.MuiPaginationItem-page': {
        fontSize: theme.typography.fontSize,
        lineHeight: Tokens.sizing.title6,
      },
      '& .MuiPagination-ul li button.Mui-selected': {
        color: Tokens.colors.lightTheme.infoMain,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: Tokens.sizing.title4,
        backgroundColor: 'transparent',
      },
    },
  },
  MuiPickersBasePicker: {
    container: {
      '& .MuiPickersCalendarHeader-transitionContainer p': {
        fontSize: theme.spacing(2),
        fontWeight: theme.typography.fontWeightRegular,
      },
      '& .MuiPickersCalendarHeader-iconButton': {
        padding: theme.spacing(1.5),
        margin: theme.spacing(0, 0.5),
      },
    },
  },
  MuiAutocomplete: {
    root: {
      '& .MuiChip-root': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        border: 'none',
        '& .MuiChip-label': {
          fontWeight: theme.typography.fontWeightMedium,
        },
        '& .MuiChip-deleteIcon': {
          color: Tokens.colors.lightTheme.chipDeleteIcon,
          width: theme.spacing(2.25),
          height: theme.spacing(2.25),
        },
      },
    },
    popper: {
      '& .MuiAutocomplete-listbox': {
        maxHeight: theme.spacing(32),
        '& .MuiAutocomplete-option': {
          height: theme.spacing(6),
        },
        '& .MuiAutocomplete-option[aria-selected="true"], .MuiAutocomplete-option:active': {
          backgroundColor: Tokens.colors.lightTheme.autocompletePopperItemSelected,
        },
      },
    },
  },
  MuiTextField: {
    root: {
      '& .MuiInputLabel-root': {
        fontSize: theme.spacing(1.75),
      },
    },
  },
  MuiTreeItem: {
    root: {
      '& .MuiTreeItem-label': {
        fontSize: Tokens.sizing.title4,
      },
    },
  },
  MuiDrawer: {
    paper:
      navigator.appVersion.indexOf('Win') !== -1
        ? {
            ...generateScrollStyles(theme),
            overflowY: 'overlay' as any,
          }
        : {
            overflowY: 'overlay' as any,
          },
  },
} as Overrides;

export default theme;
