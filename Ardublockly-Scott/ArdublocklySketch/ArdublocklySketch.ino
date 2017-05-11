// Ardublockly generated sketch
int Distance;
int sharpPin = A5;

int vitesse = 250;

int MotPins[4] = {7,8,9,10};



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


void setup() {
  //SCOTT_VERSION SETUP
  pinMode(sharpPin, INPUT);
  pinMode(MotPins[0], OUTPUT);
  pinMode(MotPins[1], OUTPUT);
  pinMode(MotPins[2], OUTPUT);
  pinMode(MotPins[3], OUTPUT);


  Distance = 50;

}

void loop() {
  if (distance() < 400) {
    reglerVitesse((abs((Distance - distance())) * 5));
    if (distance() < Distance + 5 && distance() > Distance - 5) {
      arreter();
    } else if (distance() < Distance) {
      reculer();
    } else {
      avancer();
    }
  } else {
    arreter();
  }

}