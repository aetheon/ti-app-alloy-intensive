function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_450";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_450 = Ti.UI.createView({
        id: "widget_450"
    });
    $.__views.widget_450 && $.addTopLevelView($.__views.widget_450);
    $.__views.__alloyId10192 = Ti.UI.createView({
        id: "__alloyId10192"
    });
    $.__views.widget_450.add($.__views.__alloyId10192);
    $.__views.__alloyId10193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10193"
    });
    $.__views.__alloyId10192.add($.__views.__alloyId10193);
    $.__views.__alloyId10194 = Ti.UI.createView({
        id: "__alloyId10194"
    });
    $.__views.__alloyId10194 && $.addTopLevelView($.__views.__alloyId10194);
    $.__views.__alloyId10195 = Ti.UI.createView({
        id: "__alloyId10195"
    });
    $.__views.__alloyId10194.add($.__views.__alloyId10195);
    $.__views.__alloyId10196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10196"
    });
    $.__views.__alloyId10195.add($.__views.__alloyId10196);
    $.__views.__alloyId10197 = Ti.UI.createView({
        id: "__alloyId10197"
    });
    $.__views.__alloyId10197 && $.addTopLevelView($.__views.__alloyId10197);
    $.__views.__alloyId10198 = Ti.UI.createView({
        id: "__alloyId10198"
    });
    $.__views.__alloyId10197.add($.__views.__alloyId10198);
    $.__views.__alloyId10199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10199"
    });
    $.__views.__alloyId10198.add($.__views.__alloyId10199);
    $.__views.__alloyId10200 = Ti.UI.createView({
        id: "__alloyId10200"
    });
    $.__views.__alloyId10200 && $.addTopLevelView($.__views.__alloyId10200);
    $.__views.__alloyId10201 = Ti.UI.createView({
        id: "__alloyId10201"
    });
    $.__views.__alloyId10200.add($.__views.__alloyId10201);
    $.__views.__alloyId10202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10202"
    });
    $.__views.__alloyId10201.add($.__views.__alloyId10202);
    $.__views.__alloyId10203 = Ti.UI.createView({
        id: "__alloyId10203"
    });
    $.__views.__alloyId10203 && $.addTopLevelView($.__views.__alloyId10203);
    $.__views.__alloyId10204 = Ti.UI.createView({
        id: "__alloyId10204"
    });
    $.__views.__alloyId10203.add($.__views.__alloyId10204);
    $.__views.__alloyId10205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10205"
    });
    $.__views.__alloyId10204.add($.__views.__alloyId10205);
    $.__views.__alloyId10206 = Ti.UI.createView({
        id: "__alloyId10206"
    });
    $.__views.__alloyId10206 && $.addTopLevelView($.__views.__alloyId10206);
    $.__views.__alloyId10207 = Ti.UI.createView({
        id: "__alloyId10207"
    });
    $.__views.__alloyId10206.add($.__views.__alloyId10207);
    $.__views.__alloyId10208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10208"
    });
    $.__views.__alloyId10207.add($.__views.__alloyId10208);
    $.__views.__alloyId10209 = Ti.UI.createView({
        id: "__alloyId10209"
    });
    $.__views.__alloyId10209 && $.addTopLevelView($.__views.__alloyId10209);
    $.__views.__alloyId10210 = Ti.UI.createView({
        id: "__alloyId10210"
    });
    $.__views.__alloyId10209.add($.__views.__alloyId10210);
    $.__views.__alloyId10211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10211"
    });
    $.__views.__alloyId10210.add($.__views.__alloyId10211);
    $.__views.__alloyId10212 = Ti.UI.createView({
        id: "__alloyId10212"
    });
    $.__views.__alloyId10212 && $.addTopLevelView($.__views.__alloyId10212);
    $.__views.__alloyId10213 = Ti.UI.createView({
        id: "__alloyId10213"
    });
    $.__views.__alloyId10212.add($.__views.__alloyId10213);
    $.__views.__alloyId10214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10214"
    });
    $.__views.__alloyId10213.add($.__views.__alloyId10214);
    $.__views.__alloyId10215 = Ti.UI.createView({
        id: "__alloyId10215"
    });
    $.__views.__alloyId10215 && $.addTopLevelView($.__views.__alloyId10215);
    $.__views.__alloyId10216 = Ti.UI.createView({
        id: "__alloyId10216"
    });
    $.__views.__alloyId10215.add($.__views.__alloyId10216);
    $.__views.__alloyId10217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10217"
    });
    $.__views.__alloyId10216.add($.__views.__alloyId10217);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;