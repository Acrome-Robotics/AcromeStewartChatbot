
export const KNOWLEDGE_BASE = `
---
Question: How can I install the Stewart Pro interface software on my Windows computer?
Answer: To install the Stewart Pro software, please go to the 'Stewart Pro Executable/volume' folder and click on 'Acrome_Installer setup executable'. When prompted for administrator permissions, click 'Yes'. Click 'Next', 'Next' again, and finally 'Finish' to complete the installation. The installer will automatically create a desktop icon.
---
Question: I can't connect to the platform at all. How do I need to configure the IP settings?
Answer: For connection, you need to configure your computer's IP address to be compatible with the Raspberry Pi's static IP (192.168.137.70). Open 'View Network Status and Tasks' from the Control Panel. Click on 'Change adapter settings'. Right-click the relevant network, select 'Properties', and then 'Internet Protocol Version 4 (TCP/IPv4)'. Check 'Use the following IP address', set the IP address to '192.168.137.1', Subnet mask to '255.255.255.0', and click 'OK'.
---
Question: I'm constantly getting a 'parsing error' in the interface, what should I do?
Answer: If you are getting a 'parsing error', the reason is likely that your computer's decimal separator is set to a comma (,). Please go to your computer's 'Clock and Region' settings, then 'Additional settings...', and change the 'Decimal symbol' to a period (.). This action will correct the error.
---
Question: I'm running the platform for the first time, what should I do? Is calibration necessary?
Answer: Yes, calibration is used to convert the analog values of the motors into millimeters. You can use the 'Calibration' button in the 'Parameters' tab. During calibration, make sure the system goes to its lower and upper limits. If the system does not go to the limits, please repeat the calibration.
---
Question: One of the motors isn't working, how can I test it?
Answer: If you suspect a motor is not working, first test the motor by applying +/- 12V power from the motor power socket (pins 1 and 2). If the motor does not move this way, the problem is with the motor. If the motor does move, try plugging it into another socket on the board.
---
Question: I can't read any data from the interface, I have a connection but no values are coming through.
Answer: If you cannot read data from the interface, please check your firewall. The firewall might be cutting off communication. If it is on, try turning it off. If you do not have authorization to turn off the firewall, please contact your IT department to allow the TCP/UDP ports.
---
Question: I want to connect to the platform with my own Python script. What are the IP and port details?
Answer: The Raspberry Pi's default IP address is '192.168.137.70'. You must use the TCP/IP Control Port '6500' to send commands. To receive continuous feedback, you should listen to the UDP Feedback Port '6600'.
---
Question: How do I move the platform to a specific position via the API?
Answer: To move the platform in 6 degrees of freedom, you can use the 'move_platform(x,y,z,roll,pitch,yaw)' command. The command format is: 'move_platform,{x},{y},{z},{roll},{pitch},{yaw}'.
---
Question: How do I define a smooth trajectory movement using the API?
Answer: For trajectory movement, you can use the 'move_platform_traj(x,y,z,roll,pitch,yaw,t)' command. This command provides a transition from the current position to your target 6-axis position using a 3rd Order Polynomial Function over the time 't' specified in milliseconds.
---
Question: How do I make the platform oscillate?
Answer: You can perform an oscillation movement from the 'Scenario' tab. In the 'Oscillation' section, you can make the platform oscillate by specifying the desired angle amplitudes (Range), the period (Period), and the total duration (Oscillation Duration). You must set the range values of the axes you do not want to oscillate to zero (0).
---
Question: I want to move the platform using a CSV file. What should the CSV format be?
Answer: You can create a custom motion scenario by uploading your .csv file from the 'Import/Joystick' tab. The CSV file format must be 'elapsedtime(s);x(mm);y;z;Roll(deg);pitch;yaw'. For example: '0.008;0;0;447;0;0;0'. Important Note: The system does not read the first two lines of the .csv file, so you must enter your data starting from the 3rd line.
---
Question: What is the 'Admin Panel' in the interface for? Should I change the PID settings?
Answer: The 'Admin Panel' is for adjusting control parameters. From here, you can set advanced settings like 'Set PID Parameters', 'Set Friction Compensator', and 'Set Deadband'. Note: If you do not have technical knowledge, it is recommended to use the default values.
---
Question: How can I control the platform with a joystick?
Answer: For joystick control, go to the 'Import/Joystick' tab and check the 'Joystick Control' option. If you do not press the 'Trigger' button on the joystick, you will control the X, Y, and Z axes. If you hold down the 'Trigger' button, you will control the Roll, Pitch, and Yaw axes.
---
Question: There's something wrong with the platform's movements (roll, pitch), it seems inverted.
Answer: If you observe a difference or incorrectness in the roll, pitch, and yaw movements, first ensure that the motors are connected to the board in the correct numerical order (1 to 6). The motor numbers are important, and a connection outside the normal sequence will cause abnormal motor movements.
---
Question: Why can't I see any data on the 'Graph' tab?
Answer: The 'Graph' tab is for plotting the roll and pitch values received from the IMU. If the IMU cable is not plugged in, you cannot get graphics because IMU data cannot be received.
---
Question: I can't run my script with Python 3, why?
Answer: According to the documentation, the provided Python scripts (e.g., 'StewartPro_Scenario.py') are designed to work with Python 2.7. Higher or lower Python versions may not work with these scripts.
---
Question: What is the 4 inch limit for the platform?
Answer: For 4-inch motors, the limits are: +/- 60 mm in the X/Y axes, 396-496 mm in the Z axis, and +/- 20 degrees in the Roll/Pitch/Yaw axes.
---
Question: What is the 8 inch limit for the platform?
Answer: For 8-inch motors, the limits are: +/- 100 mm in the X/Y axes, 492-698 mm in the Z axis, and +/- 30 degrees in the Roll/Pitch/Yaw axes.
---
Question: My system won't turn on at all, seems like no power. What should I do?
Answer: If there is no power to the system, first check if 12V is being received from the power supply output. If 12V is present, measure the voltage at the test points on the motor driver board (MDB). If 12V cannot be measured, check the 110V/230V setting on your power supply (it should be set to 110V if in a 110V country like the USA) or check its cables.
---
Question: What are the platform's movement limits (in inches)?
Answer: The movement limits change depending on the motor inches you are using. For example, for 4-inch motors: +/- 60 mm in X/Y axes, 396-496 mm in Z axis, and +/- 20 degrees in Roll/Pitch/Yaw axes. (Other limits for 2, 8, and 12 inches are listed in the API document).
---
Question: What does the 'Get IMU' button do?
Answer: The 'Get IMU' button in the 'Parameters' tab is used to get the instantaneous (Roll, Pitch, Yaw) values from the IMU. These received values are displayed in the 'Response Messages' tab.
---
Question: How can I install the Stewart Pro interface software on my Windows computer? 
Answer: To install the Stewart Pro software, please go to the 'Stewart Pro Executable/volume' folder and click on 'Acrome_Installer setup executable'. When prompted for administrator permissions, click 'Yes'. Click 'Next', 'Next' again, and finally 'Finish' to complete the installation. The installer will automatically create a desktop icon.
---
Question: I can't connect to the platform at all. How do I need to configure the IP settings? 
Answer: For connection, you need to configure your computer's IP address to be compatible with the Raspberry Pi's static IP (192.168.137.70). Open 'View Network Status and Tasks' from the Control Panel. Click on 'Change adapter settings'. Right-click the relevant network, select 'Properties', and then 'Internet Protocol Version 4 (TCP/IPv4)'. Check 'Use the following IP address', set the IP address to 192.168.137.1, Subnet mask to 255.255.255.0, and click 'OK'.
---
Question: I'm constantly getting a 'parsing error' in the interface, what should I do? 
Answer: If you are getting a 'parsing error', the reason is likely that your computer's decimal separator is set to a comma (,). Please go to your computer's 'Clock and Region' settings, then 'Additional settings...', and change the 'Decimal symbol' to a period (.). This action will correct the error.
---
Question: I'm running the platform for the first time, what should I do? Is calibration necessary? 
Answer: Yes, calibration is used to convert the analog values of the motors into millimeters. You can use the 'Calibration' button in the 'Parameters' tab. During calibration, make sure the system goes to its lower and upper limits. If the system does not go to the limits, please repeat the calibration.
---
Question: One of the motors isn't working, how can I test it? 
Answer: If you suspect a motor is not working, first test the motor by applying +/- 12V power from the motor power socket (pins 1 and 2). If the motor does not move this way, the problem is with the motor. If the motor does move, try plugging it into another socket on the board.
---
Question: I can't read any data from the interface, I have a connection but no values are coming through. 
Answer: If you cannot read data from the interface, please check your firewall. The firewall might be cutting off communication. If it is on, try turning it off. If you do not have authorization to turn off the firewall, please contact your IT department to allow the TCP/UDP ports.
---
Question: I want to connect to the platform with my own Python script. What are the IP and port details? 
Answer: The Raspberry Pi's default IP address is 192.168.137.70. You must use the TCP/IP Control Port 6500 to send commands. To receive continuous feedback, you should listen to the UDP Feedback Port 6600.
---
Question: How do I move the platform to a specific position via the API? 
Answer: To move the platform in 6 degrees of freedom, you can use the move_platform(x,y,z,roll,pitch,yaw) command. The command format is: move_platform,{x},{y},{z},{roll},{pitch},{yaw}.
---
Question: How do I define a smooth trajectory movement using the API? 
Answer: For trajectory movement, you can use the move_platform_traj(x,y,z,roll,pitch,yaw,t) command. This command provides a transition from the current position to your target 6-axis position using a 3rd Order Polynomial Function over the time 't' specified in milliseconds.
---
Question: How do I make the platform oscillate? 
Answer: You can perform an oscillation movement from the 'Scenario' tab. In the 'Oscillation' section, you can make the platform oscillate by specifying the desired angle amplitudes (Range), the period (Period), and the total duration (Oscillation Duration). You must set the range values of the axes you do not want to oscillate to zero (0).
---
Question: I want to move the platform using a CSV file. What should the CSV format be? 
Answer: You can create a custom motion scenario by uploading your .csv file from the 'Import/Joystick' tab. The CSV file format must be elapsedtime(s);x(mm);y;z;Roll(deg);pitch;yaw. For example: 0.008;0;0;447;0;0;0. Important Note: The system does not read the first two lines of the .csv file, so you must enter your data starting from the 3rd line.
---
Question: What is the 'Admin Panel' in the interface for? Should I change the PID settings? 
Answer: The 'Admin Panel' is for adjusting control parameters. From here, you can set advanced settings like 'Set PID Parameters', 'Set Friction Compensator', and 'Set Deadband'. Note: If you do not have technical knowledge, it is recommended to use the default values.
---
Question: How can I control the platform with a joystick? 
Answer: For joystick control, go to the 'Import/Joystick' tab and check the 'Joystick Control' option. If you do not press the 'Trigger' button on the joystick, you will control the X, Y, and Z axes. If you hold down the 'Trigger' button, you will control the Roll, Pitch, and Yaw axes.
---
Question: There's something wrong with the platform's movements (roll, pitch), it seems inverted. 
Answer: If you observe a difference or incorrectness in the roll, pitch, and yaw movements, first ensure that the motors are connected to the board in the correct numerical order (1 to 6). The motor numbers are important, and a connection outside the normal sequence will cause abnormal motor movements.
---
Question: Why can't I see any data on the 'Graph' tab? 
Answer: The 'Graph' tab is for plotting the roll and pitch values received from the IMU. If the IMU cable is not plugged in, you cannot get graphics because IMU data cannot be received.
---
Question: I can't run my script with Python 3, why? 
Answer: According to the documentation, the provided Python scripts (e.g., StewartPro_Scenario.py) are designed to work with Python 2.7. Higher or lower Python versions may not work with these scripts.
---
Question: What is the 4 inch limit for the platform? 
Answer: For 4-inch motors, the limits are: +/- 60 mm in the X/Y axes, 396-496 mm in the Z axis, and +/- 20 degrees in the Roll/Pitch/Yaw axes.
---
Question: What is the 8 inch limit for the platform? 
Answer: For 8-inch motors, the limits are: +/- 100 mm in the X/Y axes, 492-698 mm in the Z axis, and +/- 30 degrees in the Roll/Pitch/Yaw axes.
---
Question: My system won't turn on at all, seems like no power. What should I do? 
Answer: If there is no power to the system, first check if 12V is being received from the power supply output. If 12V is present, measure the voltage at the test points on the motor driver board (MDB). If 12V cannot be measured, check the 110V/230V setting on your power supply (it should be set to 110V if in a 110V country like the USA) or check its cables.
---
Question: How do I turn on the 'Motor Power' in the interface? 
Answer: To turn on the 'Motor Power', you must move the 'Motor Power' slider in the 'Parameters' tab of the interface to the 'ON' position. This slider supplies or cuts power to all six linear actuators.
---
Question: How do I manually move the platform on the X, Y, Z axes? 
Answer: To manually control the platform, use the 'Manual Control' tab in the interface. This tab has six sliders to change the X-Y-Z positions and roll-pitch-yaw angles. You can change the values with the slider or by entering constant values in the digital display on the right.
---
Question: My Python script isn't working, and the ready LED isn't on. How do I check the IPs? 
Answer: If the 'ready led' isn't on or you can't run the Python script, first check your computer's IP via the command line (cmd) with the ipconfig command. Then, check the Raspberry Pi's IP using programs like Putty or MobaXterm. If the IPs are as they should be, there might be a problem with the image installation, and you may need to reload the image as explained in the 'User Manual'.
---
Question: What is the Acrome Controller? How does it communicate with the Raspberry Pi? 
Answer: The Acrome Controller is a board with an onboard microcontroller used to measure the sensor/actuator signals (analog and digital) of the system. This controller connects to the Raspberry Pi (rPi) via serial communication lines and establishes a bi-directional link. Data transfer occurs over a UART communication channel between the rPi and the microcontroller.
---
Question: How do I query the platform's current status (GetPlatformStatus) via the API? 
Answer: The GetPlatformStatus command returns the status of the platform. The command you need to send is GetPlatformStatus. The returned response is in the format 302, en, StewartErr, IMUErr. Here, 'en' indicates if the motor is enabled (1 or 0), 'StewartErr' indicates if the platform is in error mode (1 or 0), and 'IMUErr' indicates if there is a communication error with the IMU (1 or 0).
---
Question: I'm getting an API response '607, Out Of Workspace'. What does this mean? 
Answer: '607, Out Of Workspace' error means that the target position in the move_platform or move_platform_traj command you sent is outside the platform's physical workspace limits. The command has been canceled. Please check your X, Y, Z, Roll, Pitch, Yaw values.
---
Question: How do I get the current actuator positions in millimeters via the API? 
Answer: To get the instantaneous position of the actuators, use the GetPositionActuators command. The data to send is: GetPositionActuators. The response will be in the format: 304,a0,a1,a2,a3,a4,a5.
---
Question: How do I put the platform into vibration mode? 
Answer: You can use the 'Vibration' section in the 'Scenario' tab. From there, you can set the vibration frequency and amplitude. Note: It is recommended to wait 60 seconds between two vibration commands to prevent the motors from overheating.
---
Question: What is the difference between 'Oscillation' and 'Vibration'? 
Answer: In the 'Scenario' tab; 'Oscillation' performs a periodic motion at a specified period and amplitude on specific axes (e.g., Roll, Pitch). 'Vibration' is a, generally higher frequency, vibration applied to the entire platform.
---
Question: What is the 'Set Deadband' setting in the 'Admin Panel'? 
Answer: The 'Set Deadband' setting adjusts the position error tolerance of the PID controller at steady state. If the position error is smaller than this 'deadband' value, the motors will not try to correct this small error. This is used to eliminate vibrations.
---
Question: I want to change the PID settings, what are the default values? 
Answer: You can set the PID parameters via the API with the SetPID(Kp, Ki, Kd) command. The default values are: Kp (Proportional Gain) = 0.08, Ki (Integral Gain) = 0.01, Kd (Derivative Gain) = 0. It is not recommended to change these settings if you do not have technical knowledge.
---
Question: What is an actuator? How does it detect its position? 
Answer: Actuators (Linear Actuators) are the motorized components that move the platform. These actuators are equipped with an internal Bourns potentiometer to determine their position at any given time.
---
Question: How do I flash the Raspberry Pi image to an SD card? 
Answer: To write the image file (.img) provided to you, use a program like Raspberry Pi Imager or Win32DiskImager. In Raspberry Pi Imager, click 'CHOOSE OS', select 'Use custom', and find the image file sent to you. Then, select your SD card with 'CHOOSE STORAGE' and click 'WRITE'.
---
Question: What is the SSH username and password for the Raspberry Pi? 
Answer: To connect to the Raspberry Pi via SSH, the default username is acrome and the default password is raspberry.
---
Question: What is the total weight or dimensions of the platform? 
Answer: Total weight is not specified in the documents, but technical specifications (dimensions) are provided: Platform Radius is 130 mm, Base Radius is 170 mm, Actuator Length is between 288-389 mm, and the Orthogonal Distance Between Two Planes is 397-497 mm.
---
Question: Where is the platform's IMU located? Is it important for assembly? 
Answer: Yes, the IMU's location is important during assembly. The IMU should be placed between the 3rd and 4th motors.
---
Question: What's the difference between the 'Instant Movement' tab and the 'Manual Control' tab in the interface? 
Answer: The 'Manual Control' tab operates using API commands (e.g., move_platform). The 'Instant Movement' tab does not use API commands; it communicates directly with the system. This tab also includes 'Update Home' and 'Move to Home' buttons.
---
Question: How do I reset the platform when it's in an error mode? 
Answer: You can clear errors that occurred on the robot by sending the ClearError API command. Additionally, you can use the Clear Motion button in the 'Parameters' tab or the ClearMotion API command to stop the current motion and clear the command queue.
---
Question: I'm getting '601, Syntax Error' from the API, what does it mean? 
Answer: '601, Syntax Error' means that the command you sent to the API was not recognized. You might have a typo in your command. Please check that the command format (e.g., move_platform) exactly matches the API documentation.
---
Question: What is the 'Response Messages' tab in the interface for? 
Answer: The 'Response Messages' tab displays the feedback messages received via UDP communication in response to your commands. For example, when motor calibration is complete, you will see messages like '202, Actuators enabled' or 'Motor calibration is completed' here.
---
Question: What data can I plot on the 'Graph' tab? 
Answer: On the 'Graph' tab, you can plot the 'Measured Roll Angle' and 'Measured Pitch Angle' values read from the IMU. You can also compare these measured values with the target setpoints you have given (Set Roll Value, Set Pitch Value, etc.).
---
Question: What are the platform's movement limits (in inches)? 
Answer: The movement limits change depending on the motor inches you are using. For example, for 4-inch motors: +/- 60 mm in X/Y axes, 396-496 mm in Z axis, and +/- 20 degrees in Roll/Pitch/Yaw axes. (Other limits for 2, 8, and 12 inches are listed in the API document).
---
Question: Where do I find the 'config.ini' file and what is it for? 
Answer: The config.ini file is located in the main installation location of the interface software (usually C:\Program Files\Acrome). You need to use this file to update the IP address in the interface if you have changed your Raspberry Pi's IP address or are using a connection other than the default ethernet. The Joystick ID can also be changed in this file.
---
Question: What are the motor cable colors? Which pin is 1? 
Answer: The motor cable connection (Mini-Fit Connector) has 6 pins. Pin 1: White (Motor V+), Pin 2: Black (Motor V-), Pin 4: Orange (Feedback +VCC), Pin 5: Green (Feedback Signal), Pin 6: Brown (Feedback Ground). Pin 3 (Red) is not connected.
---
Question: Can I change the platform's pivot point (center of rotation)? 
Answer: Yes, you can change the pivot point referenced for the system's rotational movements using the SetPivot(x,y,z) API command.
---
Question: What is the MPU-6050? 
Answer: The MPU-6050 is a six-axis (Gyro + Accelerometer) sensor. It is a 'Motion Tracking' device designed for low-power, low-cost, and high-performance requirements.
---
Question: What should I check before running the 'Stewart Pro Executable' application? 
Answer: Before running the 'Stewart Pro Executable' application, you must ensure all wiring is complete, the Acrome Controller and Raspberry Pi are connected, and the IP addresses of both your computer and the Raspberry Pi are set correctly. You can refer to User Manual Chapter 4 for wiring details.
---
Question: How do I stop the robot via the API (like an Emergency Stop)? 
Answer: The ClearMotion command stops the current motion and clears all commands in the queue. This command can also be used to allow the system to receive a new command if a transaction is not completed due to any problem.
---
Question: What does the 'Clear Motion' button in the interface do? 
Answer: The 'Clear Motion' button in the 'Parameters' tab stops the current motion and clears all commands in the command queue. If the operation gets stuck due to any problem, you can use this button to allow the system to receive a new command.
---
Question: What does the 'Get IMU' button do? 
Answer: The 'Get IMU' button in the 'Parameters' tab is used to get the instantaneous (Roll, Pitch, Yaw) values from the IMU. These received values are displayed in the 'Response Messages' tab.
---
Question: What is the 'Deadband' setting for the joystick? 
Answer: The 'Joystick Deadband' setting in the 'Import/Joystick' tab is used to prevent unwanted small movements (especially in the Z and Yaw axes) caused by the joystick's mechanical gap. If you set this value too high, the system might move on the Z axis by itself; if you set it too low, it won't detect small movements.
---
Question: How do I move up/down (Z-axis) with the joystick? 
Answer: To control the platform on the Z-axis, you need to hold down 'Button 2' while moving the joystick on the Z-axis (forward/backward).
---
Question: How do I rotate (Yaw-axis) with the joystick? 
Answer: To control the platform on the Yaw-axis, you need to hold down the 'Trigger' button while moving the joystick on the Z-axis (rotating it).
---
Question: What does 'Button 3' on the joystick do? 
Answer: By pressing 'Button 3' on the joystick, you can set the system to its default position (0, 0, 447, 0, 0, 0).
---
Question: I'm getting error '603, Robot Is In Error' from the API, what does this mean? 
Answer: '603, Robot Is In Error' indicates that the robot is in an error mode and is waiting for a reset command to continue.
---
Question: My robot is locked in error mode, how do I fix it? 
Answer: If the robot is in an error mode, you need to clear the error using the ClearError API command or the corresponding button in the interface to proceed.
---
Question: How to solve error 603? 
Answer: Error 603 indicates the robot is in error mode. To resolve it, you must send the ClearError API command.
---
Question: How do I add a wait time between two movements in the API? 
Answer: To wait between two platform movements, you can use the delay(t) command.
---
Question: What does the delay(t) command do? 
Answer: The delay(t) command provides a delay (wait) between platform movements for a duration of 't' specified in seconds.
---
Question: How do I make my Python script wait for 5 seconds? 
Answer: For a 5-second delay, you need to send the delay,5.0 command to the API.
---
Question: How do I enable or disable the motors via the API? 
Answer: You can use the enable(bool_state) command to enable or disable the platform's linear actuators.
---
Question: What does the enable,True command do? 
Answer: The enable,True command enables the platform's linear actuators. If the motors are not enabled, no 'move' commands will execute and will return an error.
---
Question: How do I disable the actuators? 
Answer: To disable the actuators, you need to send the enable,False command via the API.
---
Question: What is 'Set Motor Limits' in the 'Admin Panel'? 
Answer: The 'Set Motor Limits' button under the 'Admin Panel' tab sets the limits of the actuators.
---
Question: How do I set the software limit switch? 
Answer: This setting, which functions as a software limit switch, is done via the 'Set Motor Limits' button in the 'Admin Panel' tab.
---
Question: What happens when I set the actuator limits from the interface? 
Answer: When you set the limits using the 'Set Motor Limits' button, if an actuator's position exceeds these defined limits, the platform will automatically go into error mode.
---
Question: I'm getting '601, Syntax Error', what's the problem? 
Answer: '601, Syntax Error' means the command you sent to the API was not recognized. You might have a typo in the command. Please check the command format in the API documentation.
---
Question: Why am I getting a 'Syntax Error'? 
Answer: 'Syntax Error' (Error 601) can mean the command was not recognized, or (Error 602) that the arguments (parameters) could not be parsed correctly. Check your command and its parameters.
---
Question: My API command is not recognized. 
Answer: If your command is not recognized, you are likely receiving '601, Syntax Error'. This indicates there is a typo in the command.
---
Question: What does 'Set Travel Time' in the 'Admin Panel' do? 
Answer: 'Set Travel Time' sets the value used for interpolation calculations. This refers to the time for motors to reach their longest stroke length at full power.
---
Question: How do I adjust the interpolation speed? 
Answer: You can speed up interpolation movements by decreasing the 'Set Travel Time' value under the 'Admin Panel'. Entering a value that is too small may cause a speed difference between motors.
---
Question: What is the API equivalent of the SetTravelTime command? 
Answer: In the API, this command is SetTravelTime(ms). This command sets the travel time for interpolated movement. The sending format is SetTravelTime,{time}.
---
Question: What does the 'Read Calibration' button in the interface do? 
Answer: The 'Read Calibration' button in the 'Parameters' tab returns the previously saved calibration values (Upper and Lower Analog limits, max and min mm) and the date.
---
Question: How can I see the saved calibration values? 
Answer: To see the saved calibration data, you can press the 'Read Calibration' button in the 'Parameters' tab of the interface.
---
Question: What does the read_calib API command return? 
Answer: The read_calib command returns the saved calibration values. The response is in the format 306, {upperAnalog Limits}, { lowerAnalogLimits }, {maxMMLimit}, { minMMLimit },{Calibration Date}. Example: 306,[4095,4095,4095,4095,4095,4095],[1,1,1,1,1,1],[101.6],[0.0],[11/11/2022]
---
Question: What does the '602, Parsing Error' mean? 
Answer: '602, Parsing Error' means that the API command was recognized, but the arguments (parameters) you sent could not be parsed correctly. For example, you might get this error if you send an invalid value to the SetTravelTime command.
---
Question: What happens if I enter the command parameters incorrectly? 
Answer: If the command itself is recognized (no typo) but the arguments (parameters) cannot be parsed correctly, you will receive '602, Parsing Error'.
---
Question: How do I reset the IMU? Is there an IMU offset setting? 
Answer: Yes, to reset (offset) the IMU values to (0,0), you can use the OffsetIMU command via the API. When the command is sent, you will receive the response 315, IMU offset completed.
---
Question: My IMU values seem drifted, how do I fix them? 
Answer: To reset (offset) the IMU values, you need to send the OffsetIMU API command.
---
Question: How do I send the vibration command via the API?
Answer: You can trigger the vibration mode via the API with the vibration(Frequency, Amplitude, Duration) command. The command format is vibration,{Frequency},{Amplitude},{TimeDuration}.
---
Question: Can I send the vibration command repeatedly?
Answer: No, to prevent the motors from overheating, you must wait 60 seconds between two vibration commands. If you send the command before 60 seconds have passed, you will receive the response 313, Wait 60 seconds between 2 vibration command.
---
Question: What is the SetFrictionCompensator setting? (Admin Panel) 
Answer: 'Set Friction Compensator' determines the minimum PWM value to be sent to the motors. This is used to compensate for the amount of static friction force in terms of PWM duty cycle.
---
Question: What does the friction compensation in the Admin Panel do? 
Answer: This setting (SetFrictionCompensator) adjusts the minimum PWM force required for the motors to overcome static friction. The value must be between 0-1. The factory default setting is 0.
---
Question: My motors start up slowly due to friction, what should I do? 
Answer: You can compensate for static friction (in terms of PWM) using the 'Set Friction Compensator' setting under the 'Admin Panel'. Note: Motors may oscillate if the minimum PWM force is stronger than the friction force.
---
Question: How can I rotate the 3D model in the interface? 
Answer: In the 3D (3-D) view tab, you can freely rotate the 3D view by holding down the left mouse button (Left Click) or by using the Scroll wheel.
---
Question: How do I zoom in/out on the 3D model? 
Answer: In the 3D view tab, you can use your mouse's Scroll wheel to Zoom In/Zoom Out.
---
Question: How do I pan the 3D model? 
Answer: To pan the 3D view, you can hold down the Ctrl key on the keyboard while using the left mouse button (Left Click) or the Scroll wheel.
---
Question: What is the RunOnRPI API command? 
Answer: The RunOnRPI command runs the system using data from the Stewart.csv file located inside the Raspberry Pi (specifically in the /srv/chroot/labview directory).
---
Question: How do I run a CSV file that is on the Raspberry Pi? 
Answer: To run the platform according to the data in the Stewart.csv file located in the /srv/chroot/labview directory on the Raspberry Pi, you need to send the RunOnRPI API command.
---
Question: How do I stop the CSV file I uploaded from the interface (API)? 
Answer: To stop a CSV file movement that was initiated via the interface (GUI) (over UDP port 6341), you need to send the StopCSV API command.
---
Question: What does the RunCSV API command do? 
Answer: The RunCSV command runs the system using instantaneous movement values sent from the interface (GUI) (via UDP port 6341). This is typically used to process values from a CSV file.
---
Question: How do I save the PID settings I made? 
Answer: You need to use the SaveParam API command to save control parameters and limit values. If the command is successful, you will receive the response 318, Parameters are saved.
---
Question: What data does the SaveParam command save? 
Answer: The SaveParam command saves control parameters (PID, Friction, Deadband, etc.) and limit values (Motor Limits, etc.).
---
Question: I sent a move command but got '604, Actuators Are Not Enabled'. What should I do? 
Answer: '604, Actuators Are Not Enabled' means the motors (actuators) are not enabled. Before running any motion command, you must enable the motors by sending the enable,True API command or by setting the 'Motor Power' slider in the interface to 'ON'.
---
Question: Why do I get 'motors not enabled' error (604)? 
Answer: Error 604 occurs when a 'move' command is called before the actuators are enabled.
---
Question: I'm getting an IMU error (608), what is this? 
Answer: '608, IMU Error' indicates a communication error with the IMU (Inertial Measurement Unit). Please check the IMU's connections and cables.
---
Question: The GetIMU command returns '608, IMU Error'. 
Answer: If the GetIMU command returns '608, IMU Error', there is a problem with the communication to the IMU sensor. You should check the connections.
---
Question: What does '609, Limit Position Error' mean? 
Answer: '609, Limit Position Error' indicates that one of the received values (the target position) exceeds the defined limit position, and the motion has been stopped.
---
Question: I'm getting a limit error, the motion stopped. 
Answer: This could be '609, Limit Position Error'. This error occurs if the motion target exceeds the software-defined limits (e.g., set with SetLP).
---
Question: What is the '610, Limit Position Value Exceeds Stroke Limit' error? 
Answer: '610, Limit Position Value Exceeds Stroke Limit' means that a limit position value you are trying to set (usually in a SetLP command or a move command) exceeds the actuator's physical stroke (maximum movement distance) limit.
---
Question: What's the difference between error 609 and 610? 
Answer: Error 609 indicates that a current movement has exceeded the defined software limits. Error 610 indicates that when setting a limit (or targeting a movement), that value exceeds the hardware's physical stroke limit.
---
Question: I entered a negative (-) value for a command and got '611, This value cannot be negative'. 
Answer: '611, This value cannot be negative' indicates that you sent a negative parameter to a command that does not accept negative values (e.g., delay, SetPID, SetDeadBand, or SetTravelTime). Please send a positive value.
---
Question: I'm getting '613, Bottom limit cannot be greater than the top limit' with the SetLP command. 
Answer: '613, Bottom limit cannot be greater than the top limit' means that when setting the bottom limit for the actuators, this value cannot be greater than the top limit. Please ensure the top limit is greater than the bottom limit.
---
Question: How do I read the platform's current X, Y, Z, Roll, Pitch, Yaw position via API? 
Answer: To get the platform's calculated current position and orientation, use the GetPlatform command. The command returns a response in the format 305,x,y,z,roll,pitch,yaw, where x, y, z are in millimeters and roll, pitch, yaw are in degrees.
---
Question: What does the GetPlatform command do? 
Answer: This command returns the platform's instantaneous calculated position (x, y, z) and orientation (roll, pitch, yaw).
---
Question: How do I set the platform's X, Y, Z movement limits via the API? 
Answer: You can use the SetLimits API command to define the system's axis limits (the workspace).
---
Question: What is the format for the SetLimits command? 
Answer: The data format for the SetLimits command is: SetLimits,{XYLimit},{RPYLimit},{ZUpperLimit},{ZLowerLimit}.
---
Question: What is 'RPYLimit' in the SetLimits command? 
Answer: The {RPYLimit} in the SetLimits command defines the movement limit in degrees for the platform's Roll, Pitch, and Yaw axes. For example, for the 4-inch model, this limit is +/- 20 degrees.
---
Question: How do I start an oscillation via the API? 
Answer: You can start an oscillation movement via the API with the oscillation command. This command takes parameters for amplitude (Range), period (Period), initial angle (Angle), total time (totalTime), and axis selection (SelectAxes).
---
Question: What does the 'SelectAxes' parameter in the oscillation command do? 
Answer: The SelectAxes parameter in the oscillation command selects the axis group on which the oscillation will be performed. If the value is 0 (zero), it oscillates on the RPY (Roll, Pitch, Yaw) axes. If the value is 1 (one), it oscillates on the XYZ axes.
---
Question: I only want to oscillate on the Roll axis with the oscillation command, keeping others still. 
Answer: To oscillate only on the Roll axis, you need to set the amplitude (range) values for the Pitch (RangeP) and Yaw (RangeY) axes to zero (0) when using the oscillation command.
---
Question: Is the oscillation in the interface the same as the oscillation API command? 
Answer: Yes, the oscillation API command is the programmatic equivalent of the 'Oscillation' section in the interface's 'Scenario' tab. Both provide oscillation movement at a specified amplitude, period, and duration.
---
Question: I disassembled the motors, is there an order to re-installing them? 
Answer: Yes, the order (motor numbers) of the motors is very important. You must connect the motors in the correct sequence (1 to 6) according to the diagram in the User Manual (Figures 4.2 and 4.4).
---
Question: What happens if I connect the motors in the wrong order? 
Answer: If you connect the motors in an abnormal sequence (other than the correct number order), the motor movements will differ. You will observe differences or incorrectness, especially in rotational movements like roll, pitch, and yaw.
---
Question: What is the mounting location for the IMU? 
Answer: The IMU must be mounted between the 3rd and 4th motors.
---
Question: What data does the 'Feedback Port' in the interface show? 
Answer: The 'Feedback Port' area at the bottom of the 'Response Messages' tab shows the continuous data stream from the system. This data includes, in order: Timestamp, Date, 6 motor positions (mm), calculated x, y, z, roll, pitch, yaw, IMU roll, IMU pitch, IMU yaw, 6 motor setpoints, and IMU Error Status.
---
Question: How can I rotate the 3D model in the interface? 
Answer: In the 3D (3-D) view tab, you can freely rotate the 3D view by holding down the left mouse button (Left Click) or by using the Scroll wheel.
---
Question: How do I zoom in on the 3D model? 
Answer: In the 3D view tab, you can use your mouse's Scroll wheel to Zoom In/Zoom Out.
---
Question: How do I pan the 3D model view? 
Answer: To pan the 3D view, you can hold down the Ctrl key on the keyboard while using the left mouse button (Left Click) or the Scroll wheel.
---
Question: How do I activate my joystick? 
Answer: To use the joystick, you must go to the 'Import/Joystick' tab and check the 'Joystick Control' option. Joystick control will be active in this tab and in the 'Instant Movement' tab.
---
Question: My Joystick ID shows '0' but the joystick isn't working. 
Answer: If the joystick does not work with the default ID (0), you may need to change your Joystick ID in the config.ini file. This file is usually located in the software's installation folder (default C:\Program Files\Acrome).
---
Question: What is the 'Joystick Deadband' setting? Why is it set so high, like 1500? 
Answer: The 'Joystick Deadband' setting is used to prevent unwanted small movements (especially in the Z and Yaw axes) caused by the joystick's mechanical gap. 1500 is the recommended analog value.
---
Question: What happens if I set the deadband too high or too low? 
Answer: If you increase the 'Joystick Deadband' value too much, the system might move on the Z axis by itself. If you decrease the value too much, the system will not detect small movements.
---
Question: How do I switch between X, Y, Z and Roll, Pitch, Yaw movements with the joystick? 
Answer: The 'Trigger' button changes the movement mode. If you do not press the trigger, you control the X, Y, and Z axes. If you hold down the trigger, you control the Roll, Pitch, and Yaw axes.
---
Question: How do I move the platform up/down (Z-axis) with the joystick? 
Answer: To control the platform on the Z-axis, you need to hold down 'Button 2' while simultaneously moving the joystick on the Z-axis (forward/backward).
---
Question: How do I rotate (Yaw-axis) with the joystick? 
Answer: To control the platform on the Yaw-axis, you need to hold down the 'Trigger' button while simultaneously moving the joystick on the Z-axis (rotating it).
---
Question: How do I move forward/backward (X-axis) with the joystick? 
Answer: For X-axis control, you need to push the D-Pad and the joystick forward and backward at the same time.
---
Question: How do I move left/right (Y-axis) with the joystick? 
Answer: For Y-axis control, you must push the D-Pad and the joystick right and left at the same time.
---
Question: How do I control the Roll axis with the joystick? 
Answer: To control the Roll axis, you must push the D-Pad and joystick forward/backward and press the 'Trigger' button at the same time.
---
Question: How do I control the Pitch axis with the joystick? 
Answer: To control Pitch, you must push the D-Pad and joystick right and left and press the 'Trigger' button at the same time.
---
Question: How do I send the platform to its default (home) position using the joystick? 
Answer: You can set the system to its default position (0, 0, 447, 0, 0, 0) by pressing 'Button 3' on the joystick.
---
Question: What does the 'Flipper' (throttle) on the side of the joystick do? 
Answer: The flipper (throttle) allows you to adjust the movement speed of the system.
---
Question: What does the 'Update Home' button in the 'Instant Movement' tab do? 
Answer: The 'Update Home' button in the 'Instant Movement' tab allows you to save the platform's current position as the new 'Home' position.
---
Question: How do I send the platform to the saved 'Home' position? 
Answer: By pressing the 'Move to Home' button in the 'Instant Movement' tab, you can move the platform to the position you previously saved with 'Update Home'.
---
Question: What is the 'inc Step(mm)' value in the 'Instant Movement' tab? 
Answer: The 'Increment Step (mm)' value determines how far (in mm) or by what angle the platform will move each time you press the X, Y, Z, and RPY arrow buttons.
---
Question: How does the command list in the 'Scenario' tab work? 
Answer: You can create a scenario by writing API commands one after another in the text box in the 'Scenario' tab, such as enable,True, move_platform,0,0,447,0,0,0, delay,5. When you press the 'Run' button, these commands are executed in sequence.
---
Question: What is 'Period(s)' in the Oscillation settings in the 'Scenario' tab? 
Answer: The 'Period(s)' in the 'Oscillation' section determines how many seconds one complete cycle of the oscillation movement will take (its frequency).
---
Question: How do I set the 'Oscillation Duration'? 
Answer: In the 'Oscillation Duration(s)' box, you can enter the total number of seconds you want the oscillation movement to last.
---
Question: Why is the duration limited to 15 seconds if the vibration frequency is higher than 3 Hz? 
Answer: Yes, if the vibration frequency is higher than 3 Hz, the duration is automatically limited to 15 seconds (0-15s range) to prevent the motors from overheating. If the frequency is lower than 3 Hz, the duration can be 30 seconds (0-30s range).
---
Question: Why do I have to wait 60 seconds between two vibration commands? 
Answer: Running the system at high frequencies for a long time can heat up the motors. To prevent this, the interface applies a restriction that requires you to wait 60 seconds between vibration commands.
---
Question: How does the 'Run' button in the 'Import CSV File' section work? 
Answer: When you select a .csv file in the 'Import/Joystick' tab and click the 'Run' button, the system starts applying the movements and timing specified in the file, line by line. To stop the motion, you must press the 'Run' button again.
---
Question: What should I write in the first line of my CSV file? What's the format? 
Answer: The CSV file format must be elapsedtime(s);x(mm);y;z;Roll(deg);pitch;yaw. However, remember that the import code skips (ignores) the first two lines, so you must enter your actual position data starting from the 3rd line.
---
Question: What does an example data line for a CSV look like? 
Answer: An example data line should look like this: 0.008;0;0;447;0;0;0
---
Question: What's the difference between the 'Go Setpoint' and 'Trajectory' buttons in the 'Manual Control' tab? 
Answer: 'Go Setpoint' button starts moving directly to the X, Y, Z, RPY values you set at the current speed (like the move_platform API command). The 'Trajectory' button, however, moves to that point by drawing a smooth trajectory over the time you specify in the 'Trajectory Time(ms)' box (e.g., 2000 ms) (like the move_platform_traj API command).
---
Question: Can I adjust the duration (length) of the graph in the 'Graph' tab? 
Answer: Yes, in the 'Length (s)' box at the bottom of the 'Graph' tab, you can enter the time duration of the graph in seconds (from 1 to infinity) as you wish.
---
Question: What are the default IP addresses for connecting to the API? 
Answer: By default, the Host PC's (your computer's) IP address should be 192.168.137.1, and the Raspberry Pi's (the platform's) IP address should be 192.168.137.70.
---
Question: What port should I use to send commands to the platform? 
Answer: You must use the TCP/IP Control Port 6500 to send motion and request commands to the platform.
---
Question: What is the feedback port? 
Answer: The Feedback Port is the port used to receive continuous feedback (instantaneous position, IMU data, etc.) from the controller. This port is UDP 6600.
---
Question: What is the difference between the Control Port (6500) and the Feedback Port (6600)? 
Answer: The Control Port (TCP 6500) is for you to send commands (motion and request commands). The Feedback Port (UDP 6600) is for you to continuously receive (listen for) data from the platform.
---
Question: What is the data structure of an API command? How is the command packaged? 
Answer: Every command sent or response received consists of two parts: a 'Data Prefix' and 'Data'.
---
Question: What is the Data Prefix? 
Answer: The Data Prefix is a 1-byte integer that indicates the size (how many bytes) of the Data that will immediately follow.
---
Question: What is the format of the command data (Data)? 
Answer: The Data itself is a string format consisting of a command message and arguments, separated by delimiters (commas). For example: Data = Command, Argument 1, Argument 2.
---
Question: In Python, how do I calculate the Data Prefix for sending the delay(t) command? 
Answer: You calculate the Data Prefix by finding the total length of the string data you are sending. For example, for t=8.0, the data would be delay,8.0. The data_prefix = len('delay') + len(',') + len(str(t)).
---
Question: How do 'Motion Commands' work in the API? What does the 'queue' mean? 
Answer: When the controller receives a Motion Command (e.g., move_platform), it does not execute it immediately. It first places it in a queue. The command is executed only after all motion commands already in the queue are completed.
---
Question: What is the difference between Motion Commands and Request Commands? 
Answer: Motion Commands move the platform and are placed in a queue to be executed sequentially. Request Commands usually do not take an argument and are used to request information from the platform (e.g., GetPlatformStatus, GetIMU).
---
Question: How do the Linear Actuators know their position? What's inside them? 
Answer: These actuators are equipped with an internal Bourns potentiometer to determine their position at any given time.
---
Question: How does the actuator's position feedback work? 
Answer: The potentiometer feedback in the actuator operates on a 10K ohm 3-wire system.
---
Question: What happens if I reverse the polarity of the actuator's motor cables? 
Answer: The actuator is controlled by a 2-wire system; reversing the polarity will cause the actuator to retract.
---
Question: What is the exact function of the Acrome Controller board? 
Answer: The Acrome Controller is the board that contains a microcontroller and measures the system's sensor (analog/digital) and actuator signals. It measures potentiometer values and generates PWM-based motor speed/position commands.
---
Question: How do the Acrome Controller and Raspberry Pi communicate? 
Answer: The Acrome Controller connects to the Raspberry Pi (rPi) via serial communication lines. Data transfer between these two occurs over a UART communication channel.
---
Question: What does the Acrome Motor Driver Board do?
Answer: This board is a complete solution for driving H-Bridge based brushed DC motors. It adjusts the motor's speed or position by varying the PWM duty cycle based on signals from an external controller (the Acrome Controller). Example: 306,[4095,4095,4095,4095,4095,4095],[1,1,1,1,1,1],[101.6],[0.0],[11/11/2022]
---
Question: Does the Motor Driver Board support potentiometer-feedback motors?
Answer: Yes, the board supports potentiometer or encoder feedback motors. Jumpers are provided to configure each motor output to select either the encoder or potentiometer interface.
---
Question: What is the MPU-6050?
Answer: The MPU-6050 is one of the world's first 'Motion Tracking' devices, designed for low-power, low-cost, and high-performance applications (like smartphones, tablets, etc.).
---
Question: How many axes does the MPU-6050 have?
Answer: The MPU-6050 is a Six-Axis (Gyro + Accelerometer) sensor.
---
Question: How do I query the platform's current status (GetPlatformStatus) via the API?
Answer: The 'GetPlatformStatus' command returns the status of the platform. The command you need to send is 'GetPlatformStatus'. The returned response is in the format '302, en, StewartErr, IMUErr'. Here, 'en' indicates if the motor is enabled (1 or 0), 'StewartErr' indicates if the platform is in error mode (1 or 0), and 'IMUErr' indicates if there is a communication error with the IMU (1 or 0).
`;
