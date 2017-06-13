
'use strict';

goog.provide('Blockly.Arduino.scott_v1');
goog.require('Blockly.Arduino');


//Latest version by default
var SCOTT_VERSION = 2;

Blockly.Arduino['scott_forward'] = function(block) {
  if(SCOTT_VERSION == 1){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
    Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }else if(SCOTT_VERSION == 2){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {10,11,5,6};\n', true);
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block,11, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 5, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 6, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }

  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addSetup('MotP0','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP1','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP2','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP3','pinMode(MotPins[3], OUTPUT);\n',true);
  
  Blockly.Arduino.addFunction('avancer','\nvoid avancer(){\n  digitalWrite(MotPins[0], HIGH);\n  digitalWrite(MotPins[1], HIGH);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  var time = Blockly.Arduino.valueToCode(block, 'TIMEF', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'avancer();\ndelay('+time+');\n';
  return code;
};

Blockly.Arduino['scott_backward'] = function(block) {
  if(SCOTT_VERSION == 1){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
    Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }else if(SCOTT_VERSION == 2){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {10,11,5,6};\n', true);
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block,11, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 5, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 6, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addSetup('MotP0','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP1','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP2','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP3','pinMode(MotPins[3], OUTPUT);\n',true);
  
  Blockly.Arduino.addFunction('reculer', '\nvoid reculer(){\n  digitalWrite(MotPins[0], LOW);\n  digitalWrite(MotPins[1], LOW);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  var time = Blockly.Arduino.valueToCode(block, 'TIMEF', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'avancer();\ndelay('+time+');\n';
  return code;
};

Blockly.Arduino['scott_right'] = function(block) {
  if(SCOTT_VERSION == 1){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
    Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }else if(SCOTT_VERSION == 2){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {10,11,5,6};\n', true);
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block,11, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 5, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 6, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addSetup('MotP0','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP1','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP2','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP3','pinMode(MotPins[3], OUTPUT);\n',true);
  
  Blockly.Arduino.addFunction('droite', '\nvoid droite(){\n  digitalWrite(MotPins[0], LOW);\n  digitalWrite(MotPins[1], HIGH);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  
  var time = Blockly.Arduino.valueToCode(block, 'TIMER', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'avancer();\ndelay('+time+');\n';
  return code;
};

Blockly.Arduino['scott_left'] = function(block) {
  if(SCOTT_VERSION == 1){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
    Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }else if(SCOTT_VERSION == 2){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {10,11,5,6};\n', true);
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block,11, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 5, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 6, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addSetup('MotP0','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP1','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP2','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP3','pinMode(MotPins[3], OUTPUT);\n',true);
  
  Blockly.Arduino.addFunction('gauche', '\nvoid gauche(){\n  digitalWrite(MotPins[0], HIGH);\n  digitalWrite(MotPins[1], LOW);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  
  var time = Blockly.Arduino.valueToCode(block, 'TIMEL', Blockly.Arduino.ORDER_ATOMIC);
  var code =  'gauche();\ndelay('+time+');\n';
  return code;
};

Blockly.Arduino['scott_stop'] = function(block) {
  if(SCOTT_VERSION == 1){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
    Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }else if(SCOTT_VERSION == 2){
    Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {10,11,5,6};\n', true);
    Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
    Blockly.Arduino.reservePin( block,11, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
    Blockly.Arduino.reservePin( block, 5, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
    Blockly.Arduino.reservePin( block, 6, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  }
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addSetup('MotP0','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP1','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP2','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('MotP3','pinMode(MotPins[3], OUTPUT);\n',true);
  
  Blockly.Arduino.addFunction('arreter', '\nvoid arreter(){\n  analogWrite(MotPins[2], 0);\n  analogWrite(MotPins[3], 0);\n}');
  var code =  'arreter();\n';
  return code;
};

Blockly.Arduino['scott_setspeed'] = function(block) {
  var speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addFunction('reglerVitesse', '\nvoid reglerVitesse(int valeur){\n  if(valeur > 255)valeur = 255;\n  if(valeur < 0) valeur = 0;\n  vitesse = valeur;\n}');
  var code =  ('reglerVitesse(' + speed + ');\n');
  return code;
};

Blockly.Arduino['scott_sharp'] = function(block) {
  var pin = 'A5'
  Blockly.Arduino.addVariable('sharpPin', 'int sharpPin = ' + pin + ';\n', true);
  var pinSetupCode = 'pinMode(sharpPin, INPUT);';
  Blockly.Arduino.addSetup('sharp_' + pin, pinSetupCode, false);
  
  Blockly.Arduino.addFunction('distance', '\nint distance(){\n  float volts = analogRead(sharpPin)*0.0048828125;\n  float distance = 65*pow(volts,-1.1);\n  return (int)distance;\n }');

  var code = ('distance()');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['scott_version'] = function(block) {
  var dropdown_setversion = block.getFieldValue('setVersion');
  
  SCOTT_VERSION = dropdown_setversion;
  var value_version = Blockly.Arduino.valueToCode(block, 'Version', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addSetup('Version','//SCOTT_VERSION SETUP', true)
  var code = '';
  return code;
};
