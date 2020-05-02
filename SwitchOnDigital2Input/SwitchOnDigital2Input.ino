const int iSwitchPin = 2;
int iSwitchValue = 0;


void setup() {
  // put your setup code here, to run once:
  pinMode(iSwitchPin, INPUT);

  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  iSwitchValue = digitalRead(2);

  Serial.println(iSwitchValue);

  delay(10); // 読むまで待機するらしい
}
