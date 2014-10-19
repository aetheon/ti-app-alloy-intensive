function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_879";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_879 = Ti.UI.createView({
        id: "widget_879"
    });
    $.__views.widget_879 && $.addTopLevelView($.__views.widget_879);
    $.__views.__alloyId22542 = Ti.UI.createView({
        id: "__alloyId22542"
    });
    $.__views.widget_879.add($.__views.__alloyId22542);
    $.__views.__alloyId22543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22543"
    });
    $.__views.__alloyId22542.add($.__views.__alloyId22543);
    $.__views.__alloyId22544 = Ti.UI.createView({
        id: "__alloyId22544"
    });
    $.__views.__alloyId22544 && $.addTopLevelView($.__views.__alloyId22544);
    $.__views.__alloyId22545 = Ti.UI.createView({
        id: "__alloyId22545"
    });
    $.__views.__alloyId22544.add($.__views.__alloyId22545);
    $.__views.__alloyId22546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22546"
    });
    $.__views.__alloyId22545.add($.__views.__alloyId22546);
    $.__views.__alloyId22547 = Ti.UI.createView({
        id: "__alloyId22547"
    });
    $.__views.__alloyId22547 && $.addTopLevelView($.__views.__alloyId22547);
    $.__views.__alloyId22548 = Ti.UI.createView({
        id: "__alloyId22548"
    });
    $.__views.__alloyId22547.add($.__views.__alloyId22548);
    $.__views.__alloyId22549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22549"
    });
    $.__views.__alloyId22548.add($.__views.__alloyId22549);
    $.__views.__alloyId22550 = Ti.UI.createView({
        id: "__alloyId22550"
    });
    $.__views.__alloyId22550 && $.addTopLevelView($.__views.__alloyId22550);
    $.__views.__alloyId22551 = Ti.UI.createView({
        id: "__alloyId22551"
    });
    $.__views.__alloyId22550.add($.__views.__alloyId22551);
    $.__views.__alloyId22552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22552"
    });
    $.__views.__alloyId22551.add($.__views.__alloyId22552);
    $.__views.__alloyId22553 = Ti.UI.createView({
        id: "__alloyId22553"
    });
    $.__views.__alloyId22553 && $.addTopLevelView($.__views.__alloyId22553);
    $.__views.__alloyId22554 = Ti.UI.createView({
        id: "__alloyId22554"
    });
    $.__views.__alloyId22553.add($.__views.__alloyId22554);
    $.__views.__alloyId22555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22555"
    });
    $.__views.__alloyId22554.add($.__views.__alloyId22555);
    $.__views.__alloyId22556 = Ti.UI.createView({
        id: "__alloyId22556"
    });
    $.__views.__alloyId22556 && $.addTopLevelView($.__views.__alloyId22556);
    $.__views.__alloyId22557 = Ti.UI.createView({
        id: "__alloyId22557"
    });
    $.__views.__alloyId22556.add($.__views.__alloyId22557);
    $.__views.__alloyId22558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22558"
    });
    $.__views.__alloyId22557.add($.__views.__alloyId22558);
    $.__views.__alloyId22559 = Ti.UI.createView({
        id: "__alloyId22559"
    });
    $.__views.__alloyId22559 && $.addTopLevelView($.__views.__alloyId22559);
    $.__views.__alloyId22560 = Ti.UI.createView({
        id: "__alloyId22560"
    });
    $.__views.__alloyId22559.add($.__views.__alloyId22560);
    $.__views.__alloyId22561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22561"
    });
    $.__views.__alloyId22560.add($.__views.__alloyId22561);
    $.__views.__alloyId22562 = Ti.UI.createView({
        id: "__alloyId22562"
    });
    $.__views.__alloyId22562 && $.addTopLevelView($.__views.__alloyId22562);
    $.__views.__alloyId22563 = Ti.UI.createView({
        id: "__alloyId22563"
    });
    $.__views.__alloyId22562.add($.__views.__alloyId22563);
    $.__views.__alloyId22564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22564"
    });
    $.__views.__alloyId22563.add($.__views.__alloyId22564);
    $.__views.__alloyId22565 = Ti.UI.createView({
        id: "__alloyId22565"
    });
    $.__views.__alloyId22565 && $.addTopLevelView($.__views.__alloyId22565);
    $.__views.__alloyId22566 = Ti.UI.createView({
        id: "__alloyId22566"
    });
    $.__views.__alloyId22565.add($.__views.__alloyId22566);
    $.__views.__alloyId22567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22567"
    });
    $.__views.__alloyId22566.add($.__views.__alloyId22567);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;