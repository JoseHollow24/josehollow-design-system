import {
  DshColorMonoWhite,
  DshColorMonoBlack,
  DshColorComplementaryT1,
  DshColorComplementaryT6,
  DshColorComplementaryR1,
  DshColorComplementaryR6,
  DshColorComplementaryN1,
  DshColorPrimaryA1,
  DshColorPrimaryA3,
  DshColorPrimaryA6,
  DshColorComplementaryV1,
  DshColorSecondaryX1,
  DshColorSecondaryX6,
} from '@tokens';

export const variantTextTokens = {
  interactive: `${DshColorMonoBlack}`,
  general: `${DshColorMonoBlack}`,
  informative: `${DshColorMonoBlack}`,
  success: `${DshColorMonoBlack}`,
  warning: `${DshColorMonoBlack}`,
  error: `${DshColorMonoBlack}`,
  blue: `${DshColorMonoWhite}`,
  yellow: `${DshColorMonoBlack}`,
};

export const variantBgTokens = {
  interactive: `${DshColorComplementaryT6}`,
  general: `${DshColorPrimaryA3}`,
  informative: `${DshColorSecondaryX6}`,
  success: `${DshColorComplementaryT6}`,
  error: `${DshColorComplementaryR6}`,
  warning: `${DshColorPrimaryA6}`,
  blue: `${DshColorSecondaryX1}`,
  yellow: `${DshColorPrimaryA3}`,
};

export const variantBorderTokens = {
  interactive: `${DshColorComplementaryT1}`,
  general: `${DshColorPrimaryA1}`,
  informative: `${DshColorSecondaryX1}`,
  success: `${DshColorComplementaryT1}`,
  error: `${DshColorComplementaryR1}`,
  warning: `${DshColorComplementaryN1}`,
  blue: 'none',
  yellow: 'none',
};
