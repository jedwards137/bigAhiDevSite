// import Color from 'color';
import Opacity from './Opacity';
import Palette from './Palette';

// const Lighten = (color: string, ratio: number) => {
//   return Color(color).lighten(ratio).hex();
// };

interface DynamicObjects {
  [name: string]: any;
}

const Tokens: DynamicObjects = {
  colors: {
    lightTheme: {
      // THEME TOKENS
      white: Palette.colors.common.white,
      black: Palette.colors.common.black,
      bgPaper: Palette.colors.common.white,
      bgDefault: Palette.colors.cornflower['50'],
      primaryMain: Palette.colors.byBlue['800'],
      secondaryMain: Palette.colors.darkBlueGrey['900'],
      errorMain: Palette.colors.red['600'],
      snackbarOutlinedText: Palette.colors.darkBlueGrey['900'],
      alertOutlinedText: Palette.colors.darkBlueGrey['800'],
      outlinedErrorBg: Palette.colors.red['50'],
      warningMain: Palette.colors.orange['A400'],
      outlinedWarningBg: Palette.colors.orange['50'],
      infoMain: Palette.colors.byBlue['800'],
      outlinedInfoBg: Palette.colors.byBlue['50'],
      successMain: Palette.colors.green['600'],
      outlinedSuccessBg: Palette.colors.green['50'],
      textPrimary: Palette.colors.darkBlueGrey['800'],
      textSecondary: Palette.colors.darkBlueGrey['800'] + Opacity.alpha.A74,
      textDisabled: Palette.colors.darkBlueGrey['800'] + Opacity.alpha.A40,
      textHint: Palette.colors.darkBlueGrey['500'],
      textIcon: Palette.colors.darkBlueGrey['800'] + Opacity.alpha.A50,
      actionHover: Palette.colors.byBlue['50'],
      actionSelected: Palette.colors.byBlue['400'],
      divider: Palette.colors.grey['200'],
      dividerLight: Palette.colors.grey['400'] + Opacity.alpha.A25,
      grey: {
        50: Palette.colors.grey['50'],
        100: Palette.colors.grey['100'],
        200: Palette.colors.grey['200'],
        300: Palette.colors.grey['300'],
        400: Palette.colors.grey['400'],
        500: Palette.colors.grey['500'],
        600: Palette.colors.grey['600'],
        700: Palette.colors.grey['700'],
        800: Palette.colors.grey['800'],
        900: Palette.colors.grey['900'],
        A100: Palette.colors.grey['A100'],
        A200: Palette.colors.grey['A200'],
        A400: Palette.colors.grey['A400'],
        A700: Palette.colors.grey['A700'],
      },

      //OVERRIDE TOKENS
      appBarColor: Palette.colors.blue['800'],
      drawerItemMenuHover: Palette.colors.common.black + Opacity.alpha.A19,
      drawerBg: Palette.colors.blueGrey['900'],
      drawerText: Palette.colors.common.white,
      drawerHoverBorder: Palette.colors.byBlue['400'],
      breadCrumbInactive: Palette.colors.common.white + Opacity.alpha.A80,
      themeDivider: Palette.colors.grey['300'],
      tooltipBg: Palette.colors.darkBlueGrey['800'],
      themeGradient:
        'linear-gradient(180deg, ' +
        Palette.colors.byBlue['800'] +
        ' 0%, ' +
        Palette.colors.cornflower['50'] +
        ' 100%)',
      bgDecorA: Palette.colors.blue['800'],
      bgDecorB: Palette.colors.byBlue['400'],
      tableBorder: Palette.colors.grey['300'],
      tableTextHead: Palette.colors.grey['600'],
      tableRowBg: Palette.colors.common.white,
      // tableRowBgAlt: Lighten(Palette.colors.cornflower['50'], 0.02),
      paperOutline: Palette.colors.darkBlueGrey['100'],
      snackbarBg: Palette.colors.darkBlueGrey['900'],
      badgeBg: Palette.colors.red['600'],
      circularProgressColor: Palette.colors.cornflower['50'],
      badHeaderContrastText: Palette.colors.common.white,
      luiWeekNumberColumnBg: Palette.colors.common.black + Opacity.alpha.A05,
      datePickerWhiteBgDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      skeletonLight: Palette.colors.common.black + Opacity.alpha.A05,
      exceptionFilterColor: Palette.colors.common.white,
      tableScrollbarBg: Palette.colors.common.black + Opacity.alpha.A25,
      undefined: Palette.colors.lime['A400'], // DEBUG VALUE

      // CHART TOKENS
      chartByBlue: Palette.colors.byBlue['700'],
      chartYellow: Palette.colors.yellow['700'],
      chartPink: Palette.colors.pink['500'],
      chartPurple: Palette.colors.purple['600'],
      chartGreen: Palette.colors.green['500'],
      chartOrange: Palette.colors.orange['600'],
      chartLime: Palette.colors.lime['600'],
      chartDarkBlueGrey: Palette.colors.darkBlueGrey['500'],
      chartBlue: Palette.colors.blue['A400'],
      chartCornflower: Palette.colors.cornflower['500'],
      chartbyDarkBlue: Palette.colors.byDarkBlue['A400'],
      chartTeal: Palette.colors.teal['500'],

      chartBg0: Palette.colors.blue['A400'],
      chartBg1: Palette.colors.cornflower['50'] + Opacity.alpha.A50,

      // PRIORITY STRIP
      priority: {
        0: Palette.colors.grey['400'],
        1: Palette.colors.red['400'],
        2: Palette.colors.orange['600'],
        3: Palette.colors.yellow['700'],
        4: Palette.colors.purple['200'],
        5: Palette.colors.red['600'],
        6: Palette.colors.orange['600'],
        7: Palette.colors.green['500'],
        8: Palette.colors.byBlue['800'],
      },

      // OBJECT STATUS
      objectStatus: {
        primary: {
          text: Palette.colors.common.white,
          0: Palette.colors.darkBlueGrey['900'],
          1: Palette.colors.red['400'],
          2: Palette.colors.orange['600'],
          3: Palette.colors.yellow['700'],
          4: Palette.colors.purple['200'],
          5: Palette.colors.red['400'],
          6: Palette.colors.orange['600'],
          7: Palette.colors.green['500'],
          8: Palette.colors.byBlue['800'],
          9: Palette.colors.grey['400'],
        },
        secondary: {
          text: Palette.colors.common.black,
          0: Palette.colors.common.white,
          1: Palette.colors.red['50'],
          2: Palette.colors.orange['50'],
          3: Palette.colors.yellow['50'],
          4: Palette.colors.purple['50'],
          5: Palette.colors.red['50'],
          6: Palette.colors.orange['50'],
          7: Palette.colors.green['50'],
          8: Palette.colors.byBlue['50'],
          9: Palette.colors.grey['50'],
        },
        tertiary: {
          text: Palette.colors.common.black,
        },
      },

      objectHeader: {
        divider: Palette.colors.grey['200'],
      },

      pivot: {
        affectedCell: Palette.colors.teal['A100'] + Opacity.alpha.A40,
        editingCell: Palette.colors.teal['A100'],
        pastCellValue: Palette.colors.cornflower['900'],
        currentTimeDivider: Palette.colors.byBlue['400'],
        lockIcon: Palette.colors.purple['400'],
        lockedCell: Palette.colors.purple['100'] + Opacity.alpha.A50,
        highlightCell: Palette.colors.yellow['100'],
        noDataCell: {
          'background-color': 'transparent',
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 4 4'%3E%3Cpath fill='${Palette.colors.darkBlueGrey[
            '200'
          ].replace(
            /#/g,
            '%23',
          )}' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        },
      },

      // NOTIFICATION
      notificationBg: Palette.colors.cornflower['50'],
      notificationDivider: Palette.colors.grey['200'],
      notificationTextColor: Palette.colors.darkBlueGrey['900'],
      notificationStatusIconBg: Palette.colors.byBlue[400],
      notificationStatusIconText: Palette.colors.common.white,
      notificationBlue: Palette.colors.blue['500'],
      notificationGrey: Palette.colors.grey['500'],
      notificationTitle: Palette.colors.common.black,
      notificationIconColor: Palette.colors.byBlue[800],
      headerChip: Palette.colors.green['500'],

      // ITEM LIST
      messageStatusGreen: Palette.colors.green['500'],
      messageStatusGrey: Palette.colors.grey['300'],
      borderGrey: Palette.colors.grey['200'],

      // PRODUCT TOKENS
      navAnalytics: Palette.colors.purple['300'],
      navControlTower: Palette.colors.byBlue['400'],
      navExceptions: Palette.colors.teal['A400'],
      navGeneric: Palette.colors.byBlue['400'],
      navHome: Palette.colors.lime['A700'],
      navInsights: Palette.colors.purple['300'],
      navInvestigations: Palette.colors.teal['A400'],
      navLiveView: Palette.colors.orange['A200'],
      brandLogo: Palette.colors.byBlue['400'],

      // BORDER LINEAR PROGRESS
      borderLinearBackgroundColor: Palette.colors.grey['300'],
      borderLinearBarColor: Palette.colors.red['400'],

      // COLLABORATION TOKENS
      collabMemberStatus: Palette.colors.green['500'],
      collabHeaderBorder: Palette.colors.grey['300'],
      scenarioPollNotification: Palette.colors.cornflower['50'],
      replyMessageLeftBorder: Palette.colors.byBlue['800'],
      scenarioIconColor: Palette.colors.green['500'],
      scenarioPollIconColor: Palette.colors.byBlue['800'],
      collabTabsHeader: Palette.colors.grey['500'],
      collabTextFieldBackground: Palette.colors.common.white,
      messageBoxTextFieldBorder: Palette.colors.darkBlueGrey['800'],
      collabMemberHeader: Palette.colors.cornflower['50'],
      collapseHeading: Palette.colors.grey['300'],
      collabExtraMember: Palette.colors.common.black,
      defaultAvatar: Palette.colors.purple['500'],
      collabCollapseHeader: Palette.colors.byBlue['800'],
      collabMessageBoxBackground: Palette.colors.grey['50'],
      collabTextFieldBorderColor: Palette.colors.grey['200'],
      memberListBadgeColor: Palette.colors.red['700'],
      messageTimeStamp: Palette.colors.grey['600'],
      pollTimeStamp: Palette.colors.grey['700'],
      pollLink: Palette.colors.byBlue['900'],
      messageLink: Palette.colors.byBlue['800'],
      collabTabTitleColor: Palette.colors.byBlue['900'],
      collabPollIconColor: Palette.colors.grey['500'],
      cancelButtonColor: Palette.colors.common.black,
      collabDateTimeStripColor: Palette.colors.grey['400'],
      collabIconColor: Palette.colors.grey['400'],
      collabBoxShadow: Palette.colors.common.black + Opacity.alpha.A05,
      collabPollOptionBg: Palette.colors.common.white,
      collabPollText: Palette.colors.common.black + Opacity.alpha.A55,
      collabBarPurple: Palette.colors.purple['300'],
      collabTrashIcon: Palette.colors.common.black + Opacity.alpha.A54,
      fileUploadAreaBorder: Palette.colors.darkBlueGrey['800'] + Opacity.alpha.A50,
      fileUploadAreaHover: Palette.colors.cornflower['50'],
      sliderActive: Palette.colors.byBlue['800'] + Opacity.alpha.A16,
      chipDeleteIcon: Palette.colors.common.white + Opacity.alpha.A70,
      autocompletePopperItemSelected: Palette.colors.byBlue['400'] + Opacity.alpha.A10,
      collabTabScrollColor: Palette.colors.grey['800'] + Opacity.alpha.A40,
      collabTabScrollBackground: Palette.colors.common.white,
      collabUserListTooltipColor: Palette.colors.common.white,

      //LUI TABLE
      materialTableScrollColor: Palette.colors.grey['800'] + Opacity.alpha.A40,
      materialTableScrollBackground: Palette.colors.common.white,
      materialTbaleFixedColumnBorder: Palette.colors.darkBlueGrey['800'],
      materialTableToolbarBackground: Palette.colors.grey['50'],
      defaultCell: Palette.colors.common.white,
      alternateRow: Palette.colors.cornflower['50'] + Opacity.alpha.A50,
      tableRowHover: Palette.colors.grey['100'],
      selectedRow: Palette.colors.byBlue['50'],
      toolbar: Palette.colors.grey['50'],
      readOnlyRow: Palette.colors.grey['100'],

      // TOOLTIP
      tooltipDetailLabel: Palette.colors.common.white + Opacity.alpha.A60,
    },
    darkTheme: {
      // THEME TOKENS
      white: Palette.colors.common.white,
      black: Palette.colors.common.black,
      bgPaper: Palette.colors.byDarkBlue['A400'],
      bgDefault: Palette.colors.darkBlueGrey['A700'],
      primaryMain: Palette.colors.byBlue['400'],
      primaryContrastText: Palette.colors.common.white, // OVERRIDING ACCESSIBLE CONTRAST
      secondaryMain: Palette.colors.common.white,
      errorMain: Palette.colors.red['600'],
      snackbarOutlinedText: Palette.colors.darkBlueGrey['900'],
      alertOutlinedText: Palette.colors.darkBlueGrey['800'],
      outlinedErrorBg: Palette.colors.red['50'],
      warningMain: Palette.colors.orange['A400'],
      outlinedWarningBg: Palette.colors.orange['50'],
      infoMain: Palette.colors.byBlue['800'],
      outlinedInfoBg: Palette.colors.byBlue['50'],
      successMain: Palette.colors.green['600'],
      outlinedSuccessBg: Palette.colors.green['50'],
      textPrimary: Palette.colors.common.white,
      textSecondary: Palette.colors.darkBlueGrey['100'],
      textDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      textHint: Palette.colors.darkBlueGrey['400'],
      actionHover: Palette.colors.byDarkBlue['A700'],
      actionSelected: Palette.colors.byBlue['400'],
      divider: Palette.colors.byDarkBlue['A100'],
      dividerLight: Palette.colors.grey['400'] + Opacity.alpha.A25,
      grey: {
        50: Palette.colors.grey['50'],
        100: Palette.colors.grey['100'],
        200: Palette.colors.grey['200'],
        300: Palette.colors.grey['300'],
        400: Palette.colors.grey['400'],
        500: Palette.colors.grey['500'],
        600: Palette.colors.grey['600'],
        700: Palette.colors.grey['700'],
        800: Palette.colors.grey['800'],
        900: Palette.colors.grey['900'],
        A100: Palette.colors.grey['A100'],
        A200: Palette.colors.grey['A200'],
        A400: Palette.colors.grey['A400'],
        A700: Palette.colors.grey['A700'],
      },

      //OVERRIDE TOKENS
      appBarColor: Palette.colors.byDarkBlue['A200'] + Opacity.alpha.A70,
      drawerItemMenuHover: Palette.colors.common.black + Opacity.alpha.A19,
      drawerBg: Palette.colors.byDarkBlue['A400'],
      drawerText: Palette.colors.common.white,
      drawerHoverBorder: Palette.colors.byBlue['400'],
      breadCrumbInactive: Palette.colors.common.white + Opacity.alpha.A80,
      fabPrimaryDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      tooltipBg: Palette.colors.darkBlueGrey['800'],
      themeDivider: Palette.colors.common.white + Opacity.alpha.A08,
      themeGradient:
        'linear-gradient(180deg, ' +
        Palette.colors.byDarkBlue['A700'] +
        ' 0%, ' +
        Palette.colors.darkBlueGrey['A700'] +
        ' 100%)',
      bgDecorA: Palette.colors.byDarkBlue['A200'],
      bgDecorB: Palette.colors.byDarkBlue['A200'],
      tableBorder: Palette.colors.common.white + Opacity.alpha.A08,
      tableTextHead: Palette.colors.grey['600'],
      // tableRowBg: Lighten(Palette.colors.byDarkBlue['A400'], 0.1),
      // tableRowBgAlt: Lighten(Palette.colors.byDarkBlue['A400'], 0.1),
      paperOutline: Palette.colors.byBlue['400'] + Opacity.alpha.A30,
      snackbarBg: Palette.colors.darkBlueGrey['800'],
      menuListBg: Palette.colors.byDarkBlue['A200'],
      badgeBg: Palette.colors.red['600'],
      circularProgressColor: Palette.colors.cornflower['50'],
      badHeaderContrastText: Palette.colors.common.white,
      luiWeekNumberColumnBg: Palette.colors.common.black + Opacity.alpha.A15,
      datePickerWhiteBgDisabled: Palette.colors.common.white + Opacity.alpha.A50,
      skeltonDark: Palette.colors.common.white + Opacity.alpha.A05,
      undefined: Palette.colors.lime['A400'], // DEBUG VALUE
      tableScrollbarBg: Palette.colors.common.black + Opacity.alpha.A25,
      exceptionFilterColor: Palette.colors.common.white,

      // CHART TOKENS
      chartByBlue: Palette.colors.byBlue['700'],
      chartYellow: Palette.colors.yellow['700'],
      chartPink: Palette.colors.pink['500'],
      chartPurple: Palette.colors.purple['600'],
      chartGreen: Palette.colors.green['500'],
      chartOrange: Palette.colors.orange['600'],
      chartLime: Palette.colors.lime['600'],
      chartDarkBlueGrey: Palette.colors.darkBlueGrey['500'],
      chartBlue: Palette.colors.blue['A400'],
      chartCornflower: Palette.colors.cornflower['500'],
      chartbyDarkBlue: Palette.colors.byDarkBlue['A400'],
      chartTeal: Palette.colors.teal['500'],

      chartBg0: Palette.colors.common.black,
      chartBg1: Palette.colors.blueGrey['A700'],

      // PRIORITY STRIP
      priority: {
        0: Palette.colors.grey['400'],
        1: Palette.colors.red['400'],
        2: Palette.colors.orange['600'],
        3: Palette.colors.yellow['700'],
        4: Palette.colors.purple['200'],
        5: Palette.colors.red['600'],
        6: Palette.colors.orange['600'],
        7: Palette.colors.green['500'],
        8: Palette.colors.byBlue['800'],
      },

      // OBJECT STATUS
      objectStatus: {
        primary: {
          text: Palette.colors.common.white,
          0: Palette.colors.darkBlueGrey['900'],
          1: Palette.colors.red['400'],
          2: Palette.colors.orange['600'],
          3: Palette.colors.yellow['700'],
          4: Palette.colors.purple['200'],
          5: Palette.colors.red['400'],
          6: Palette.colors.orange['600'],
          7: Palette.colors.green['500'],
          8: Palette.colors.byBlue['800'],
          9: Palette.colors.grey['400'],
        },
        secondary: {
          text: Palette.colors.common.black,
          0: Palette.colors.common.white,
          1: Palette.colors.red['50'],
          2: Palette.colors.orange['50'],
          3: Palette.colors.yellow['50'],
          4: Palette.colors.purple['50'],
          5: Palette.colors.red['50'],
          6: Palette.colors.orange['50'],
          7: Palette.colors.green['50'],
          8: Palette.colors.byBlue['50'],
          9: Palette.colors.grey['50'],
        },
        tertiary: {
          text: Palette.colors.common.white,
        },
      },

      objectHeader: {
        divider: Palette.colors.grey['200'],
      },

      pivot: {
        affectedCell: Palette.colors.teal['700'] + Opacity.alpha.A40,
        editingCell: Palette.colors.teal['700'],
        pastCellValue: Palette.colors.cornflower['300'],
        currentTimeDivider: Palette.colors.lime['A700'],
        lockIcon: Palette.colors.purple['A400'],
        lockedCell: Palette.colors.purple['800'],
        highlightCell: Palette.colors.lime['900'],
        noDataCell: {
          'background-color': 'transparent',
          'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 4 4'%3E%3Cpath fill='${Palette.colors.darkBlueGrey[
            '600'
          ].replace(
            /#/g,
            '%23',
          )}' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        },
      },

      // NOTIFICATION
      notificationBg: Palette.colors.cornflower['50'],
      notificationDivider: Palette.colors.grey['200'],
      notificationTextColor: Palette.colors.darkBlueGrey['900'],
      notificationStatusIconBg: Palette.colors.byBlue[400],
      notificationStatusIconText: Palette.colors.common.white,
      notificationBlue: Palette.colors.blue['500'],
      notificationGrey: Palette.colors.grey['500'],
      notificationTitle: Palette.colors.common.black,
      notificationIconColor: Palette.colors.byBlue[800],
      headerChip: Palette.colors.green['500'],

      // ITEM LIST
      messageStatusGreen: Palette.colors.green['500'],
      messageStatusGrey: Palette.colors.grey['300'],
      borderGrey: Palette.colors.grey['200'],

      // PRODUCT TOKENS
      navAnalytics: Palette.colors.purple['300'],
      navControlTower: Palette.colors.byBlue['400'],
      navExceptions: Palette.colors.teal['A400'],
      navGeneric: Palette.colors.byBlue['400'],
      navHome: Palette.colors.lime['A700'],
      navInsights: Palette.colors.purple['300'],
      navInvestigations: Palette.colors.teal['A400'],
      navLiveView: Palette.colors.orange['A200'],
      brandLogo: Palette.colors.byBlue['400'],

      // BORDER LINEAR PROGRESS
      borderLinearBackgroundColor: Palette.colors.grey['300'] + Opacity.alpha.A50,
      borderLinearBarColor: Palette.colors.red['400'],

      // COLLABORATION TOKENS
      collabMemberStatus: Palette.colors.green['500'],
      collabHeaderBorder: Palette.colors.common.white + Opacity.alpha.A30,
      scenarioPollNotification: Palette.colors.byDarkBlue['A200'],
      replyMessageLeftBorder: Palette.colors.byBlue['800'],
      scenarioIconColor: Palette.colors.green['500'],
      scenarioPollIconColor: Palette.colors.byBlue['800'],
      collabTabsHeader: Palette.colors.grey['500'],
      collabTextFieldBackground: Palette.colors.common.white,
      messageBoxTextFieldBorder: Palette.colors.darkBlueGrey['800'],
      collabMemberHeader: Palette.colors.byDarkBlue['A200'],
      collapseHeading: Palette.colors.grey['300'],
      collabExtraMember: Palette.colors.common.black,
      defaultAvatar: Palette.colors.purple['500'],
      collabCollapseHeader: Palette.colors.byBlue['800'],
      collabMessageBoxBackground: Palette.colors.grey['50'],
      collabTextFieldBorderColor: Palette.colors.grey['200'],
      memberListBadgeColor: Palette.colors.red['700'],
      messageTimeStamp: Palette.colors.grey['500'],
      pollTimeStamp: Palette.colors.grey['400'],
      pollLink: Palette.colors.byBlue['500'],
      messageLink: Palette.colors.byBlue['500'],
      collabTabTitleColor: Palette.colors.byBlue['400'],
      collabPollIconColor: Palette.colors.grey['500'],
      cancelButtonColor: Palette.colors.common.white,
      collabDateTimeStripColor: Palette.colors.grey['400'],
      collabIconColor: Palette.colors.grey['400'],
      collabBoxShadow: Palette.colors.common.black + Opacity.alpha.A05,
      collabPollOptionBg: Palette.colors.byDarkBlue['A400'],
      collabPollText: Palette.colors.common.white + Opacity.alpha.A70,
      collabBarPurple: Palette.colors.purple['300'],
      collabTrashIcon: Palette.colors.common.black + Opacity.alpha.A54,
      fileUploadAreaBorder: Palette.colors.common.white + Opacity.alpha.A50,
      fileUploadAreaHover: Palette.colors.darkBlueGrey['800'] + Opacity.alpha.A30,
      sliderActive: Palette.colors.byBlue['800'] + Opacity.alpha.A16,
      chipDeleteIcon: Palette.colors.common.white + Opacity.alpha.A70,
      autocompletePopperItemSelected: Palette.colors.byBlue['400'] + Opacity.alpha.A10,
      collabTabScrollColor: Palette.colors.common.white + Opacity.alpha.A40,
      collabTabScrollBackground: Palette.colors.byDarkBlue['A400'],
      collabUserListTooltipColor: Palette.colors.common.white,

      //LUI TABLE
      materialTableScrollColor: Palette.colors.common.white + Opacity.alpha.A40,
      materialTableScrollBackground: Palette.colors.byDarkBlue['A400'],
      materialTbaleFixedColumnBorder: Palette.colors.darkBlueGrey['800'],
      defaultCell: Palette.colors.common.white + Opacity.alpha.A05,
      alternateRow: Palette.colors.common.white + Opacity.alpha.A10,
      tableRowHover: Palette.colors.byDarkBlue['A200'],
      selectedRow: Palette.colors.byDarkBlue['A700'],
      toolbar: Palette.colors.byDarkBlue['A200'],
      readOnlyRow: Palette.colors.common.white + Opacity.alpha.A50,

      materialTableToolbarBackground: Palette.colors.common.white + Opacity.alpha.A08,

      // TOOLTIP
      tooltipDetailsLabel: Palette.colors.common.white + Opacity.alpha.A60,
    },
  },
  sizing: {
    textNormal: '0.875rem',
    textLarge: '1rem',
    textSmall: '.75rem',
    title1: '1.875rem',
    title2: '1.5rem',
    title3: '1.125rem',
    title4: '1rem',
    title5: '1.125rem',
    title6: '1.25rem',
    subtitle2: '1.25rem',
    iconSm: '1.25rem',
    iconReg: '1.5rem',
    iconLg: '2.5rem',
    iconMed: '2rem',
  },
  opacity: {
    transparentColor: Palette.colors.common.black + Opacity.alpha.A00, // 00 === 0% OPACITY
    none: '0',
    faint: '8%',
    fade: '30%',
    semi: '50%',
    full: '100%',

    /*
     ** OPACITY ALPHA VALUES REPRESENTING AA OF `#RRGGBBAA`
     ** SHOULD BE USED WITH COLOR TOKENS, AS IN
     ** `Token.color.lightTheme.grey["50"]+Token.opacity.A50`
     */
    A00: Opacity.alpha.A00,
    A05: Opacity.alpha.A05,
    A08: Opacity.alpha.A08,
    A10: Opacity.alpha.A10,
    A20: Opacity.alpha.A20,
    A25: Opacity.alpha.A25,
    A30: Opacity.alpha.A30,
    A40: Opacity.alpha.A40,
    A50: Opacity.alpha.A50,
    A60: Opacity.alpha.A60,
    A70: Opacity.alpha.A70,
    A75: Opacity.alpha.A75,
    A80: Opacity.alpha.A80,
    A90: Opacity.alpha.A90,
    A100: Opacity.alpha.A100,
  },
  spacing: {
    '$spacing-none': '0rem',
    '$spacing-xxx-small': '0.125rem',
    '$spacing-xx-small': '0.25rem',
    '$spacing-x-small': '0.5rem',
    '$table-cell-spacing': {
      compact: '0.5rem',
      comfortable: '1rem',
    },
    '$spacing-small': '0.75rem',
    '$spacing-medium': '1rem',
    '$spacing-large': '1.5rem',
    '$spacing-x-large': '2rem',
    '$spacing-xx-large': '3rem',
  },
  zIndex: {
    '$z-index-deepdive': '-99999',
    '$z-index-default': '1',
    '$z-index-dialog': '6000',
    '$z-index-docked': '4',
    '$z-index-dropdown': '7000',
    '$z-index-modal': '9000',
    '$z-index-overlay': '8000',
    '$z-index-popup': '5000',
    '$z-index-reminder': '8500',
    '$z-index-spinner': '9050',
    '$z-index-sticky': '100',
    '$z-index-toast': '10000',
  },
};

export default Tokens;
