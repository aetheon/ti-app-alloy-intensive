function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_32";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_32 = Ti.UI.createView({
        id: "widget_32"
    });
    $.__views.widget_32 && $.addTopLevelView($.__views.widget_32);
    $.__views.__alloyId6422 = Ti.UI.createView({
        id: "__alloyId6422"
    });
    $.__views.widget_32.add($.__views.__alloyId6422);
    $.__views.__alloyId6423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6423"
    });
    $.__views.__alloyId6422.add($.__views.__alloyId6423);
    $.__views.__alloyId6424 = Ti.UI.createView({
        id: "__alloyId6424"
    });
    $.__views.__alloyId6424 && $.addTopLevelView($.__views.__alloyId6424);
    $.__views.__alloyId6425 = Ti.UI.createView({
        id: "__alloyId6425"
    });
    $.__views.__alloyId6424.add($.__views.__alloyId6425);
    $.__views.__alloyId6426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6426"
    });
    $.__views.__alloyId6425.add($.__views.__alloyId6426);
    $.__views.__alloyId6427 = Ti.UI.createView({
        id: "__alloyId6427"
    });
    $.__views.__alloyId6427 && $.addTopLevelView($.__views.__alloyId6427);
    $.__views.__alloyId6428 = Ti.UI.createView({
        id: "__alloyId6428"
    });
    $.__views.__alloyId6427.add($.__views.__alloyId6428);
    $.__views.__alloyId6429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6429"
    });
    $.__views.__alloyId6428.add($.__views.__alloyId6429);
    $.__views.__alloyId6430 = Ti.UI.createView({
        id: "__alloyId6430"
    });
    $.__views.__alloyId6430 && $.addTopLevelView($.__views.__alloyId6430);
    $.__views.__alloyId6431 = Ti.UI.createView({
        id: "__alloyId6431"
    });
    $.__views.__alloyId6430.add($.__views.__alloyId6431);
    $.__views.__alloyId6432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6432"
    });
    $.__views.__alloyId6431.add($.__views.__alloyId6432);
    $.__views.__alloyId6433 = Ti.UI.createView({
        id: "__alloyId6433"
    });
    $.__views.__alloyId6433 && $.addTopLevelView($.__views.__alloyId6433);
    $.__views.__alloyId6434 = Ti.UI.createView({
        id: "__alloyId6434"
    });
    $.__views.__alloyId6433.add($.__views.__alloyId6434);
    $.__views.__alloyId6435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6435"
    });
    $.__views.__alloyId6434.add($.__views.__alloyId6435);
    $.__views.__alloyId6436 = Ti.UI.createView({
        id: "__alloyId6436"
    });
    $.__views.__alloyId6436 && $.addTopLevelView($.__views.__alloyId6436);
    $.__views.__alloyId6437 = Ti.UI.createView({
        id: "__alloyId6437"
    });
    $.__views.__alloyId6436.add($.__views.__alloyId6437);
    $.__views.__alloyId6438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6438"
    });
    $.__views.__alloyId6437.add($.__views.__alloyId6438);
    $.__views.__alloyId6439 = Ti.UI.createView({
        id: "__alloyId6439"
    });
    $.__views.__alloyId6439 && $.addTopLevelView($.__views.__alloyId6439);
    $.__views.__alloyId6440 = Ti.UI.createView({
        id: "__alloyId6440"
    });
    $.__views.__alloyId6439.add($.__views.__alloyId6440);
    $.__views.__alloyId6441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6441"
    });
    $.__views.__alloyId6440.add($.__views.__alloyId6441);
    $.__views.__alloyId6442 = Ti.UI.createView({
        id: "__alloyId6442"
    });
    $.__views.__alloyId6442 && $.addTopLevelView($.__views.__alloyId6442);
    $.__views.__alloyId6443 = Ti.UI.createView({
        id: "__alloyId6443"
    });
    $.__views.__alloyId6442.add($.__views.__alloyId6443);
    $.__views.__alloyId6444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6444"
    });
    $.__views.__alloyId6443.add($.__views.__alloyId6444);
    $.__views.__alloyId6445 = Ti.UI.createView({
        id: "__alloyId6445"
    });
    $.__views.__alloyId6445 && $.addTopLevelView($.__views.__alloyId6445);
    $.__views.__alloyId6446 = Ti.UI.createView({
        id: "__alloyId6446"
    });
    $.__views.__alloyId6445.add($.__views.__alloyId6446);
    $.__views.__alloyId6447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6447"
    });
    $.__views.__alloyId6446.add($.__views.__alloyId6447);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;