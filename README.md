# Instruction for installation in Rapsbian

## Step 1:
* Open terminal
* pip3 install -r requirement.txt
* python3 flappy.py
* http://localhost:5000

## Step 2:
* Open .bashrc
* Add: sudo python3 <directory/flappy.py>

## Step 3:
* sudo nano /home/pi/.config/lxsession/LXDE-pi/autostart
* Add:
* @xset s noblank
* @xset s off
* @xset -dpms
* @chromium-browser --igcognito --kiosk http://localhost:5000

## How to play game
* spacebar or up arrow key to control the bird