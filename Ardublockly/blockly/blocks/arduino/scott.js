/**
*	Scott Robot Blocks Library
*	    La Machinerie 2017
*
*          Jules Topart
*
*
*/
 
'use strict';

goog.provide('Blockly.Blocks.scott_v1');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.scott_v1.HUE = 60;


Blockly.Blocks['scott_forward'] = {
  init: function() {
	this.appendValueInput("TIMEF")
        .setCheck("Number")
        .appendField("Avancer Scott pendant (ms)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('Fait avancer Scott pendant un certain temps');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott_backward'] = {
  init: function() {
	this.appendValueInput("TIMEB")
        .setCheck("Number")
        .appendField("Reculer Scott pendant (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('Fait reculer Scott pendant un certain temps');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott_right'] = {
  init: function() {
	this.appendValueInput("TIMER")
        .setCheck("Number")
        .appendField("Tourner Scott vers la droite pendant (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('Fait tourner Scott vers la droite pendant un certain temps');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott_left'] = {
  init: function() {
	this.appendValueInput("TIMEL")
        .setCheck("Number")
        .appendField("Tourner Scott vers la Gauche pendant (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('Fait tourner Scott vers la gauche pendant un certain temps');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott_stop'] = {
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

Blockly.Blocks['scott_setspeed'] = {
  init: function() {
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("Régler la vitesse à:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('Régle la vitesse des moteur (valeur entre 0 et 255)');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scott_sharp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Regarder devant (en mm)");
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour(330);
    this.setTooltip('Donne la distance entre Scott et un possible obstacle en mm');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['scott_version'] = {
  init: function() {
    this.appendDummyInput("Version")
        .appendField("Sélectionner la version de Scott: ")
        .appendField(new Blockly.FieldDropdown([["V1", "1"], ["V2", "2"]]), "setVersion");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
