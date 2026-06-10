import {
  DshColorSecondaryM1,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG1,
  DshColorSecondaryG3,
  DshColorSecondaryX6,
} from '@tokens';

export const accordionTokens = {
  primario: {
    background: DshColorSecondaryX6,
    borderColor: DshColorSecondaryX6,
    borderColorBottom: DshColorSecondaryX6,
  },
  secundario: {
    background: DshColorMonoWhite,
    borderColor: DshColorPrimaryC1,
    borderColorBottom: DshColorPrimaryC1,
  },
  borderbottom: {
    background: 'transparent',
    borderColor: 'transparent',
    borderColorLeft: 'transparent',
    borderColorBottom: DshColorSecondaryG3,
  },
  none: {
    background: 'transparent',
    borderColor: 'transparent',
    borderColorLeft: 'transparent',
    borderColorBottom: 'transparent',
  },
  blue: { borderColorLeft: DshColorPrimaryC1 },
  slate: { borderColorLeft: DshColorSecondaryG1 },
  purple: { borderColorLeft: DshColorSecondaryM1 },
  transversal: {
    background: DshColorMonoWhite,
    borderColor: DshColorPrimaryC1,
    borderColorLeft: 'transparent',
    borderColorBottom: DshColorPrimaryC1,
  },
};

