function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_53";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_53 = Ti.UI.createView({
        id: "widget_53"
    });
    $.__views.widget_53 && $.addTopLevelView($.__views.widget_53);
    $.__views.__alloyId12480 = Ti.UI.createView({
        id: "__alloyId12480"
    });
    $.__views.widget_53.add($.__views.__alloyId12480);
    $.__views.__alloyId12481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12481"
    });
    $.__views.__alloyId12480.add($.__views.__alloyId12481);
    $.__views.__alloyId12482 = Ti.UI.createView({
        id: "__alloyId12482"
    });
    $.__views.__alloyId12482 && $.addTopLevelView($.__views.__alloyId12482);
    $.__views.__alloyId12483 = Ti.UI.createView({
        id: "__alloyId12483"
    });
    $.__views.__alloyId12482.add($.__views.__alloyId12483);
    $.__views.__alloyId12484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12484"
    });
    $.__views.__alloyId12483.add($.__views.__alloyId12484);
    $.__views.__alloyId12485 = Ti.UI.createView({
        id: "__alloyId12485"
    });
    $.__views.__alloyId12485 && $.addTopLevelView($.__views.__alloyId12485);
    $.__views.__alloyId12486 = Ti.UI.createView({
        id: "__alloyId12486"
    });
    $.__views.__alloyId12485.add($.__views.__alloyId12486);
    $.__views.__alloyId12487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12487"
    });
    $.__views.__alloyId12486.add($.__views.__alloyId12487);
    $.__views.__alloyId12488 = Ti.UI.createView({
        id: "__alloyId12488"
    });
    $.__views.__alloyId12488 && $.addTopLevelView($.__views.__alloyId12488);
    $.__views.__alloyId12489 = Ti.UI.createView({
        id: "__alloyId12489"
    });
    $.__views.__alloyId12488.add($.__views.__alloyId12489);
    $.__views.__alloyId12490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12490"
    });
    $.__views.__alloyId12489.add($.__views.__alloyId12490);
    $.__views.__alloyId12491 = Ti.UI.createView({
        id: "__alloyId12491"
    });
    $.__views.__alloyId12491 && $.addTopLevelView($.__views.__alloyId12491);
    $.__views.__alloyId12492 = Ti.UI.createView({
        id: "__alloyId12492"
    });
    $.__views.__alloyId12491.add($.__views.__alloyId12492);
    $.__views.__alloyId12493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12493"
    });
    $.__views.__alloyId12492.add($.__views.__alloyId12493);
    $.__views.__alloyId12494 = Ti.UI.createView({
        id: "__alloyId12494"
    });
    $.__views.__alloyId12494 && $.addTopLevelView($.__views.__alloyId12494);
    $.__views.__alloyId12495 = Ti.UI.createView({
        id: "__alloyId12495"
    });
    $.__views.__alloyId12494.add($.__views.__alloyId12495);
    $.__views.__alloyId12496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12496"
    });
    $.__views.__alloyId12495.add($.__views.__alloyId12496);
    $.__views.__alloyId12497 = Ti.UI.createView({
        id: "__alloyId12497"
    });
    $.__views.__alloyId12497 && $.addTopLevelView($.__views.__alloyId12497);
    $.__views.__alloyId12498 = Ti.UI.createView({
        id: "__alloyId12498"
    });
    $.__views.__alloyId12497.add($.__views.__alloyId12498);
    $.__views.__alloyId12499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12499"
    });
    $.__views.__alloyId12498.add($.__views.__alloyId12499);
    $.__views.__alloyId12500 = Ti.UI.createView({
        id: "__alloyId12500"
    });
    $.__views.__alloyId12500 && $.addTopLevelView($.__views.__alloyId12500);
    $.__views.__alloyId12501 = Ti.UI.createView({
        id: "__alloyId12501"
    });
    $.__views.__alloyId12500.add($.__views.__alloyId12501);
    $.__views.__alloyId12502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12502"
    });
    $.__views.__alloyId12501.add($.__views.__alloyId12502);
    $.__views.__alloyId12503 = Ti.UI.createView({
        id: "__alloyId12503"
    });
    $.__views.__alloyId12503 && $.addTopLevelView($.__views.__alloyId12503);
    $.__views.__alloyId12504 = Ti.UI.createView({
        id: "__alloyId12504"
    });
    $.__views.__alloyId12503.add($.__views.__alloyId12504);
    $.__views.__alloyId12505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12505"
    });
    $.__views.__alloyId12504.add($.__views.__alloyId12505);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;