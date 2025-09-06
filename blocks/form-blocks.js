import { categoryColors } from '../config/colors.js';

// Form blocks with WORKING dropdown
export function defineFormBlocks() {
  // ===== Form Block =====
  Blockly.Blocks["form"] = {
    init: function () {
      this.appendDummyInput().appendField("<form action=")
        .appendField(new Blockly.FieldTextInput("submit.php"), "ACTION")
        .appendField("method=")
        .appendField(
          new Blockly.FieldDropdown([
            ["GET", "get"],
            ["POST", "post"],
          ]),
          "METHOD"
        )
        .appendField(">");
      this.appendStatementInput("ELEMENTS").setCheck(null);
      this.appendDummyInput().appendField("</form>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("Form container <form> ... </form>");
    },
  };

  Blockly.JavaScript["form"] = function (block) {
    const action = block.getFieldValue("ACTION");
    const method = block.getFieldValue("METHOD");
    const elements = Blockly.JavaScript.statementToCode(block, "ELEMENTS");
    return `<form action="${action}" method="${method}">\n${elements}</form>\n`;
  };

  // ===== Input Block =====
  Blockly.Blocks["form_input"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<input type=")
        .appendField(
          new Blockly.FieldDropdown([
            ["text", "text"],
            ["button", "button"],
            ["checkbox", "checkbox"],
            ["color", "color"],
            ["date", "date"],
            ["datetime-local", "datetime-local"],
            ["email", "email"],
            ["file", "file"],
            ["hidden", "hidden"],
            ["image", "image"],
            ["month", "month"],
            ["number", "number"],
            ["password", "password"],
            ["radio", "radio"],
            ["range", "range"],
            ["reset", "reset"],
            ["search", "search"],
            ["submit", "submit"],
            ["tel", "tel"],
            ["time", "time"],
            ["url", "url"],
            ["week", "week"],
          ]),
          "TYPE"
        )
        .appendField(" name=")
        .appendField(new Blockly.FieldTextInput("fieldName"), "NAME")
        .appendField(">");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("HTML input element with selected type");
    },
  };

  Blockly.JavaScript["form_input"] = function (block) {
    const type = block.getFieldValue("TYPE");
    const name = block.getFieldValue("NAME");
    return `<input type="${type}" name="${name}">\n`;
  };

  // ===== Label Block =====
  Blockly.Blocks["label"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<label for=")
        .appendField(new Blockly.FieldTextInput("fieldName"), "FOR")
        .appendField(">")
        .appendField(new Blockly.FieldTextInput("Label text"), "TEXT")
        .appendField("</label>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("Label for form input");
    },
  };

  Blockly.JavaScript["label"] = function (block) {
    const htmlFor = block.getFieldValue("FOR");
    const text = block.getFieldValue("TEXT");
    return `<label for="${htmlFor}">${text}</label>\n`;
  };

  // ===== Textarea Block =====
  Blockly.Blocks["textarea"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<textarea name=")
        .appendField(new Blockly.FieldTextInput("message"), "NAME")
        .appendField(">")
        .appendField(new Blockly.FieldTextInput("Your text..."), "CONTENT")
        .appendField("</textarea>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("Multiline text input <textarea>");
    },
  };

  Blockly.JavaScript["textarea"] = function (block) {
    const name = block.getFieldValue("NAME");
    const content = block.getFieldValue("CONTENT");
    return `<textarea name="${name}">${content}</textarea>\n`;
  };

  // ===== Select Block =====
  Blockly.Blocks["select"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<select name=")
        .appendField(new Blockly.FieldTextInput("options"), "NAME")
        .appendField(">");
      this.appendStatementInput("OPTIONS").setCheck(null);
      this.appendDummyInput().appendField("</select>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("Dropdown list <select>");
    },
  };

  Blockly.JavaScript["select"] = function (block) {
    const name = block.getFieldValue("NAME");
    const options = Blockly.JavaScript.statementToCode(block, "OPTIONS");
    return `<select name="${name}">\n${options}</select>\n`;
  };

  // ===== Option Block =====
  Blockly.Blocks["option"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<option value=")
        .appendField(new Blockly.FieldTextInput("value"), "VALUE")
        .appendField(">")
        .appendField(new Blockly.FieldTextInput("Option text"), "TEXT")
        .appendField("</option>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Forms"]);
      this.setTooltip("Option inside <select>");
    },
  };

  Blockly.JavaScript["option"] = function (block) {
    const value = block.getFieldValue("VALUE");
    const text = block.getFieldValue("TEXT");
    return `<option value="${value}">${text}</option>\n`;
  };
}
