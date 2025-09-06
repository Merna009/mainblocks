import { categoryColors } from '../config/colors.js';

// Layout blocks
export function defineLayoutBlocks() {
  // <header> ... </header>
  Blockly.Blocks["header"] = {
    init: function () {
      this.appendDummyInput().appendField("<header>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</header>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Header section of the page.");
    },
  };

  // <footer> ... </footer>
  Blockly.Blocks["footer"] = {
    init: function () {
      this.appendDummyInput().appendField("<footer>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</footer>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Footer section of the page.");
    },
  };

  // <nav> ... </nav>
  Blockly.Blocks["nav"] = {
    init: function () {
      this.appendDummyInput().appendField("<nav>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</nav>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Navigation section of the page.");
    },
  };

  // <section> ... </section>
  Blockly.Blocks["section"] = {
    init: function () {
      this.appendDummyInput().appendField("<section>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</section>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Section of the page.");
    },
  };

  // <article> ... </article>
  Blockly.Blocks["article"] = {
    init: function () {
      this.appendDummyInput().appendField("<article>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</article>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Article section of the page.");
    },
  };

  // <div> ... </div>
  Blockly.Blocks["div"] = {
    init: function () {
      this.appendDummyInput().appendField("<div>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</div>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Division container.");
    },
  };

  // <span>inline text</span> (special case)
  Blockly.Blocks["span"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("<span>")
        .appendField(new Blockly.FieldTextInput("inline text"), "SPAN_TEXT")
        .appendField("</span>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Inline span element with text inside.");
    },
  };

  // <center> ... </center>
  Blockly.Blocks["center"] = {
    init: function () {
      this.appendDummyInput().appendField("<center>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</center>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Center aligned content.");
    },
  };

  // <legend> ... </legend>
  Blockly.Blocks["legend"] = {
    init: function () {
      this.appendDummyInput().appendField("<legend>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</legend>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Legend caption for a fieldset.");
    },
  };

  // <main> ... </main>
  Blockly.Blocks["main"] = {
    init: function () {
      this.appendDummyInput().appendField("<main>");
      this.appendStatementInput("CONTENT");
      this.appendDummyInput().appendField("</main>");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(categoryColors["Layout"]);
      this.setTooltip("Main content of the page.");
    },
  };
}



//generators for layout blocks

export function defineLayoutGenerators(Blockly) {
  // <header>
  Blockly.JavaScript["header"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<header>\n${content}</header>\n`;
  };

  // <footer>
  Blockly.JavaScript["footer"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<footer>\n${content}</footer>\n`;
  };

  // <nav>
  Blockly.JavaScript["nav"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<nav>\n${content}</nav>\n`;
  };

  // <section>
  Blockly.JavaScript["section"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<section>\n${content}</section>\n`;
  };

  // <article>
  Blockly.JavaScript["article"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<article>\n${content}</article>\n`;
  };

  // <div>
  Blockly.JavaScript["div"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<div>\n${content}</div>\n`;
  };

  // <span> (special case with inline text)
  Blockly.JavaScript["span"] = function (block) {
    const text = block.getFieldValue("SPAN_TEXT") || "";
    return `<span>${text}</span>\n`;
  };

  // <center>
  Blockly.JavaScript["center"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<center>\n${content}</center>\n`;
  };

  // <legend>
  Blockly.JavaScript["legend"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<legend>\n${content}</legend>\n`;
  };

  // <main>
  Blockly.JavaScript["main"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return `<main>\n${content}</main>\n`;
  };
}
