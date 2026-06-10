import {
  DshColorPrimaryC6,
  DshColorComplementaryT6,
  DshColorComplementaryR6,
  DshColorComplementaryN6,
  DshColorSecondaryX1,
  DshColorSecondaryX6,
  DshColorComplementaryT1,
  DshColorComplementaryR1,
  DshColorComplementaryN1,
} from '@tokens';

export const bgTokens = {
  success:  DshColorComplementaryT6,
  error:    DshColorComplementaryR6,
  warning:  DshColorComplementaryN6,
  important: DshColorSecondaryX6,
}

export const borderTokens = {
  success: `1px solid ${DshColorComplementaryT1}`,
  error: `1px solid ${DshColorComplementaryR1}`,
  warning: `1px solid ${DshColorComplementaryN1}`,
  important: `1px solid ${DshColorSecondaryX1}`,
}
