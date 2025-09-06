import { categoryColors } from '../config/colors.js';

// HTML Basic blocks
export function defineHtmlBlocks() {
  // <!DOCTYPE html>
Blockly.Blocks["doctype"] = {
  init: function () {
    this.appendDummyInput().appendField("<!DOCTYPE html>");
    this.setPreviousStatement(false, null); 
    this.setNextStatement(true, "html");
    this.setColour(categoryColors["HTML"]);
    this.setTooltip("HTML doctype declaration.");
    this.setHelpUrl("");
  },
};

// <html> ... </html>
Blockly.Blocks["html_tag"] = {
  init: function () {
    this.appendDummyInput().appendField("<html>");
    this.appendStatementInput("CONTENT")
      .setCheck(["head_tag", "body_tag"]); 
    this.appendDummyInput().appendField("</html>");
    this.setPreviousStatement(true, "html");
    this.setNextStatement(false, null);     
    this.setColour(categoryColors["HTML"]);
    this.setTooltip("HTML root element.");
    this.setHelpUrl("");
  },
};


  // <head> ... </head>
  Blockly.Blocks["head_tag"] = {
    init: function () {
      this.appendDummyInput().appendField("<head>");
      this.appendStatementInput("CONTENT")
        .setCheck("metadata") 
        .appendField("content");
      this.appendDummyInput().appendField("</head>");
      this.setPreviousStatement(true, "head_tag"); 
      this.setNextStatement(true, "body_tag");     
      this.setColour(categoryColors["HTML"]);
      this.setTooltip("Head section of the document.");
      this.setHelpUrl("");
    },
  };

  // <title> ... </title>
  Blockly.Blocks["title_tag"] = {
    init: function () {
      this.appendDummyInput().appendField("<title>");
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Page Title"), "TITLE");
      this.appendDummyInput().appendField("</title>");
      this.setPreviousStatement(true, "metadata");
      this.setNextStatement(false, null);
      this.setColour(categoryColors["HTML"]);
      this.setTooltip("Title of the page.");
      this.setHelpUrl("");
    },
  };

  // <body> ... </body>
  Blockly.Blocks["body_tag"] = {
    init: function () {
      this.appendDummyInput().appendField("<body>");
      this.appendStatementInput("CONTENT")
        .setCheck("content") 
        .appendField("content");
      this.appendDummyInput().appendField("</body>");
      this.setPreviousStatement(true, "body_tag");
      this.setNextStatement(false, null);
      this.setColour(categoryColors["HTML"]);
      this.setTooltip("Body of the page.");
      this.setHelpUrl("");
    },
  };
}



// html-blocks.js
export function defineHtmlGenerators(Blockly) {
  // <!DOCTYPE html>
  Blockly.JavaScript["doctype"] = function () {
    return "<!DOCTYPE html>\n";
  };

  // <html> ... </html>
  Blockly.JavaScript["html_tag"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return "<html>\n" + content + "</html>\n";
  };

  // <head> ... </head>
  Blockly.JavaScript["head_tag"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return "  <head>\n" + content + "  </head>\n";
  };

  // <title> ... </title>
  Blockly.JavaScript["title_tag"] = function (block) {
    const titleText = block.getFieldValue("TITLE") || "Untitled Page";
    return "    <title>" + titleText + "</title>\n";
  };

  // <body> ... </body>
  Blockly.JavaScript["body_tag"] = function (block) {
    const content = Blockly.JavaScript.statementToCode(block, "CONTENT");
    return "  <body>\n" + content + "  </body>\n";
  };
}
