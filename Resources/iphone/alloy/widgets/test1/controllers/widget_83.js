function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_83";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_83 = Ti.UI.createView({
        id: "widget_83"
    });
    $.__views.widget_83 && $.addTopLevelView($.__views.widget_83);
    $.__views.__alloyId21138 = Ti.UI.createView({
        id: "__alloyId21138"
    });
    $.__views.widget_83.add($.__views.__alloyId21138);
    $.__views.__alloyId21139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21139"
    });
    $.__views.__alloyId21138.add($.__views.__alloyId21139);
    $.__views.__alloyId21140 = Ti.UI.createView({
        id: "__alloyId21140"
    });
    $.__views.__alloyId21140 && $.addTopLevelView($.__views.__alloyId21140);
    $.__views.__alloyId21141 = Ti.UI.createView({
        id: "__alloyId21141"
    });
    $.__views.__alloyId21140.add($.__views.__alloyId21141);
    $.__views.__alloyId21142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21142"
    });
    $.__views.__alloyId21141.add($.__views.__alloyId21142);
    $.__views.__alloyId21143 = Ti.UI.createView({
        id: "__alloyId21143"
    });
    $.__views.__alloyId21143 && $.addTopLevelView($.__views.__alloyId21143);
    $.__views.__alloyId21144 = Ti.UI.createView({
        id: "__alloyId21144"
    });
    $.__views.__alloyId21143.add($.__views.__alloyId21144);
    $.__views.__alloyId21145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21145"
    });
    $.__views.__alloyId21144.add($.__views.__alloyId21145);
    $.__views.__alloyId21146 = Ti.UI.createView({
        id: "__alloyId21146"
    });
    $.__views.__alloyId21146 && $.addTopLevelView($.__views.__alloyId21146);
    $.__views.__alloyId21147 = Ti.UI.createView({
        id: "__alloyId21147"
    });
    $.__views.__alloyId21146.add($.__views.__alloyId21147);
    $.__views.__alloyId21148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21148"
    });
    $.__views.__alloyId21147.add($.__views.__alloyId21148);
    $.__views.__alloyId21149 = Ti.UI.createView({
        id: "__alloyId21149"
    });
    $.__views.__alloyId21149 && $.addTopLevelView($.__views.__alloyId21149);
    $.__views.__alloyId21150 = Ti.UI.createView({
        id: "__alloyId21150"
    });
    $.__views.__alloyId21149.add($.__views.__alloyId21150);
    $.__views.__alloyId21151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21151"
    });
    $.__views.__alloyId21150.add($.__views.__alloyId21151);
    $.__views.__alloyId21152 = Ti.UI.createView({
        id: "__alloyId21152"
    });
    $.__views.__alloyId21152 && $.addTopLevelView($.__views.__alloyId21152);
    $.__views.__alloyId21153 = Ti.UI.createView({
        id: "__alloyId21153"
    });
    $.__views.__alloyId21152.add($.__views.__alloyId21153);
    $.__views.__alloyId21154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21154"
    });
    $.__views.__alloyId21153.add($.__views.__alloyId21154);
    $.__views.__alloyId21155 = Ti.UI.createView({
        id: "__alloyId21155"
    });
    $.__views.__alloyId21155 && $.addTopLevelView($.__views.__alloyId21155);
    $.__views.__alloyId21156 = Ti.UI.createView({
        id: "__alloyId21156"
    });
    $.__views.__alloyId21155.add($.__views.__alloyId21156);
    $.__views.__alloyId21157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21157"
    });
    $.__views.__alloyId21156.add($.__views.__alloyId21157);
    $.__views.__alloyId21158 = Ti.UI.createView({
        id: "__alloyId21158"
    });
    $.__views.__alloyId21158 && $.addTopLevelView($.__views.__alloyId21158);
    $.__views.__alloyId21159 = Ti.UI.createView({
        id: "__alloyId21159"
    });
    $.__views.__alloyId21158.add($.__views.__alloyId21159);
    $.__views.__alloyId21160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21160"
    });
    $.__views.__alloyId21159.add($.__views.__alloyId21160);
    $.__views.__alloyId21161 = Ti.UI.createView({
        id: "__alloyId21161"
    });
    $.__views.__alloyId21161 && $.addTopLevelView($.__views.__alloyId21161);
    $.__views.__alloyId21162 = Ti.UI.createView({
        id: "__alloyId21162"
    });
    $.__views.__alloyId21161.add($.__views.__alloyId21162);
    $.__views.__alloyId21163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21163"
    });
    $.__views.__alloyId21162.add($.__views.__alloyId21163);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;