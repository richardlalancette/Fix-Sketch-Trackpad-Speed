//
//  FixSketchTrackpadSpeed.m
//  FixSketchTrackpadSpeed
//
//  Created by Pravdomil Toman on 28/11/2017.
//  Copyright © 2017 Pravdomil Toman. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <objc/runtime.h>
#import "FixSketchTrackpadSpeed.h"

#pragma GCC diagnostic ignored "-Wincomplete-implementation"

@implementation FixSketchTrackpadSpeed
+ (bool)fix
{
    Class drawView = NSClassFromString(@"MSContentDrawView");
    if (!drawView) {
        return false;
    }
    
    Method original = class_getInstanceMethod(drawView, @selector(scrollWheelScroll:));
    if (!original) {
        return false;
    }
    
    Method swizzled = class_getInstanceMethod([self class], @selector(awesomeScrollWheelScroll:));
    if (!swizzled) {
        return false;
    }
    
    method_exchangeImplementations(original, swizzled);
    return true;
}

- (void)awesomeScrollWheelScroll:(NSEvent *)event
{
    CGPoint origin = [self scrollOrigin];
    
    origin.x += event.scrollingDeltaX * 2;
    origin.y += event.scrollingDeltaY * 2;
    
    [self scrollToScrollOrigin: origin];
}
@end
