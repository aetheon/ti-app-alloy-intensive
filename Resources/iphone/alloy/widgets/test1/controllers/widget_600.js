function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_600";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_600 = Ti.UI.createView({
        id: "widget_600"
    });
    $.__views.widget_600 && $.addTopLevelView($.__views.widget_600);
    $.__views.__alloyId14534 = Ti.UI.createView({
        id: "__alloyId14534"
    });
    $.__views.widget_600.add($.__views.__alloyId14534);
    $.__views.__alloyId14535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14535"
    });
    $.__views.__alloyId14534.add($.__views.__alloyId14535);
    $.__views.__alloyId14536 = Ti.UI.createView({
        id: "__alloyId14536"
    });
    $.__views.__alloyId14536 && $.addTopLevelView($.__views.__alloyId14536);
    $.__views.__alloyId14537 = Ti.UI.createView({
        id: "__alloyId14537"
    });
    $.__views.__alloyId14536.add($.__views.__alloyId14537);
    $.__views.__alloyId14538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14538"
    });
    $.__views.__alloyId14537.add($.__views.__alloyId14538);
    $.__views.__alloyId14539 = Ti.UI.createView({
        id: "__alloyId14539"
    });
    $.__views.__alloyId14539 && $.addTopLevelView($.__views.__alloyId14539);
    $.__views.__alloyId14540 = Ti.UI.createView({
        id: "__alloyId14540"
    });
    $.__views.__alloyId14539.add($.__views.__alloyId14540);
    $.__views.__alloyId14541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14541"
    });
    $.__views.__alloyId14540.add($.__views.__alloyId14541);
    $.__views.__alloyId14542 = Ti.UI.createView({
        id: "__alloyId14542"
    });
    $.__views.__alloyId14542 && $.addTopLevelView($.__views.__alloyId14542);
    $.__views.__alloyId14543 = Ti.UI.createView({
        id: "__alloyId14543"
    });
    $.__views.__alloyId14542.add($.__views.__alloyId14543);
    $.__views.__alloyId14544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14544"
    });
    $.__views.__alloyId14543.add($.__views.__alloyId14544);
    $.__views.__alloyId14545 = Ti.UI.createView({
        id: "__alloyId14545"
    });
    $.__views.__alloyId14545 && $.addTopLevelView($.__views.__alloyId14545);
    $.__views.__alloyId14546 = Ti.UI.createView({
        id: "__alloyId14546"
    });
    $.__views.__alloyId14545.add($.__views.__alloyId14546);
    $.__views.__alloyId14547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14547"
    });
    $.__views.__alloyId14546.add($.__views.__alloyId14547);
    $.__views.__alloyId14548 = Ti.UI.createView({
        id: "__alloyId14548"
    });
    $.__views.__alloyId14548 && $.addTopLevelView($.__views.__alloyId14548);
    $.__views.__alloyId14549 = Ti.UI.createView({
        id: "__alloyId14549"
    });
    $.__views.__alloyId14548.add($.__views.__alloyId14549);
    $.__views.__alloyId14550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14550"
    });
    $.__views.__alloyId14549.add($.__views.__alloyId14550);
    $.__views.__alloyId14551 = Ti.UI.createView({
        id: "__alloyId14551"
    });
    $.__views.__alloyId14551 && $.addTopLevelView($.__views.__alloyId14551);
    $.__views.__alloyId14552 = Ti.UI.createView({
        id: "__alloyId14552"
    });
    $.__views.__alloyId14551.add($.__views.__alloyId14552);
    $.__views.__alloyId14553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14553"
    });
    $.__views.__alloyId14552.add($.__views.__alloyId14553);
    $.__views.__alloyId14554 = Ti.UI.createView({
        id: "__alloyId14554"
    });
    $.__views.__alloyId14554 && $.addTopLevelView($.__views.__alloyId14554);
    $.__views.__alloyId14555 = Ti.UI.createView({
        id: "__alloyId14555"
    });
    $.__views.__alloyId14554.add($.__views.__alloyId14555);
    $.__views.__alloyId14556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14556"
    });
    $.__views.__alloyId14555.add($.__views.__alloyId14556);
    $.__views.__alloyId14557 = Ti.UI.createView({
        id: "__alloyId14557"
    });
    $.__views.__alloyId14557 && $.addTopLevelView($.__views.__alloyId14557);
    $.__views.__alloyId14558 = Ti.UI.createView({
        id: "__alloyId14558"
    });
    $.__views.__alloyId14557.add($.__views.__alloyId14558);
    $.__views.__alloyId14559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14559"
    });
    $.__views.__alloyId14558.add($.__views.__alloyId14559);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;