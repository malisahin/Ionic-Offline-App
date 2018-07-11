# cordova-print

This is a Cordova plugin that allows you to print to Zebra bluetooth printers using your iOS device.

Installation:
`cordova plugin add https://github.com/LiamBateman/cordova-print.git`

**Get printer serial numbers: (Will return all connected zebra printers)**  
`window.plugins.CordovaPrinter.getPrinters(successCallback(serialNumbers),failCallback(error))`  

Example return for 2 printers 'XXXXXXXX1,XXXXXXXX2'

**Print a zpl-formatted block of text (need serial number!):**
`window.plugins.CordovaPrinter.print(successCallback(ok),failCallback(error),serial, label)`

Example:

```JavaScript

        var label = '^XA' +
            '^F030,30^FDTest Label^FS' +
            '^XZ';

        window.plugins.CordovaPrinter.getPrinters(function(serialNumbers) { // Get the connect printer serial numbers
          //Now split the serial numbers
          var serialArray = serialNumbers.split(',');
          serialArray = serialArray.filter(function(n){ return n != undefined && n != '' });

          //Just print to the first serial number
            window.plugins.CordovaPrinter.print(
              function(success) {   // Call the print method
                console.log('Successfully printed label');
              },
              function error(err) {
                console.log('Error Printing to ' + curSerial);
                console.log(err);
            },
            serialArray[0],
            label);           // Include the serial number and your ZPL format label

        },
        function error(err) {
            console.log('Error loading Printers');
            console.log(err);
        });                            // Log any errors


```

If you have a problem where your printer is printing several labels, you need to calibrate it. In my case, I was using the black-line marked labels, so I simply printed the following ZPL code to calibrate it:

```JavaScript
var calibrate = '~JC' +
    '^XA' +
    '^JUS' +
    'XZ';
```
