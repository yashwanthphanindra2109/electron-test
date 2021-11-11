const defaultAssetExts =
  require("expo/metro-config/src/defaults/defaults").assetExts;

module.exports = {
  resolver: {
    assetExts: [...defaultAssetExts, "ttf"],
  },
};
