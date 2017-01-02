// Written by Michael Schmalle - teotigraphix.com
// (c) 2014
// Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt

function SceneTriggerView (model)
{
    BaseMaschineView.call (this, model);

    this.sceneBank = new SceneBankProxy (16);
}
SceneTriggerView.prototype = new BaseMaschineView ();

SceneTriggerView.prototype.drawGrid = function ()
{
    for (var i = 36; i < 52; i++)
    {
        var name = this.sceneBank.getSceneName (i - 36);
        var color = COLOR.OFF;
        if (this.sceneBank.sceneExists (i - 36))
        {
            if (name != "")
                color = COLOR.ON_MEDIUM;
            else
                color = COLOR.ON_DIM_LOW;
            if (this.pressedKey == i)
                color = COLOR.ON;
        }

        this.surface.pads.light (i, color);
    }
};
SceneTriggerView.prototype.onGridNote = function (note, velocity)
{
    this.pressedKey = -1;
    if (velocity > 0)
    {
        var index = note - 36;
        this.pressedKey = note;
        this.sceneBank.launchScene (index);
        this.sceneBank.selectScene (index);
        this.sceneBank.showScene (index);
    }
    else
    {

    }
};
