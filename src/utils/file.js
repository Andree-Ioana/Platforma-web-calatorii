export const getFileType = (memType) => {
  switch (memType) {
    case "video/mp4":
    case "video/mpeg":
      return "VIDEO";
    default:
      return "IMAGE";
  }
};
