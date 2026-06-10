import {
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshColorSecondaryX1,
  DshColorPrimaryC6,
  DshColorSecondaryM6,
  DshColorSecondaryG6,
} from '@tokens';

export const segmentBgTokens = {
  default: DshColorSecondaryX1,
  blue: DshColorPrimaryC6,
  purple: DshColorSecondaryM6,
  slate: DshColorSecondaryG6,
};

export const segmentFontTokens = {
  small: DshTextSizeBase,
  default: DshTextSizeLg,
  large: DshTextSizeXl,
};

export const segmentLhTokens = {
  small: DshTextLineHeightLg,
  default: DshTextLineHeightXl,
  large: DshTextLineHeight2xl,
};
