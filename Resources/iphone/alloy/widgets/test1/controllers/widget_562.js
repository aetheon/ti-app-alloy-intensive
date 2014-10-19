function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_562";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_562 = Ti.UI.createView({
        id: "widget_562"
    });
    $.__views.widget_562 && $.addTopLevelView($.__views.widget_562);
    $.__views.__alloyId13416 = Ti.UI.createView({
        id: "__alloyId13416"
    });
    $.__views.widget_562.add($.__views.__alloyId13416);
    $.__views.__alloyId13417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13417"
    });
    $.__views.__alloyId13416.add($.__views.__alloyId13417);
    $.__views.__alloyId13418 = Ti.UI.createView({
        id: "__alloyId13418"
    });
    $.__views.__alloyId13418 && $.addTopLevelView($.__views.__alloyId13418);
    $.__views.__alloyId13419 = Ti.UI.createView({
        id: "__alloyId13419"
    });
    $.__views.__alloyId13418.add($.__views.__alloyId13419);
    $.__views.__alloyId13420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13420"
    });
    $.__views.__alloyId13419.add($.__views.__alloyId13420);
    $.__views.__alloyId13421 = Ti.UI.createView({
        id: "__alloyId13421"
    });
    $.__views.__alloyId13421 && $.addTopLevelView($.__views.__alloyId13421);
    $.__views.__alloyId13422 = Ti.UI.createView({
        id: "__alloyId13422"
    });
    $.__views.__alloyId13421.add($.__views.__alloyId13422);
    $.__views.__alloyId13423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13423"
    });
    $.__views.__alloyId13422.add($.__views.__alloyId13423);
    $.__views.__alloyId13424 = Ti.UI.createView({
        id: "__alloyId13424"
    });
    $.__views.__alloyId13424 && $.addTopLevelView($.__views.__alloyId13424);
    $.__views.__alloyId13425 = Ti.UI.createView({
        id: "__alloyId13425"
    });
    $.__views.__alloyId13424.add($.__views.__alloyId13425);
    $.__views.__alloyId13426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13426"
    });
    $.__views.__alloyId13425.add($.__views.__alloyId13426);
    $.__views.__alloyId13427 = Ti.UI.createView({
        id: "__alloyId13427"
    });
    $.__views.__alloyId13427 && $.addTopLevelView($.__views.__alloyId13427);
    $.__views.__alloyId13428 = Ti.UI.createView({
        id: "__alloyId13428"
    });
    $.__views.__alloyId13427.add($.__views.__alloyId13428);
    $.__views.__alloyId13429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13429"
    });
    $.__views.__alloyId13428.add($.__views.__alloyId13429);
    $.__views.__alloyId13430 = Ti.UI.createView({
        id: "__alloyId13430"
    });
    $.__views.__alloyId13430 && $.addTopLevelView($.__views.__alloyId13430);
    $.__views.__alloyId13431 = Ti.UI.createView({
        id: "__alloyId13431"
    });
    $.__views.__alloyId13430.add($.__views.__alloyId13431);
    $.__views.__alloyId13432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13432"
    });
    $.__views.__alloyId13431.add($.__views.__alloyId13432);
    $.__views.__alloyId13433 = Ti.UI.createView({
        id: "__alloyId13433"
    });
    $.__views.__alloyId13433 && $.addTopLevelView($.__views.__alloyId13433);
    $.__views.__alloyId13434 = Ti.UI.createView({
        id: "__alloyId13434"
    });
    $.__views.__alloyId13433.add($.__views.__alloyId13434);
    $.__views.__alloyId13435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13435"
    });
    $.__views.__alloyId13434.add($.__views.__alloyId13435);
    $.__views.__alloyId13436 = Ti.UI.createView({
        id: "__alloyId13436"
    });
    $.__views.__alloyId13436 && $.addTopLevelView($.__views.__alloyId13436);
    $.__views.__alloyId13437 = Ti.UI.createView({
        id: "__alloyId13437"
    });
    $.__views.__alloyId13436.add($.__views.__alloyId13437);
    $.__views.__alloyId13438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13438"
    });
    $.__views.__alloyId13437.add($.__views.__alloyId13438);
    $.__views.__alloyId13439 = Ti.UI.createView({
        id: "__alloyId13439"
    });
    $.__views.__alloyId13439 && $.addTopLevelView($.__views.__alloyId13439);
    $.__views.__alloyId13440 = Ti.UI.createView({
        id: "__alloyId13440"
    });
    $.__views.__alloyId13439.add($.__views.__alloyId13440);
    $.__views.__alloyId13441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13441"
    });
    $.__views.__alloyId13440.add($.__views.__alloyId13441);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;