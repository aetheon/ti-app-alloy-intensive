function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_74";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_74 = Ti.UI.createView({
        id: "widget_74"
    });
    $.__views.widget_74 && $.addTopLevelView($.__views.widget_74);
    $.__views.__alloyId18538 = Ti.UI.createView({
        id: "__alloyId18538"
    });
    $.__views.widget_74.add($.__views.__alloyId18538);
    $.__views.__alloyId18539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18539"
    });
    $.__views.__alloyId18538.add($.__views.__alloyId18539);
    $.__views.__alloyId18540 = Ti.UI.createView({
        id: "__alloyId18540"
    });
    $.__views.__alloyId18540 && $.addTopLevelView($.__views.__alloyId18540);
    $.__views.__alloyId18541 = Ti.UI.createView({
        id: "__alloyId18541"
    });
    $.__views.__alloyId18540.add($.__views.__alloyId18541);
    $.__views.__alloyId18542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18542"
    });
    $.__views.__alloyId18541.add($.__views.__alloyId18542);
    $.__views.__alloyId18543 = Ti.UI.createView({
        id: "__alloyId18543"
    });
    $.__views.__alloyId18543 && $.addTopLevelView($.__views.__alloyId18543);
    $.__views.__alloyId18544 = Ti.UI.createView({
        id: "__alloyId18544"
    });
    $.__views.__alloyId18543.add($.__views.__alloyId18544);
    $.__views.__alloyId18545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18545"
    });
    $.__views.__alloyId18544.add($.__views.__alloyId18545);
    $.__views.__alloyId18546 = Ti.UI.createView({
        id: "__alloyId18546"
    });
    $.__views.__alloyId18546 && $.addTopLevelView($.__views.__alloyId18546);
    $.__views.__alloyId18547 = Ti.UI.createView({
        id: "__alloyId18547"
    });
    $.__views.__alloyId18546.add($.__views.__alloyId18547);
    $.__views.__alloyId18548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18548"
    });
    $.__views.__alloyId18547.add($.__views.__alloyId18548);
    $.__views.__alloyId18549 = Ti.UI.createView({
        id: "__alloyId18549"
    });
    $.__views.__alloyId18549 && $.addTopLevelView($.__views.__alloyId18549);
    $.__views.__alloyId18550 = Ti.UI.createView({
        id: "__alloyId18550"
    });
    $.__views.__alloyId18549.add($.__views.__alloyId18550);
    $.__views.__alloyId18551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18551"
    });
    $.__views.__alloyId18550.add($.__views.__alloyId18551);
    $.__views.__alloyId18552 = Ti.UI.createView({
        id: "__alloyId18552"
    });
    $.__views.__alloyId18552 && $.addTopLevelView($.__views.__alloyId18552);
    $.__views.__alloyId18553 = Ti.UI.createView({
        id: "__alloyId18553"
    });
    $.__views.__alloyId18552.add($.__views.__alloyId18553);
    $.__views.__alloyId18554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18554"
    });
    $.__views.__alloyId18553.add($.__views.__alloyId18554);
    $.__views.__alloyId18555 = Ti.UI.createView({
        id: "__alloyId18555"
    });
    $.__views.__alloyId18555 && $.addTopLevelView($.__views.__alloyId18555);
    $.__views.__alloyId18556 = Ti.UI.createView({
        id: "__alloyId18556"
    });
    $.__views.__alloyId18555.add($.__views.__alloyId18556);
    $.__views.__alloyId18557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18557"
    });
    $.__views.__alloyId18556.add($.__views.__alloyId18557);
    $.__views.__alloyId18558 = Ti.UI.createView({
        id: "__alloyId18558"
    });
    $.__views.__alloyId18558 && $.addTopLevelView($.__views.__alloyId18558);
    $.__views.__alloyId18559 = Ti.UI.createView({
        id: "__alloyId18559"
    });
    $.__views.__alloyId18558.add($.__views.__alloyId18559);
    $.__views.__alloyId18560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18560"
    });
    $.__views.__alloyId18559.add($.__views.__alloyId18560);
    $.__views.__alloyId18561 = Ti.UI.createView({
        id: "__alloyId18561"
    });
    $.__views.__alloyId18561 && $.addTopLevelView($.__views.__alloyId18561);
    $.__views.__alloyId18562 = Ti.UI.createView({
        id: "__alloyId18562"
    });
    $.__views.__alloyId18561.add($.__views.__alloyId18562);
    $.__views.__alloyId18563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18563"
    });
    $.__views.__alloyId18562.add($.__views.__alloyId18563);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;