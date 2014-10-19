function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_119";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_119 = Ti.UI.createView({
        id: "widget_119"
    });
    $.__views.widget_119 && $.addTopLevelView($.__views.widget_119);
    $.__views.__alloyId624 = Ti.UI.createView({
        id: "__alloyId624"
    });
    $.__views.widget_119.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createView({
        id: "__alloyId626"
    });
    $.__views.__alloyId626 && $.addTopLevelView($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        id: "__alloyId627"
    });
    $.__views.__alloyId626.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createView({
        id: "__alloyId629"
    });
    $.__views.__alloyId629 && $.addTopLevelView($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createView({
        id: "__alloyId632"
    });
    $.__views.__alloyId632 && $.addTopLevelView($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        id: "__alloyId633"
    });
    $.__views.__alloyId632.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createView({
        id: "__alloyId635"
    });
    $.__views.__alloyId635 && $.addTopLevelView($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
        id: "__alloyId636"
    });
    $.__views.__alloyId635.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createView({
        id: "__alloyId638"
    });
    $.__views.__alloyId638 && $.addTopLevelView($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createView({
        id: "__alloyId639"
    });
    $.__views.__alloyId638.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createView({
        id: "__alloyId641"
    });
    $.__views.__alloyId641 && $.addTopLevelView($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createView({
        id: "__alloyId642"
    });
    $.__views.__alloyId641.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createView({
        id: "__alloyId644"
    });
    $.__views.__alloyId644 && $.addTopLevelView($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createView({
        id: "__alloyId645"
    });
    $.__views.__alloyId644.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        id: "__alloyId647"
    });
    $.__views.__alloyId647 && $.addTopLevelView($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;