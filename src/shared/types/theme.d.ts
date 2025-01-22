import "@mui/material/styles";
import "@mui/material/Typography";
import { PropTypes } from "@mui/material";
import Color = PropTypes.Color;
import React, { CSSProperties } from "react";
import { ExtendedCSSProperties } from "@mui/material/styles/createTypography";

type ColorPartial = Partial<Color>;

declare module "@mui/material/styles/createTypography" {
  type ExtendedCSSProperties = CSSProperties & {
    [key: string]: any;
  };

  // allow configuration using `createTheme`
  export interface TypographyOptions {
    h1?: ExtendedCSSProperties;
    h2?: ExtendedCSSProperties;
    h3?: ExtendedCSSProperties;
    h4?: ExtendedCSSProperties;
    errorFont?: ExtendedCSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1?: true;
    h2?: true;
    h3?: true;
    h4?: true;
    errorFont?: true;
  }
}

declare module "@mui/material/" {
  export interface Palette {
    primary: Record<number, string>;
    secondary: Record<number, string>;
  }

  export interface PaletteColor {
    lightest?: string;
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  interface PaletteColorOptions {
    lighter?: string;
    main?: string;
    light?: string;
    lightest?: string;
    dark?: string;
    contrastText?: string;
    darker?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    1000?: string;
  }

  interface TypeBackground {
    white?: string;
    lightGrey?: string;
  }

  interface TypeAction {
    primary?: string;
    white?: string;
  }

  interface Palette {
    primary: Record<number, string>;
    secondary: Record<number, string>;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
  export interface ButtonPropsVariantOverrides {
    "outlined-secondary": true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions {
    lightest?: string;
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }
}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    custom: true;
  }
}
