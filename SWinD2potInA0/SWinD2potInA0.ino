const int iSwitchPin = 2;
const int iPotentiometerPin = A0;
int iSwitchValue = 0;
int iPotentiometerValue = 0;


void setup() {
  // put your setup code here, to run once:
  pinMode(iSwitchPin, INPUT);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  iSwitchValue = digitalRead(iSwitchPin);
  iPotentiometerValue = analogRead(iPotentiometerPin);

//  Serial.println(iSwitchValue+","+iPotentiometerValue);
//  Serial.println(iPotentiometerValue);
 Serial.print(iSwitchValue);
 Serial.print(",");
 Serial.println(iPotentiometerValue);

  delay(10); // 読むまで待機するらしい
}
