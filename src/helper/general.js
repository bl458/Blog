export function getWindowDim() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
