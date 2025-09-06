import { categoryColors } from '../config/colors.js';

// Text blocks with WORKING text inputs and dropdowns
export function defineTextBlocks() {
  // ===== Heading Block =====
  Blockly.Blocks["heading_block"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Heading")
        .appendField(
          new Blockly.FieldDropdown([
            ["h1", "h1"],
            ["h2", "h2"],
            ["h3", "h3"],
            ["h4", "h4"],
            ["h5", "h5"],
            ["h6", "h6"],
          ]),
          "TAG"
        );
      this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("Hello World"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("Heading tag from h1 to h6");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["heading_block"] = function (block) {
    var tag = block.getFieldValue("TAG");
    var content = block.getFieldValue("CONTENT");
    return `<${tag}>${content}</${tag}>\n`;
  };

  // ===== Paragraph =====
  Blockly.Blocks["paragraph"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Paragraph")
        .appendField(new Blockly.FieldTextInput("Your text here"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("Paragraph tag");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["paragraph"] = function (block) {
    var text = block.getFieldValue("TEXT");
    return `<p>${text}</p>\n`;
  };

  // ===== br =====
  Blockly.Blocks["br"] = {
    init: function () {
      this.appendDummyInput().appendField("<br>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("Line break");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["br"] = function () {
    return `<br>\n`;
  };

  // ===== pre =====
  Blockly.Blocks["pre"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Preformatted")
        .appendField(new Blockly.FieldTextInput("Pre text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("<pre> tag");
    },
  };

  Blockly.JavaScript["pre"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<pre>${content}</pre>\n`;
  };

  // ===== hr =====
  Blockly.Blocks["hr"] = {
    init: function () {
      this.appendDummyInput().appendField("<hr>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("Horizontal rule");
    },
  };

  Blockly.JavaScript["hr"] = function () {
    return `<hr>\n`;
  };

  // ===== b =====
  Blockly.Blocks["b"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Bold")
        .appendField(new Blockly.FieldTextInput("bold text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
      this.setTooltip("<b> tag");
    },
  };

  Blockly.JavaScript["b"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<b>${content}</b>\n`;
  };

  // ===== strong =====
  Blockly.Blocks["strong"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Strong")
        .appendField(new Blockly.FieldTextInput("strong text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["strong"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<strong>${content}</strong>\n`;
  };

  // ===== i =====
  Blockly.Blocks["i"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Italic")
        .appendField(new Blockly.FieldTextInput("italic text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["i"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<i>${content}</i>\n`;
  };

  // ===== em =====
  Blockly.Blocks["em"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Emphasis")
        .appendField(new Blockly.FieldTextInput("emphasized text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["em"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<em>${content}</em>\n`;
  };

  // ===== u =====
  Blockly.Blocks["u"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Underline")
        .appendField(new Blockly.FieldTextInput("underlined text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["u"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<u>${content}</u>\n`;
  };

  // ===== mark =====
  Blockly.Blocks["mark"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Mark")
        .appendField(new Blockly.FieldTextInput("highlighted text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["mark"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<mark>${content}</mark>\n`;
  };

  // ===== small =====
  Blockly.Blocks["small"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Small")
        .appendField(new Blockly.FieldTextInput("small text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["small"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<small>${content}</small>\n`;
  };

  // ===== sub =====
  Blockly.Blocks["sub"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Subscript")
        .appendField(new Blockly.FieldTextInput("sub"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["sub"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<sub>${content}</sub>\n`;
  };

  // ===== sup =====
  Blockly.Blocks["sup"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Superscript")
        .appendField(new Blockly.FieldTextInput("sup"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["sup"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<sup>${content}</sup>\n`;
  };

  // ===== s =====
  Blockly.Blocks["s"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Strikethrough")
        .appendField(new Blockly.FieldTextInput("striked text"), "CONTENT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["s"] = function (block) {
    var content = block.getFieldValue("CONTENT");
    return `<s>${content}</s>\n`;
  };

  // ===== a =====
  Blockly.Blocks["a"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Link")
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("Click here"), "TEXT")
        .appendField("URL")
        .appendField(new Blockly.FieldTextInput("https://example.com"), "HREF");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Text"]);
    },
  };

  Blockly.JavaScript["a"] = function (block) {
    var text = block.getFieldValue("TEXT");
    var href = block.getFieldValue("HREF");
    return `<a href="${href}">${text}</a>\n`;
  };
}
