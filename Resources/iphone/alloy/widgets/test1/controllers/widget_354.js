function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_354";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_354 = Ti.UI.createView({
        id: "widget_354"
    });
    $.__views.widget_354 && $.addTopLevelView($.__views.widget_354);
    $.__views.__alloyId7410 = Ti.UI.createView({
        id: "__alloyId7410"
    });
    $.__views.widget_354.add($.__views.__alloyId7410);
    $.__views.__alloyId7411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7411"
    });
    $.__views.__alloyId7410.add($.__views.__alloyId7411);
    $.__views.__alloyId7412 = Ti.UI.createView({
        id: "__alloyId7412"
    });
    $.__views.__alloyId7412 && $.addTopLevelView($.__views.__alloyId7412);
    $.__views.__alloyId7413 = Ti.UI.createView({
        id: "__alloyId7413"
    });
    $.__views.__alloyId7412.add($.__views.__alloyId7413);
    $.__views.__alloyId7414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7414"
    });
    $.__views.__alloyId7413.add($.__views.__alloyId7414);
    $.__views.__alloyId7415 = Ti.UI.createView({
        id: "__alloyId7415"
    });
    $.__views.__alloyId7415 && $.addTopLevelView($.__views.__alloyId7415);
    $.__views.__alloyId7416 = Ti.UI.createView({
        id: "__alloyId7416"
    });
    $.__views.__alloyId7415.add($.__views.__alloyId7416);
    $.__views.__alloyId7417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7417"
    });
    $.__views.__alloyId7416.add($.__views.__alloyId7417);
    $.__views.__alloyId7418 = Ti.UI.createView({
        id: "__alloyId7418"
    });
    $.__views.__alloyId7418 && $.addTopLevelView($.__views.__alloyId7418);
    $.__views.__alloyId7419 = Ti.UI.createView({
        id: "__alloyId7419"
    });
    $.__views.__alloyId7418.add($.__views.__alloyId7419);
    $.__views.__alloyId7420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7420"
    });
    $.__views.__alloyId7419.add($.__views.__alloyId7420);
    $.__views.__alloyId7421 = Ti.UI.createView({
        id: "__alloyId7421"
    });
    $.__views.__alloyId7421 && $.addTopLevelView($.__views.__alloyId7421);
    $.__views.__alloyId7422 = Ti.UI.createView({
        id: "__alloyId7422"
    });
    $.__views.__alloyId7421.add($.__views.__alloyId7422);
    $.__views.__alloyId7423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7423"
    });
    $.__views.__alloyId7422.add($.__views.__alloyId7423);
    $.__views.__alloyId7424 = Ti.UI.createView({
        id: "__alloyId7424"
    });
    $.__views.__alloyId7424 && $.addTopLevelView($.__views.__alloyId7424);
    $.__views.__alloyId7425 = Ti.UI.createView({
        id: "__alloyId7425"
    });
    $.__views.__alloyId7424.add($.__views.__alloyId7425);
    $.__views.__alloyId7426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7426"
    });
    $.__views.__alloyId7425.add($.__views.__alloyId7426);
    $.__views.__alloyId7427 = Ti.UI.createView({
        id: "__alloyId7427"
    });
    $.__views.__alloyId7427 && $.addTopLevelView($.__views.__alloyId7427);
    $.__views.__alloyId7428 = Ti.UI.createView({
        id: "__alloyId7428"
    });
    $.__views.__alloyId7427.add($.__views.__alloyId7428);
    $.__views.__alloyId7429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7429"
    });
    $.__views.__alloyId7428.add($.__views.__alloyId7429);
    $.__views.__alloyId7430 = Ti.UI.createView({
        id: "__alloyId7430"
    });
    $.__views.__alloyId7430 && $.addTopLevelView($.__views.__alloyId7430);
    $.__views.__alloyId7431 = Ti.UI.createView({
        id: "__alloyId7431"
    });
    $.__views.__alloyId7430.add($.__views.__alloyId7431);
    $.__views.__alloyId7432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7432"
    });
    $.__views.__alloyId7431.add($.__views.__alloyId7432);
    $.__views.__alloyId7433 = Ti.UI.createView({
        id: "__alloyId7433"
    });
    $.__views.__alloyId7433 && $.addTopLevelView($.__views.__alloyId7433);
    $.__views.__alloyId7434 = Ti.UI.createView({
        id: "__alloyId7434"
    });
    $.__views.__alloyId7433.add($.__views.__alloyId7434);
    $.__views.__alloyId7435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7435"
    });
    $.__views.__alloyId7434.add($.__views.__alloyId7435);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;