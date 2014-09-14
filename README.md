RPi-web
=======

ExpressJS on RPi to control GPIO


1. Install nodeJS and npm -(http://weworkweplay.com/play/raspberry-pi-nodejs/)

wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb 

2. Install expressJS

npm install express


3. Install pi-gpio (https://www.npmjs.org/package/pi-gpio)

npm install pi-gpio

install gpio-admin

git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
cd quick2wire-gpio-admin
make
sudo make install
sudo adduser $USER gpio
