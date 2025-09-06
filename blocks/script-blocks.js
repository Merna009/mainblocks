import { categoryColors } from '../config/colors.js';

// Script blocks
export function defineScriptBlocks() {
  Blockly.Blocks["script_tag"] = {
    init: function () {
      this.appendDummyInput().appendField("<script>");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Scripts"]);
      this.setTooltip("JavaScript script tag.");
      this.setHelpUrl("");
    },
  };

  // Event blocks using defineBlocksWithJsonArray
  Blockly.defineBlocksWithJsonArray([
    {
      type: "on_click",
      message0: "when element with ID %1 is clicked do %2 %3",
      args0: [
        { type: "field_input", name: "ID", text: "myElement" },
        { type: "input_dummy" },
        { type: "input_statement", name: "DO" },
      ],
      colour: categoryColors["Events"],
      tooltip: "Triggered when the element is clicked",
      previousStatement: null,
      nextStatement: null,
    },
    {
      type: "on_hover",
      message0: "when mouse over element with ID %1 do %2 %3",
      args0: [
        { type: "field_input", name: "ID", text: "myElement" },
        { type: "input_dummy" },
        { type: "input_statement", name: "DO" },
      ],
      colour: categoryColors["Events"],
      tooltip: "Triggered when the mouse hovers over the element",
      previousStatement: null,
      nextStatement: null,
    },
    {
      type: "on_input",
      message0: "when user types in input with ID %1 do %2 %3",
      args0: [
        { type: "field_input", name: "ID", text: "myInput" },
        { type: "input_dummy" },
        { type: "input_statement", name: "DO" },
      ],
      colour: categoryColors["Events"],
      tooltip: "Triggered when the user types in the input field",
      previousStatement: null,
      nextStatement: null,
    },
    {
      type: "on_load",
      message0: "when page loads do %1 %2",
      args0: [{ type: "input_dummy" }, { type: "input_statement", name: "DO" }],
      colour: categoryColors["Events"],
      tooltip: "Triggered when the page is fully loaded",
      previousStatement: null,
      nextStatement: null,
    },
    {
      type: "on_key_press",
      message0: "when key %1 is pressed do %2 %3",
      args0: [
        { type: "field_input", name: "KEY", text: "Enter" },
        { type: "input_dummy" },
        { type: "input_statement", name: "DO" },
      ],
      colour: categoryColors["Events"],
      tooltip: "Triggered when a key is pressed",
      previousStatement: null,
      nextStatement: null,
    },
  ]);

  // Event block generators
  Blockly.JavaScript["on_click"] = function (block) {
    const id = block.getFieldValue("ID");
    const statements = Blockly.JavaScript.statementToCode(block, "DO");
    return `document.getElementById("${id}").addEventListener("click", function() {\n${statements}});\n`;
  };

  Blockly.JavaScript["on_hover"] = function (block) {
    const id = block.getFieldValue("ID");
    const statements = Blockly.JavaScript.statementToCode(block, "DO");
    return `document.getElementById("${id}").addEventListener("mouseover", function() {\n${statements}});\n`;
  };

  Blockly.JavaScript["on_input"] = function (block) {
    const id = block.getFieldValue("ID");
    const statements = Blockly.JavaScript.statementToCode(block, "DO");
    return `document.getElementById("${id}").addEventListener("input", function() {\n${statements}});\n`;
  };

  Blockly.JavaScript["on_key_press"] = function (block) {
    const key = block.getFieldValue("KEY");
    const statements = Blockly.JavaScript.statementToCode(block, "DO");
    return `document.addEventListener("keydown", function(event) {
  if (event.key === "${key}") {
    ${statements}
  }
});\n`;
  };

  Blockly.JavaScript["on_load"] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "DO");
    return `window.addEventListener("load", function() {\n${statements}});\n`;
  };
}
