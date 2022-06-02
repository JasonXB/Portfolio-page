export const styles = {
  outerBox: (mui) => ({
    width: "calc(100vw - (100vw - 100%))",
    backgroundColor: mui.palette.bg.main,
    background: "orange"
  }),
  innerBox: {
    width: "100%",
    maxWidth: "1232px", // 1200 after px = 2
    margin: "auto",
  },
};
