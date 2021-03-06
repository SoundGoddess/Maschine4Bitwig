// Written by Michael Schmalle - teotigraphix.com
// (c) 2014
// Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt

loadAPI(1);

load ("Config.js");
load ("framework/ClassLoader.js");
load ("maschine/ClassLoader.js");

Maschine.INSTANCE = Maschine.MK2;

load ("mode/ClassLoader.js");
load ("view/ClassLoader.js");
load ("Controller.js");

host.defineController(Maschine.VENDOR, Maschine.MK2_NAME, Maschine.VERSION, Maschine.MK2_UID, Maschine.AUTHOR);
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["Maschine MK2 Controller"], ["Maschine MK2 Controller"]);
host.addDeviceNameBasedDiscoveryPair(["Maschine MK2 Virtual Input"], ["Maschine MK2 Virtual Output"]);
host.addDeviceNameBasedDiscoveryPair(["Maschine MK2 In"], ["Maschine MK2 Out"]);

var controller = null;

function init ()
{
    controller = new Controller (Maschine.MK2);
    println ("Initialized.");
}

function exit ()
{
    controller.shutdown ();
}

function flush ()
{
    controller.flush ();
}