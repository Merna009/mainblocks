import { categoryColors } from '../config/colors.js';

// Media blocks
export function defineMediaBlocks() {
  // ===== Image Block =====
  Blockly.Blocks["img"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<img src=")
        .appendField(new Blockly.FieldTextInput("image.jpg"), "SRC")
        .appendField("alt=")
        .appendField(new Blockly.FieldTextInput("description"), "ALT")
        .appendField(">");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Media"]);
      this.setTooltip("Image tag <img src='' alt=''>");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["img"] = function (block) {
    const src = block.getFieldValue("SRC");
    const alt = block.getFieldValue("ALT");
    return `<img src="${src}" alt="${alt}">\n`;
  };

  // ===== Video Block =====
  Blockly.Blocks["video"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<video src=")
        .appendField(new Blockly.FieldTextInput("video.mp4"), "SRC")
        .appendField(" controls>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Media"]);
      this.setTooltip("Video tag <video src='' controls>");
    },
  };

  Blockly.JavaScript["video"] = function (block) {
    const src = block.getFieldValue("SRC");
    return `<video controls>\n  <source src="${src}" type="video/mp4">\n</video>\n`;
  };

  // ===== Audio Block =====
  Blockly.Blocks["audio"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<audio src=")
        .appendField(new Blockly.FieldTextInput("audio.mp3"), "SRC")
        .appendField(" controls>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Media"]);
      this.setTooltip("Audio tag <audio src='' controls>");
    },
  };

  Blockly.JavaScript["audio"] = function (block) {
    const src = block.getFieldValue("SRC");
    return `<audio controls>\n  <source src="${src}" type="audio/mpeg">\n</audio>\n`;
  };

  // ===== Iframe Block =====
  Blockly.Blocks["iframe"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<iframe src=")
        .appendField(new Blockly.FieldTextInput("https://example.com"), "SRC")
        .appendField(" width=")
        .appendField(new Blockly.FieldTextInput("600"), "WIDTH")
        .appendField(" height=")
        .appendField(new Blockly.FieldTextInput("400"), "HEIGHT")
        .appendField("></iframe>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Media"]);
      this.setTooltip("Embed external page with <iframe>");
    },
  };

  Blockly.JavaScript["iframe"] = function (block) {
    const src = block.getFieldValue("SRC");
    const width = block.getFieldValue("WIDTH");
    const height = block.getFieldValue("HEIGHT");
    return `<iframe src="${src}" width="${width}" height="${height}"></iframe>\n`;
  };
}
