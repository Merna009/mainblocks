// Import all block definition functions
import { defineHtmlBlocks } from './html-blocks.js';
import { defineLayoutBlocks } from './layout-blocks.js';
import { defineTextBlocks } from './text-blocks.js';
import { defineListBlocks } from './list-blocks.js';
import { defineMediaBlocks } from './media-blocks.js';
import { defineFormBlocks } from './form-blocks.js';
import { defineTableBlocks } from './table-blocks.js';
import { defineStyleBlocks } from './style-blocks.js';
import { defineScriptBlocks } from './script-blocks.js';
import { defineHtmlGenerators } from './html-blocks.js';
import {defineLayoutGenerators} from './layout-blocks.js';



// Export a function that defines all blocks
export function defineAllBlocks() {
  console.log('Defining HTML blocks...');
  defineHtmlBlocks();
  
  console.log('Defining Layout blocks...');
  defineLayoutBlocks();
  
  console.log('Defining Text blocks...');
  defineTextBlocks();
  
  console.log('Defining List blocks...');
  defineListBlocks();
  
  console.log('Defining Media blocks...');
  defineMediaBlocks();
  
  console.log('Defining Form blocks...');
  defineFormBlocks();
  
  console.log('Defining Table blocks...');
  defineTableBlocks();
  
  console.log('Defining Style blocks...');
  defineStyleBlocks();
  
  console.log('Defining Script blocks...');
  defineScriptBlocks();
  
  console.log('All blocks defined successfully!');
}

export function defineAllGeneratoesBlocks(Blockly){
  console.log('Defining html generators');
  defineHtmlGenerators(Blockly);

  console.log('Defining layout generators');
  defineLayoutGenerators(Blockly);
}