from pynput.keyboard import Key, Controller
import serial

arduinoData = serial.Serial('/dev/cu.usbserial-14440', 38400)
keyboard = Controller()
while (True):
    myData = (arduinoData.readline().strip())
    if (myData.decode("utf-8") == "press"):
        keyboard.press("a")
        keyboard.release("a")

    # print(myData.decode("utf-8"))
