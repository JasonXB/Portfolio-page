export const mxn = {
  flexRow: {
    display: "flex",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // We're using a consistent margin size for distancing our components
  regMargin: (side) => {
    const marginMagnitude = "1.0rem";
    if (side === "m") return { margin: marginMagnitude };
    if (side === "mt") return { marginTop: marginMagnitude };
    if (side === "mb") return { marginBottom: marginMagnitude };
    if (side === "ml") return { marginLeft: marginMagnitude };
    if (side === "mr") return { marginRight: marginMagnitude };
    if (side === "mx") return { marginInline: marginMagnitude };
    if (side === "my") return { marginBlock: marginMagnitude };
    if (side === "!top") {
      return {
        marginInline: marginMagnitude,
        marginBottom: marginMagnitude,
      };
    }
    if (side === "!bottom") {
      return {
        marginInline: marginMagnitude,
        marginTop: marginMagnitude,
      };
    }
  },
  // Apply "display:none" after a certain viewport width
  hideAfter: (breakpoint) => {
    return {
      [`@media (min-width: ${breakpoint}px)`]: {
        display: "none",
      },
    };
  },
  // Apply "display:none" before a certain viewport width
  hideBefore: (breakpoint) => {
    return {
      display: "none",
      [`@media (min-width: ${breakpoint}px)`]: {
        display: "block",
      },
    };
  },
  // Apply "display:none" after a certain viewport width
  hideAfterBP: (BPname, theme) => {
    return {
      [theme.breakpoints.up(BPname)]: { display: "none" },
    };
  },
  // Apply "display:none" before a certain viewport width
  hideBeforeBP: (BPname, theme) => {
    return {
      [theme.breakpoints.down(BPname)]: { display: "none" },
    };
  },
};
