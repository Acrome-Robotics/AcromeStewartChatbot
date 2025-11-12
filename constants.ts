
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
Question: How do I query the platform's current status (GetPlatformStatus) via the API?
Answer: The 'GetPlatformStatus' command returns the status of the platform. The command you need to send is 'GetPlatformStatus'. The returned response is in the format '302, en, StewartErr, IMUErr'. Here, 'en' indicates if the motor is enabled (1 or 0), 'StewartErr' indicates if the platform is in error mode (1 or 0), and 'IMUErr' indicates if there is a communication error with the IMU (1 or 0).
`;
