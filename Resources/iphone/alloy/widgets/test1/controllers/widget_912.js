function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_912";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_912 = Ti.UI.createView({
        id: "widget_912"
    });
    $.__views.widget_912 && $.addTopLevelView($.__views.widget_912);
    $.__views.__alloyId23530 = Ti.UI.createView({
        id: "__alloyId23530"
    });
    $.__views.widget_912.add($.__views.__alloyId23530);
    $.__views.__alloyId23531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23531"
    });
    $.__views.__alloyId23530.add($.__views.__alloyId23531);
    $.__views.__alloyId23532 = Ti.UI.createView({
        id: "__alloyId23532"
    });
    $.__views.__alloyId23532 && $.addTopLevelView($.__views.__alloyId23532);
    $.__views.__alloyId23533 = Ti.UI.createView({
        id: "__alloyId23533"
    });
    $.__views.__alloyId23532.add($.__views.__alloyId23533);
    $.__views.__alloyId23534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23534"
    });
    $.__views.__alloyId23533.add($.__views.__alloyId23534);
    $.__views.__alloyId23535 = Ti.UI.createView({
        id: "__alloyId23535"
    });
    $.__views.__alloyId23535 && $.addTopLevelView($.__views.__alloyId23535);
    $.__views.__alloyId23536 = Ti.UI.createView({
        id: "__alloyId23536"
    });
    $.__views.__alloyId23535.add($.__views.__alloyId23536);
    $.__views.__alloyId23537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23537"
    });
    $.__views.__alloyId23536.add($.__views.__alloyId23537);
    $.__views.__alloyId23538 = Ti.UI.createView({
        id: "__alloyId23538"
    });
    $.__views.__alloyId23538 && $.addTopLevelView($.__views.__alloyId23538);
    $.__views.__alloyId23539 = Ti.UI.createView({
        id: "__alloyId23539"
    });
    $.__views.__alloyId23538.add($.__views.__alloyId23539);
    $.__views.__alloyId23540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23540"
    });
    $.__views.__alloyId23539.add($.__views.__alloyId23540);
    $.__views.__alloyId23541 = Ti.UI.createView({
        id: "__alloyId23541"
    });
    $.__views.__alloyId23541 && $.addTopLevelView($.__views.__alloyId23541);
    $.__views.__alloyId23542 = Ti.UI.createView({
        id: "__alloyId23542"
    });
    $.__views.__alloyId23541.add($.__views.__alloyId23542);
    $.__views.__alloyId23543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23543"
    });
    $.__views.__alloyId23542.add($.__views.__alloyId23543);
    $.__views.__alloyId23544 = Ti.UI.createView({
        id: "__alloyId23544"
    });
    $.__views.__alloyId23544 && $.addTopLevelView($.__views.__alloyId23544);
    $.__views.__alloyId23545 = Ti.UI.createView({
        id: "__alloyId23545"
    });
    $.__views.__alloyId23544.add($.__views.__alloyId23545);
    $.__views.__alloyId23546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23546"
    });
    $.__views.__alloyId23545.add($.__views.__alloyId23546);
    $.__views.__alloyId23547 = Ti.UI.createView({
        id: "__alloyId23547"
    });
    $.__views.__alloyId23547 && $.addTopLevelView($.__views.__alloyId23547);
    $.__views.__alloyId23548 = Ti.UI.createView({
        id: "__alloyId23548"
    });
    $.__views.__alloyId23547.add($.__views.__alloyId23548);
    $.__views.__alloyId23549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23549"
    });
    $.__views.__alloyId23548.add($.__views.__alloyId23549);
    $.__views.__alloyId23550 = Ti.UI.createView({
        id: "__alloyId23550"
    });
    $.__views.__alloyId23550 && $.addTopLevelView($.__views.__alloyId23550);
    $.__views.__alloyId23551 = Ti.UI.createView({
        id: "__alloyId23551"
    });
    $.__views.__alloyId23550.add($.__views.__alloyId23551);
    $.__views.__alloyId23552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23552"
    });
    $.__views.__alloyId23551.add($.__views.__alloyId23552);
    $.__views.__alloyId23553 = Ti.UI.createView({
        id: "__alloyId23553"
    });
    $.__views.__alloyId23553 && $.addTopLevelView($.__views.__alloyId23553);
    $.__views.__alloyId23554 = Ti.UI.createView({
        id: "__alloyId23554"
    });
    $.__views.__alloyId23553.add($.__views.__alloyId23554);
    $.__views.__alloyId23555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23555"
    });
    $.__views.__alloyId23554.add($.__views.__alloyId23555);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;