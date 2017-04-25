
'use strict';

goog.provide('Blockly.Arduino.scott_v1');
goog.require('Blockly.Arduino');


Blockly.Arduino['scott1_forward'] = function(block) {
  Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
  Blockly.Arduino.addSetup('D7','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('D8','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('D9','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('D10','pinMode(MotPins[3], OUTPUT);\n',true);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
  Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
  Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
  Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  Blockly.Arduino.addFunction('avancer','\nvoid avancer(){\n  digitalWrite(MotPins[0], HIGH);\n  digitalWrite(MotPins[1], HIGH);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  var code =  'avancer();\n';
  return code;
};

Blockly.Arduino['scott1_backward'] = function(block) {
  Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
  Blockly.Arduino.addSetup('D7','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('D8','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('D9','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('D10','pinMode(MotPins[3], OUTPUT);\n',true);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
  Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
  Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
  Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  
  Blockly.Arduino.addFunction('reculer', '\nvoid reculer(){\n  digitalWrite(MotPins[0], LOW);\n  digitalWrite(MotPins[1], LOW);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  var code =  'reculer();\n';
  return code;
};

Blockly.Arduino['scott1_right'] = function(block) {
  Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
  Blockly.Arduino.addSetup('D7','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('D8','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('D9','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('D10','pinMode(MotPins[3], OUTPUT);\n',true);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
  Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
  Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
  Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  
  Blockly.Arduino.addFunction('droite', '\nvoid droite(){\n  digitalWrite(MotPins[0], LOW);\n  digitalWrite(MotPins[1], HIGH);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  
  var code =  'droite();\n';
  return code;
};

Blockly.Arduino['scott1_left'] = function(block) {
  Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
  Blockly.Arduino.addSetup('D7','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('D8','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('D9','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('D10','pinMode(MotPins[3], OUTPUT);\n',true);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
  Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
  Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
  Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  
  Blockly.Arduino.addFunction('gauche', '\nvoid gauche(){\n  digitalWrite(MotPins[0], HIGH);\n  digitalWrite(MotPins[1], LOW);\n  analogWrite(MotPins[2], vitesse);\n  analogWrite(MotPins[3], vitesse);\n}');
  
  var code =  'gauche();\n';
  return code;
};

Blockly.Arduino['scott1_stop'] = function(block) {
  Blockly.Arduino.addVariable('MotorPins', 'int MotPins[4] = {7,8,9,10};\n', true);
  Blockly.Arduino.addSetup('D7','pinMode(MotPins[0], OUTPUT);',true);
  Blockly.Arduino.addSetup('D8','pinMode(MotPins[1], OUTPUT);',true);
  Blockly.Arduino.addSetup('D9','pinMode(MotPins[2], OUTPUT);',true);
  Blockly.Arduino.addSetup('D10','pinMode(MotPins[3], OUTPUT);\n',true);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.reservePin( block, 7, Blockly.Arduino.PinTypes.OUTPUT, 'G Motor dir');
  Blockly.Arduino.reservePin( block, 8, Blockly.Arduino.PinTypes.OUTPUT, 'D Motor dir');
  Blockly.Arduino.reservePin( block, 9, Blockly.Arduino.PinTypes.PWM, 'G Motor PWM');
  Blockly.Arduino.reservePin( block, 10, Blockly.Arduino.PinTypes.PWM, 'D Motor PWM');
  
  Blockly.Arduino.addFunction('arreter', '\nvoid arreter(){\n  analogWrite(MotPins[2], 0);\n  analogWrite(MotPins[3], 0);\n}');
  
  var code =  'arreter();\n';
  return code;
};

Blockly.Arduino['scott1_setspeed'] = function(block) {
  var speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addVariable('vitesse', 'int vitesse = 250;\n', true);
  Blockly.Arduino.addFunction('reglerVitesse', '\nvoid reglerVitesse(int valeur){\n  if(valeur > 255)valeur = 255;\n  if(valeur < 0) valeur = 0;\n  vitesse = valeur;\n}');
  var code =  ('reglerVitesse(' + speed + ');\n');
  return code;
};

Blockly.Arduino['scott1_sharp'] = function(block) {
  var pin = 'A5'
  Blockly.Arduino.addVariable('sharpPin', 'int sharpPin = ' + pin + ';\n', true);
  var pinSetupCode = 'pinMode(sharpPin, INPUT);';
  Blockly.Arduino.addSetup('sharp_' + pin, pinSetupCode, false);
  
  Blockly.Arduino.addFunction('distance', '\nint distance(){\n  float volts = analogRead(sharpPin)*0.0048828125;\n  float distance = 65*pow(volts,-1.1);\n  return (int)distance;\n }');

  var code = ('distance()');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

