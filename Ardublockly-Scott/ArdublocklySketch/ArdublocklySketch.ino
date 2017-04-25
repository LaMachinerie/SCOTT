

int CDistance;
boolean PresenceObj;
int sharpPin = A5;

int vitesse = 250;

int MotPins[4] = {10,11,5,6};



int distance(){
  float volts = analogRead(sharpPin)*0.0048828125;
  float distance = 65*pow(volts,-1.1);
  return (int)distance;
}


void reglerVitesse(int valeur){
  if(valeur > 255)valeur = 255;
  if(valeur < 0) valeur = 0;
vitesse = valeur;
}


void arreter(){
  analogWrite(MotPins[2], 0);
  analogWrite(MotPins[3], 0);
}


void reculer(){
  digitalWrite(MotPins[0], LOW);
  digitalWrite(MotPins[1], LOW);
  analogWrite(MotPins[2], vitesse);
  analogWrite(MotPins[3], vitesse);
}


void avancer(){
  digitalWrite(MotPins[0], HIGH);
  digitalWrite(MotPins[1], HIGH);
  analogWrite(MotPins[2], vitesse);
  analogWrite(MotPins[3], vitesse);
}


void droite(){
  digitalWrite(MotPins[0], LOW);
  digitalWrite(MotPins[1], HIGH);
  analogWrite(MotPins[2], vitesse);
  analogWrite(MotPins[3], vitesse);
}


void gauche(){
  digitalWrite(MotPins[0], HIGH);
  digitalWrite(MotPins[1], LOW);
  analogWrite(MotPins[2], vitesse);
  analogWrite(MotPins[3], vitesse);
}

// Describe this function...
boolean Chercher() {
  reglerVitesse(50);
  droite();
  if (distance() < 200) {
    reglerVitesse(vitesse);
    arreter();
    return true;
  }
  return false;
}


void setup() {
  pinMode(sharpPin, INPUT);
  pinMode(MotPins[0], OUTPUT);
  pinMode(MotPins[1], OUTPUT);
  pinMode(MotPins[2], OUTPUT);
  pinMode(MotPins[3], OUTPUT);


  CDistance = 50;
  delay(3000);
  PresenceObj = true;

}

void loop() {
  if (distance() < 200) {
    if (distance() > 10) {
      PresenceObj = true;
      reglerVitesse((abs((distance() - CDistance)) * 4));
      if (distance() > CDistance - 5 && distance() < CDistance + 5) {
        arreter();
      } else if (distance() < CDistance) {
        reculer();
      } else {
        avancer();
      }
    }
  } else {
    if(PresenceObj) {
      PresenceObj = Chercher();
    }
  }


}


