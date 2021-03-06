import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
	...chakraTheme.fonts,
	body: `'JetBrains Mono', monospace`,
	heading: `'JetBrains Mono', monospace`,
};

const breakpoints = createBreakpoints({
	sm: "40em",
	md: "52em",
	lg: "62em",
});

const overrides = {
	...chakraTheme,
	fonts,
	breakpoints,
	fontWeights: {
		normal: 300,
		medium: 600,
		bold: 700,
	},
	fontSizes: {
		xs: "12px",
		sm: "14px",
		md: "16px",
		lg: "18px",
		xl: "20px",
		"2xl": "24px",
		"3xl": "28px",
		"4xl": "36px",
		"5xl": "48px",
		"6xl": "64px",
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
