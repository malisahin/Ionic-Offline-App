//
//  CordovaPrinter.h
//  HelloCordova
//
//  Created by Liam Bateman on 24/03/2015.
//
//

#import <Cordova/CDVPlugin.h>

@interface CordovaPrinter : CDVPlugin
- (void) cordovaPrint :(CDVInvokedUrlCommand *)command;
- (void) cordovaGetPrinters :(CDVInvokedUrlCommand *)command;
@end
