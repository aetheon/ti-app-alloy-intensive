function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_483";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_483 = Ti.UI.createView({
        id: "widget_483"
    });
    $.__views.widget_483 && $.addTopLevelView($.__views.widget_483);
    $.__views.__alloyId11128 = Ti.UI.createView({
        id: "__alloyId11128"
    });
    $.__views.widget_483.add($.__views.__alloyId11128);
    $.__views.__alloyId11129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11129"
    });
    $.__views.__alloyId11128.add($.__views.__alloyId11129);
    $.__views.__alloyId11130 = Ti.UI.createView({
        id: "__alloyId11130"
    });
    $.__views.__alloyId11130 && $.addTopLevelView($.__views.__alloyId11130);
    $.__views.__alloyId11131 = Ti.UI.createView({
        id: "__alloyId11131"
    });
    $.__views.__alloyId11130.add($.__views.__alloyId11131);
    $.__views.__alloyId11132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11132"
    });
    $.__views.__alloyId11131.add($.__views.__alloyId11132);
    $.__views.__alloyId11133 = Ti.UI.createView({
        id: "__alloyId11133"
    });
    $.__views.__alloyId11133 && $.addTopLevelView($.__views.__alloyId11133);
    $.__views.__alloyId11134 = Ti.UI.createView({
        id: "__alloyId11134"
    });
    $.__views.__alloyId11133.add($.__views.__alloyId11134);
    $.__views.__alloyId11135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11135"
    });
    $.__views.__alloyId11134.add($.__views.__alloyId11135);
    $.__views.__alloyId11136 = Ti.UI.createView({
        id: "__alloyId11136"
    });
    $.__views.__alloyId11136 && $.addTopLevelView($.__views.__alloyId11136);
    $.__views.__alloyId11137 = Ti.UI.createView({
        id: "__alloyId11137"
    });
    $.__views.__alloyId11136.add($.__views.__alloyId11137);
    $.__views.__alloyId11138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11138"
    });
    $.__views.__alloyId11137.add($.__views.__alloyId11138);
    $.__views.__alloyId11139 = Ti.UI.createView({
        id: "__alloyId11139"
    });
    $.__views.__alloyId11139 && $.addTopLevelView($.__views.__alloyId11139);
    $.__views.__alloyId11140 = Ti.UI.createView({
        id: "__alloyId11140"
    });
    $.__views.__alloyId11139.add($.__views.__alloyId11140);
    $.__views.__alloyId11141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11141"
    });
    $.__views.__alloyId11140.add($.__views.__alloyId11141);
    $.__views.__alloyId11142 = Ti.UI.createView({
        id: "__alloyId11142"
    });
    $.__views.__alloyId11142 && $.addTopLevelView($.__views.__alloyId11142);
    $.__views.__alloyId11143 = Ti.UI.createView({
        id: "__alloyId11143"
    });
    $.__views.__alloyId11142.add($.__views.__alloyId11143);
    $.__views.__alloyId11144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11144"
    });
    $.__views.__alloyId11143.add($.__views.__alloyId11144);
    $.__views.__alloyId11145 = Ti.UI.createView({
        id: "__alloyId11145"
    });
    $.__views.__alloyId11145 && $.addTopLevelView($.__views.__alloyId11145);
    $.__views.__alloyId11146 = Ti.UI.createView({
        id: "__alloyId11146"
    });
    $.__views.__alloyId11145.add($.__views.__alloyId11146);
    $.__views.__alloyId11147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11147"
    });
    $.__views.__alloyId11146.add($.__views.__alloyId11147);
    $.__views.__alloyId11148 = Ti.UI.createView({
        id: "__alloyId11148"
    });
    $.__views.__alloyId11148 && $.addTopLevelView($.__views.__alloyId11148);
    $.__views.__alloyId11149 = Ti.UI.createView({
        id: "__alloyId11149"
    });
    $.__views.__alloyId11148.add($.__views.__alloyId11149);
    $.__views.__alloyId11150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11150"
    });
    $.__views.__alloyId11149.add($.__views.__alloyId11150);
    $.__views.__alloyId11151 = Ti.UI.createView({
        id: "__alloyId11151"
    });
    $.__views.__alloyId11151 && $.addTopLevelView($.__views.__alloyId11151);
    $.__views.__alloyId11152 = Ti.UI.createView({
        id: "__alloyId11152"
    });
    $.__views.__alloyId11151.add($.__views.__alloyId11152);
    $.__views.__alloyId11153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11153"
    });
    $.__views.__alloyId11152.add($.__views.__alloyId11153);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;