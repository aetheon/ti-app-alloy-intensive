function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_843";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_843 = Ti.UI.createView({
        id: "widget_843"
    });
    $.__views.widget_843 && $.addTopLevelView($.__views.widget_843);
    $.__views.__alloyId21528 = Ti.UI.createView({
        id: "__alloyId21528"
    });
    $.__views.widget_843.add($.__views.__alloyId21528);
    $.__views.__alloyId21529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21529"
    });
    $.__views.__alloyId21528.add($.__views.__alloyId21529);
    $.__views.__alloyId21530 = Ti.UI.createView({
        id: "__alloyId21530"
    });
    $.__views.__alloyId21530 && $.addTopLevelView($.__views.__alloyId21530);
    $.__views.__alloyId21531 = Ti.UI.createView({
        id: "__alloyId21531"
    });
    $.__views.__alloyId21530.add($.__views.__alloyId21531);
    $.__views.__alloyId21532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21532"
    });
    $.__views.__alloyId21531.add($.__views.__alloyId21532);
    $.__views.__alloyId21533 = Ti.UI.createView({
        id: "__alloyId21533"
    });
    $.__views.__alloyId21533 && $.addTopLevelView($.__views.__alloyId21533);
    $.__views.__alloyId21534 = Ti.UI.createView({
        id: "__alloyId21534"
    });
    $.__views.__alloyId21533.add($.__views.__alloyId21534);
    $.__views.__alloyId21535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21535"
    });
    $.__views.__alloyId21534.add($.__views.__alloyId21535);
    $.__views.__alloyId21536 = Ti.UI.createView({
        id: "__alloyId21536"
    });
    $.__views.__alloyId21536 && $.addTopLevelView($.__views.__alloyId21536);
    $.__views.__alloyId21537 = Ti.UI.createView({
        id: "__alloyId21537"
    });
    $.__views.__alloyId21536.add($.__views.__alloyId21537);
    $.__views.__alloyId21538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21538"
    });
    $.__views.__alloyId21537.add($.__views.__alloyId21538);
    $.__views.__alloyId21539 = Ti.UI.createView({
        id: "__alloyId21539"
    });
    $.__views.__alloyId21539 && $.addTopLevelView($.__views.__alloyId21539);
    $.__views.__alloyId21540 = Ti.UI.createView({
        id: "__alloyId21540"
    });
    $.__views.__alloyId21539.add($.__views.__alloyId21540);
    $.__views.__alloyId21541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21541"
    });
    $.__views.__alloyId21540.add($.__views.__alloyId21541);
    $.__views.__alloyId21542 = Ti.UI.createView({
        id: "__alloyId21542"
    });
    $.__views.__alloyId21542 && $.addTopLevelView($.__views.__alloyId21542);
    $.__views.__alloyId21543 = Ti.UI.createView({
        id: "__alloyId21543"
    });
    $.__views.__alloyId21542.add($.__views.__alloyId21543);
    $.__views.__alloyId21544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21544"
    });
    $.__views.__alloyId21543.add($.__views.__alloyId21544);
    $.__views.__alloyId21545 = Ti.UI.createView({
        id: "__alloyId21545"
    });
    $.__views.__alloyId21545 && $.addTopLevelView($.__views.__alloyId21545);
    $.__views.__alloyId21546 = Ti.UI.createView({
        id: "__alloyId21546"
    });
    $.__views.__alloyId21545.add($.__views.__alloyId21546);
    $.__views.__alloyId21547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21547"
    });
    $.__views.__alloyId21546.add($.__views.__alloyId21547);
    $.__views.__alloyId21548 = Ti.UI.createView({
        id: "__alloyId21548"
    });
    $.__views.__alloyId21548 && $.addTopLevelView($.__views.__alloyId21548);
    $.__views.__alloyId21549 = Ti.UI.createView({
        id: "__alloyId21549"
    });
    $.__views.__alloyId21548.add($.__views.__alloyId21549);
    $.__views.__alloyId21550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21550"
    });
    $.__views.__alloyId21549.add($.__views.__alloyId21550);
    $.__views.__alloyId21551 = Ti.UI.createView({
        id: "__alloyId21551"
    });
    $.__views.__alloyId21551 && $.addTopLevelView($.__views.__alloyId21551);
    $.__views.__alloyId21552 = Ti.UI.createView({
        id: "__alloyId21552"
    });
    $.__views.__alloyId21551.add($.__views.__alloyId21552);
    $.__views.__alloyId21553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21553"
    });
    $.__views.__alloyId21552.add($.__views.__alloyId21553);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;