import { categoryColors } from "../config/colors.js";

// Table blocks
export function defineTableBlocks() {
  /** ======================
   *   TABLE MAIN CONTAINER
   * ====================== */
  Blockly.Blocks["table"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Table")
        .appendField("Border")
        .appendField(
          new Blockly.FieldDropdown([
            ["none", "0"],
            ["1px", "1"],
            ["2px", "2"],
            ["custom", "custom"],
          ]),
          "BORDER"
        )
        .appendField("Width")
        .appendField(new Blockly.FieldTextInput("100%"), "WIDTH");
      this.appendStatementInput("CONTENT")
        .setCheck(null)
        .appendField("Rows / Sections");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Main <table> element");
    },
  };

  Blockly.JavaScript["table"] = function (block) {
    const border =
      block.getFieldValue("BORDER") === "custom"
        ? ""
        : ` border="${block.getFieldValue("BORDER")}"`;
    const width = block.getFieldValue("WIDTH");
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<table${border} width="${width}">\n${content}</table>\n`;
  };

  /** ======================
   *   ROW <tr>
   * ====================== */
  Blockly.Blocks["tr"] = {
    init: function () {
      this.appendStatementInput("CELLS")
        .setCheck(null)
        .appendField("Row <tr>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Table row <tr>");
    },
  };

  Blockly.JavaScript["tr"] = function (block) {
    const cells = Blockly.JavaScript.statementToCode(block, "CELLS");
    return `  <tr>\n${cells}  </tr>\n`;
  };

  /** ======================
   *   HEADER CELL <th>
   * ====================== */
  Blockly.Blocks["th"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Header")
        .appendField(new Blockly.FieldTextInput("Header Text"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Table header cell <th>");
    },
  };

  Blockly.JavaScript["th"] = function (block) {
    const text = block.getFieldValue("TEXT");
    return `    <th>${text}</th>\n`;
  };

  /** ======================
   *   DATA CELL <td>
   * ====================== */
  Blockly.Blocks["td"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Data")
        .appendField(new Blockly.FieldTextInput("Data"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Table data cell <td>");
    },
  };

  Blockly.JavaScript["td"] = function (block) {
    const text = block.getFieldValue("TEXT");
    return `    <td>${text}</td>\n`;
  };

  /** ======================
   *   CAPTION
   * ====================== */
  Blockly.Blocks["caption"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Caption")
        .appendField(new Blockly.FieldTextInput("Table Title"), "TEXT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Caption <caption>");
    },
  };

  Blockly.JavaScript["caption"] = function (block) {
    const text = block.getFieldValue("TEXT");
    return `  <caption>${text}</caption>\n`;
  };

  /** ======================
   *   SECTIONS
   * ====================== */
  ["thead", "tbody", "tfoot"].forEach((tag) => {
    Blockly.Blocks[tag] = {
      init: function () {
        this.appendStatementInput("ROWS")
          .setCheck(null)
          .appendField(tag.toUpperCase());
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(categoryColors["Tables"]);
        this.setTooltip(`Table section <${tag}>`);
      },
    };

    Blockly.JavaScript[tag] = function (block) {
      const rows = Blockly.JavaScript.statementToCode(block, "ROWS");
      return `  <${tag}>\n${rows}  </${tag}>\n`;
    };
  });

  /** ======================
   *   COLUMNS
   * ====================== */
  Blockly.Blocks["colgroup"] = {
    init: function () {
      this.appendStatementInput("COLS")
        .setCheck(null)
        .appendField("Column Group <colgroup>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Defines a group of columns <colgroup>");
    },
  };

  Blockly.JavaScript["colgroup"] = function (block) {
    const cols = Blockly.JavaScript.statementToCode(block, "COLS");
    return `  <colgroup>\n${cols}  </colgroup>\n`;
  };

  Blockly.Blocks["col"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Column <col>")
        .appendField("Span")
        .appendField(new Blockly.FieldNumber(1, 1), "SPAN")
        .appendField("Style")
        .appendField(new Blockly.FieldTextInput(""), "STYLE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Tables"]);
      this.setTooltip("Defines column <col> with span and style");
    },
  };

  Blockly.JavaScript["col"] = function (block) {
    const span = block.getFieldValue("SPAN");
    const style = block.getFieldValue("STYLE");
    return `    <col span="${span}" style="${style}">\n`;
  };
}
