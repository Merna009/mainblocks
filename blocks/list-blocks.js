import { categoryColors } from '../config/colors.js';

// List blocks
export function defineListBlocks() {
  // Main List Block (UL / OL / DL)
  Blockly.Blocks["list_block"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("List Type")
        .appendField(
          new Blockly.FieldDropdown([
            ["Unordered List (<ul>)", "ul"],
            ["Ordered List (<ol>)", "ol"],
            ["Description List (<dl>)", "dl"],
          ]),
          "LIST_TYPE"
        );
      this.appendStatementInput("ITEMS").setCheck(null).appendField("Items");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Lists"]);
      this.setTooltip("List element: <ul>, <ol>, or <dl>");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["list_block"] = function (block) {
    const listType = block.getFieldValue("LIST_TYPE");
    const items = Blockly.JavaScript.statementToCode(block, "ITEMS");
    return `<${listType}>\n${items}</${listType}>\n`;
  };

  // List Item (<li>, <dt>, <dd>)
  Blockly.Blocks["list_item"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Item Type")
        .appendField(
          new Blockly.FieldDropdown([
            ["List Item (<li>)", "li"],
            ["Term (<dt>)", "dt"],
            ["Description (<dd>)", "dd"],
          ]),
          "ITEM_TYPE"
        )
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Item text"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Lists"]);
      this.setTooltip("List item <li>, <dt>, or <dd>");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["list_item"] = function (block) {
    const itemType = block.getFieldValue("ITEM_TYPE");
    const text = block.getFieldValue("TEXT");
    return `<${itemType}>${text}</${itemType}>\n`;
  };

  // Hyperlink (<a>)
  Blockly.Blocks["list_link"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Link")
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Click here"), "TEXT")
        .appendField("URL:")
        .appendField(new Blockly.FieldTextInput("https://example.com"), "HREF");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Lists"]);
      this.setTooltip("Hyperlink <a>");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["list_link"] = function (block) {
    const text = block.getFieldValue("TEXT");
    const href = block.getFieldValue("HREF");
    return `<a href="${href}">${text}</a>\n`;
  };
}
