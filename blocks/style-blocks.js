import { categoryColors } from '../config/colors.js';

// Style blocks
export function defineStyleBlocks() {
  Blockly.Blocks["selector_id"] = {
    init: function () {
      this.appendDummyInput().appendField("#id");
      this.setOutput(true, "String");
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("ID selector.");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["selector_class"] = {
    init: function () {
      this.appendDummyInput().appendField(".class");
      this.setOutput(true, "String");
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Class selector.");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["selector_multiple"] = {
    init: function () {
      this.appendDummyInput().appendField("element, element");
      this.setOutput(true, "String");
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Multiple element selector.");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["selector_all"] = {
    init: function () {
      this.appendDummyInput().appendField("*");
      this.setOutput(true, "String");
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Universal selector.");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["selector_attribute"] = {
    init: function () {
      this.appendDummyInput().appendField("[attribute]");
      this.setOutput(true, "String");
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Attribute selector.");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["a_link"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("a:link style")
        .appendField(new Blockly.FieldTextInput("color: blue;"), "STYLE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Style for a:link selector");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["a_visited"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("a:visited style")
        .appendField(new Blockly.FieldTextInput("color: purple;"), "STYLE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Style for a:visited selector");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["a_hover"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("a:hover style")
        .appendField(
          new Blockly.FieldTextInput("text-decoration: underline;"),
          "STYLE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Style for a:hover selector");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["a_active"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("a:active style")
        .appendField(new Blockly.FieldTextInput("color: red;"), "STYLE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Selectors"]);
      this.setTooltip("Style for a:active selector");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["font_properties"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Font Property")
        .appendField(
          new Blockly.FieldDropdown([
            ["font-family", "font-family"],
            ["font-size", "font-size"],
            ["font-style", "font-style"],
            ["font-weight", "font-weight"],
          ]),
          "PROPERTY"
        )
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Text"]);
      this.setTooltip("Font-related CSS properties");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["text_appearance"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Text Appearance")
        .appendField(
          new Blockly.FieldDropdown([
            ["color", "color"],
            ["text-decoration", "text-decoration"],
            ["text-decoration-line", "text-decoration-line"],
            ["text-decoration-color", "text-decoration-color"],
            ["text-decoration-style", "text-decoration-style"],
            ["text-decoration-thickness", "text-decoration-thickness"],
            ["text-transform", "text-transform"],
            ["text-shadow", "text-shadow"],
          ]),
          "PROPERTY"
        )
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Text"]);
      this.setTooltip("Appearance-related CSS properties");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["text_spacing"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Text Spacing")
        .appendField(
          new Blockly.FieldDropdown([
            ["text-align", "text-align"],
            ["text-align-last", "text-align-last"],
            ["text-indent", "text-indent"],
            ["letter-spacing", "letter-spacing"],
            ["line-height", "line-height"],
            ["word-spacing", "word-spacing"],
            ["white-space", "white-space"],
            ["direction", "direction"],
          ]),
          "PROPERTY"
        )
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Text"]);
      this.setTooltip("Spacing-related CSS properties");
      this.setHelpUrl("");
    },
  };

  Blockly.JavaScript["font_properties"] = function (block) {
    const prop = block.getFieldValue("PROPERTY");
    const val = block.getFieldValue("VALUE");
    return `${prop}: ${val};\n`;
  };

  Blockly.JavaScript["text_appearance"] = function (block) {
    const prop = block.getFieldValue("PROPERTY");
    const val = block.getFieldValue("VALUE");
    return `${prop}: ${val};\n`;
  };

  Blockly.JavaScript["text_spacing"] = function (block) {
    const prop = block.getFieldValue("PROPERTY");
    const val = block.getFieldValue("VALUE");
    return `${prop}: ${val};\n`;
  };

  Blockly.Blocks["box_dimensions"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Dimensions")
        .appendField(
          new Blockly.FieldDropdown([
            ["height", "height"],
            ["max-height", "max-height"],
            ["max-width", "max-width"],
            ["min-height", "min-height"],
            ["min-width", "min-width"],
            ["width", "width"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Box Model"]);
      this.setTooltip("Set dimensions for an element");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["box_margin"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Margin (Outer Space)")
        .appendField(
          new Blockly.FieldDropdown([
            ["margin-top", "margin-top"],
            ["margin-right", "margin-right"],
            ["margin-bottom", "margin-bottom"],
            ["margin-left", "margin-left"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Box Model"]);
      this.setTooltip("Set margin spacing");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["box_padding"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Padding (Inner Space)")
        .appendField(
          new Blockly.FieldDropdown([
            ["padding-top", "padding-top"],
            ["padding-right", "padding-right"],
            ["padding-bottom", "padding-bottom"],
            ["padding-left", "padding-left"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Box Model"]);
      this.setTooltip("Set padding spacing");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["border_properties"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Borders")
        .appendField(
          new Blockly.FieldDropdown([
            ["border-radius", "border-radius"],
            ["border-style", "border-style"],
            ["border-width", "border-width"],
            ["border-color", "border-color"],
            ["border-left-style", "border-left-style"],
            ["border-right-style", "border-right-style"],
            ["border-bottom-style", "border-bottom-style"],
            ["border-top-style", "border-top-style"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Box Model"]);
      this.setTooltip("Set border properties");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["outline_properties"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Outlines")
        .appendField(
          new Blockly.FieldDropdown([
            ["outline-style", "outline-style"],
            ["outline-color", "outline-color"],
            ["outline-width", "outline-width"],
            ["outline-offset", "outline-offset"],
            ["outline", "outline"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Box Model"]);
      this.setTooltip("Set outline properties");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["background_properties"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Background")
        .appendField(
          new Blockly.FieldDropdown([
            ["background-color", "background-color"],
            ["background-image", "background-image"],
            ["background-repeat", "background-repeat"],
            ["background-attachment", "background-attachment"],
            ["background-position", "background-position"],
            ["background (shorthand)", "background"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Backgrounds"]);
      this.setTooltip("Set background properties");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["box_shadow"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Box Shadow")
        .appendField(
          new Blockly.FieldTextInput("e.g. 0px 4px 6px #000"),
          "VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Backgrounds"]);
      this.setTooltip("Set box-shadow CSS property");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["opacity_property"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Opacity")
        .appendField(new Blockly.FieldNumber(1, 0, 1, 0.1), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Backgrounds"]);
      this.setTooltip("Set element opacity (0 to 1)");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["display_position"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Property")
        .appendField(
          new Blockly.FieldDropdown([
            ["display", "display"],
            ["position", "position"],
          ]),
          "PROPERTY"
        )
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Layout"]);
      this.setTooltip("Set display or position property");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["position_values"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Position value")
        .appendField(
          new Blockly.FieldDropdown([
            ["static", "static"],
            ["relative", "relative"],
            ["fixed", "fixed"],
            ["absolute", "absolute"],
            ["sticky", "sticky"],
          ]),
          "VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(categoryColors["Style > Layout"]);
      this.setTooltip("Select a position value");
      this.setHelpUrl("");
    },
  };
}
