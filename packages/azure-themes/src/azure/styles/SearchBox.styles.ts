import { ISearchBoxStyleProps, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';
import * as StyleConstants from '../Constants';
import { FontSizes } from '../AzureType';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';

export const SearchBoxStyles = (props: ISearchBoxStyleProps): Partial<ISearchBoxStyles> => {
  const { theme, hasFocus } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    root: [
      {
        height: StyleConstants.inputControlHeight,
        selectors: {
          '::after': {
            borderColor: semanticColors.primaryButtonBorder,
          },
        },
      },
      hasFocus && {
        borderColor: semanticColors.focusBorder,
      },
      !hasFocus && {
        borderColor: semanticColors.inputBorder,
        selectors: {
          '&:hover': {
            borderColor: semanticColors.inputBorderHovered,
          },
        },
      },
    ],
    clearButton: {
      selectors: {
        '.ms-Button': {
          color: semanticColors.inputText,
          selectors: {
            ':hover': {
              color: semanticColors.inputText,
            },
            ':active': {
              color: semanticColors.inputText,
            },
          },
        },
      },
    },
    field: {
      color: semanticColors.inputText,
    },
    icon: {
      color: extendedSemanticColors.iconButtonFill,
      width: '20px',
      fontSize: FontSizes.size13,
    },
  };
};
