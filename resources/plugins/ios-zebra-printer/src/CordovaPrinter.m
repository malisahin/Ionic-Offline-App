//
//  CordovaPrinter.m
//  HelloCordova
//
//  Created by Liam Bateman on 24/03/2015.
//
//

#import "CordovaPrinter.h"
#import <ExternalAccessory/ExternalAccessory.h>
#import "MfiBtPrinterConnection.h"
#import "ZebraPrinterConnection.h"
#import "MFiBtPrinterConnection.h"
#import "ZebraPrinterFactory.h"
#import "SGD.h"

@implementation CordovaPrinter
- (void) cordovaPrint:(CDVInvokedUrlCommand *)command{

    NSString *labelData = [command.arguments objectAtIndex:0];
    NSString *serielCode = [command.arguments objectAtIndex:1];

    // Check command.arguments here.
    //Dispatch this task to the default queue
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^ {

        // Instantiate connection to Zebra Bluetooth accessory
        id<ZebraPrinterConnection, NSObject> thePrinterConn = [[MfiBtPrinterConnection alloc] initWithSerialNumber:serielCode];

        // Open the connection - physical connection is established here.
        BOOL success = [thePrinterConn open];

        if(success)
        {
            NSError *error = nil;
            //[SGD SET:@"ezpl.media_type" withValue:@"gap/notch" andWithPrinterConnection:thePrinterConn error:&error];

            // This example prints "This is a ZPL test." near the top of the label.
            //NSString *zplData = @"^XA^FO20,20^A0N,25,25^FDThis is a ZPL test.^FS^XZ";


            // Send the data to printer as a byte array.
            NSData *data = [NSData dataWithBytes:[labelData UTF8String] length:[labelData length]];

            success = success && [thePrinterConn write:data error:&error];

            [NSThread sleepForTimeInterval:2.0f];

            if (success == YES && error == nil) {
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"OK"];
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }else{
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:error];
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }

            // Close the connection to release resources.
            [thePrinterConn close];
        }else{
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Printer Connection Failed"];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }

     });
}
//Returns all the connected printers.
- (void) cordovaGetPrinters:(CDVInvokedUrlCommand *)command
{
    NSString *serialNumber = @"";
    //Find the Zebra Bluetooth Accessory
    EAAccessoryManager *sam = [EAAccessoryManager sharedAccessoryManager];
    NSArray * connectedAccessories = [sam connectedAccessories];
    for (EAAccessory *accessory in connectedAccessories) {
        if([accessory.protocolStrings indexOfObject:@"com.zebra.rawport"] != NSNotFound){
            serialNumber = [serialNumber stringByAppendingString:accessory.serialNumber];
            serialNumber = [serialNumber stringByAppendingString:@","];
            //serialNumber = accessory.serialNumber;
        }
    }

    if([serialNumber isEqual:@""])
    {
        //No printer found empty
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"No Serial Number Found."];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }else{

        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:serialNumber];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

@end
