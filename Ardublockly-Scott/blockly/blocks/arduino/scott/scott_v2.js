/**
*	Scott Robot Blocks Library
*	    La Machinerie 2017
*
*          Jules Topart
*
*
*/

/**
 * TODO: Add angle selector instead of block input.
 */
 
'use strict';

goog.provide('Blockly.Blocks.scott_v2');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.scott_v2.HUE = 60;

Blockly.Blocks['scott2_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avancer Scott");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Fait avancer Scott');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott2_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reculer Scott");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Fait reculer Scott');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott2_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Trouner Scott à droite");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('Fait tourner Scott vers la droite');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott2_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Trouner Scott à gauche");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('Fait tourner Scott vers la gauche');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott2_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter Scott");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Fait s'arrêter Scott");
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott2_setspeed'] = {
  init: function() {
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("Régler la vitesse à:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['scott2_sharp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Regarder devant (en mm)");
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour(330);
    this.setTooltip('Donne la distance entre scott et un possible obstacle (en mm)');
    this.setHelpUrl('http://www.example.com/');
  }
};