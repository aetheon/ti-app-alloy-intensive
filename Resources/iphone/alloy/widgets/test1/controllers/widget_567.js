function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_567";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_567 = Ti.UI.createView({
        id: "widget_567"
    });
    $.__views.widget_567 && $.addTopLevelView($.__views.widget_567);
    $.__views.__alloyId13546 = Ti.UI.createView({
        id: "__alloyId13546"
    });
    $.__views.widget_567.add($.__views.__alloyId13546);
    $.__views.__alloyId13547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13547"
    });
    $.__views.__alloyId13546.add($.__views.__alloyId13547);
    $.__views.__alloyId13548 = Ti.UI.createView({
        id: "__alloyId13548"
    });
    $.__views.__alloyId13548 && $.addTopLevelView($.__views.__alloyId13548);
    $.__views.__alloyId13549 = Ti.UI.createView({
        id: "__alloyId13549"
    });
    $.__views.__alloyId13548.add($.__views.__alloyId13549);
    $.__views.__alloyId13550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13550"
    });
    $.__views.__alloyId13549.add($.__views.__alloyId13550);
    $.__views.__alloyId13551 = Ti.UI.createView({
        id: "__alloyId13551"
    });
    $.__views.__alloyId13551 && $.addTopLevelView($.__views.__alloyId13551);
    $.__views.__alloyId13552 = Ti.UI.createView({
        id: "__alloyId13552"
    });
    $.__views.__alloyId13551.add($.__views.__alloyId13552);
    $.__views.__alloyId13553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13553"
    });
    $.__views.__alloyId13552.add($.__views.__alloyId13553);
    $.__views.__alloyId13554 = Ti.UI.createView({
        id: "__alloyId13554"
    });
    $.__views.__alloyId13554 && $.addTopLevelView($.__views.__alloyId13554);
    $.__views.__alloyId13555 = Ti.UI.createView({
        id: "__alloyId13555"
    });
    $.__views.__alloyId13554.add($.__views.__alloyId13555);
    $.__views.__alloyId13556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13556"
    });
    $.__views.__alloyId13555.add($.__views.__alloyId13556);
    $.__views.__alloyId13557 = Ti.UI.createView({
        id: "__alloyId13557"
    });
    $.__views.__alloyId13557 && $.addTopLevelView($.__views.__alloyId13557);
    $.__views.__alloyId13558 = Ti.UI.createView({
        id: "__alloyId13558"
    });
    $.__views.__alloyId13557.add($.__views.__alloyId13558);
    $.__views.__alloyId13559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13559"
    });
    $.__views.__alloyId13558.add($.__views.__alloyId13559);
    $.__views.__alloyId13560 = Ti.UI.createView({
        id: "__alloyId13560"
    });
    $.__views.__alloyId13560 && $.addTopLevelView($.__views.__alloyId13560);
    $.__views.__alloyId13561 = Ti.UI.createView({
        id: "__alloyId13561"
    });
    $.__views.__alloyId13560.add($.__views.__alloyId13561);
    $.__views.__alloyId13562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13562"
    });
    $.__views.__alloyId13561.add($.__views.__alloyId13562);
    $.__views.__alloyId13563 = Ti.UI.createView({
        id: "__alloyId13563"
    });
    $.__views.__alloyId13563 && $.addTopLevelView($.__views.__alloyId13563);
    $.__views.__alloyId13564 = Ti.UI.createView({
        id: "__alloyId13564"
    });
    $.__views.__alloyId13563.add($.__views.__alloyId13564);
    $.__views.__alloyId13565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13565"
    });
    $.__views.__alloyId13564.add($.__views.__alloyId13565);
    $.__views.__alloyId13566 = Ti.UI.createView({
        id: "__alloyId13566"
    });
    $.__views.__alloyId13566 && $.addTopLevelView($.__views.__alloyId13566);
    $.__views.__alloyId13567 = Ti.UI.createView({
        id: "__alloyId13567"
    });
    $.__views.__alloyId13566.add($.__views.__alloyId13567);
    $.__views.__alloyId13568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13568"
    });
    $.__views.__alloyId13567.add($.__views.__alloyId13568);
    $.__views.__alloyId13569 = Ti.UI.createView({
        id: "__alloyId13569"
    });
    $.__views.__alloyId13569 && $.addTopLevelView($.__views.__alloyId13569);
    $.__views.__alloyId13570 = Ti.UI.createView({
        id: "__alloyId13570"
    });
    $.__views.__alloyId13569.add($.__views.__alloyId13570);
    $.__views.__alloyId13571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13571"
    });
    $.__views.__alloyId13570.add($.__views.__alloyId13571);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;