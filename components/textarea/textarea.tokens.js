import {
  DshColorSecondaryG1,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorSecondaryG3,
  DshColorComplementaryR2,
  DshColorComplementaryV2,
  DshColorSecondaryX4,
} from '@tokens';

export const stateBorderTokens = {
  default: `${DshColorPrimaryC1}`,
  completed: `${DshColorPrimaryC2}`,
  error: `${DshColorComplementaryR2}`,
  success: `${DshColorComplementaryV2}`,
  warning: `${DshColorPrimaryC1}`,
  disabled: `${DshColorSecondaryX4}`,
};

export const stateCounterTokens = {
  default: `${DshColorSecondaryG1}`,
  completed: `${DshColorSecondaryG1}`,
  error: `${DshColorComplementaryR2}`,
  success: `${DshColorSecondaryG1}`,
  warning: `${DshColorComplementaryR2}`,
  disabled: `${DshColorSecondaryG3}`,
};
