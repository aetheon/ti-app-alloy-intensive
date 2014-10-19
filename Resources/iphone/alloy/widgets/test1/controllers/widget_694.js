function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_694";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_694 = Ti.UI.createView({
        id: "widget_694"
    });
    $.__views.widget_694 && $.addTopLevelView($.__views.widget_694);
    $.__views.__alloyId17212 = Ti.UI.createView({
        id: "__alloyId17212"
    });
    $.__views.widget_694.add($.__views.__alloyId17212);
    $.__views.__alloyId17213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17213"
    });
    $.__views.__alloyId17212.add($.__views.__alloyId17213);
    $.__views.__alloyId17214 = Ti.UI.createView({
        id: "__alloyId17214"
    });
    $.__views.__alloyId17214 && $.addTopLevelView($.__views.__alloyId17214);
    $.__views.__alloyId17215 = Ti.UI.createView({
        id: "__alloyId17215"
    });
    $.__views.__alloyId17214.add($.__views.__alloyId17215);
    $.__views.__alloyId17216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17216"
    });
    $.__views.__alloyId17215.add($.__views.__alloyId17216);
    $.__views.__alloyId17217 = Ti.UI.createView({
        id: "__alloyId17217"
    });
    $.__views.__alloyId17217 && $.addTopLevelView($.__views.__alloyId17217);
    $.__views.__alloyId17218 = Ti.UI.createView({
        id: "__alloyId17218"
    });
    $.__views.__alloyId17217.add($.__views.__alloyId17218);
    $.__views.__alloyId17219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17219"
    });
    $.__views.__alloyId17218.add($.__views.__alloyId17219);
    $.__views.__alloyId17220 = Ti.UI.createView({
        id: "__alloyId17220"
    });
    $.__views.__alloyId17220 && $.addTopLevelView($.__views.__alloyId17220);
    $.__views.__alloyId17221 = Ti.UI.createView({
        id: "__alloyId17221"
    });
    $.__views.__alloyId17220.add($.__views.__alloyId17221);
    $.__views.__alloyId17222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17222"
    });
    $.__views.__alloyId17221.add($.__views.__alloyId17222);
    $.__views.__alloyId17223 = Ti.UI.createView({
        id: "__alloyId17223"
    });
    $.__views.__alloyId17223 && $.addTopLevelView($.__views.__alloyId17223);
    $.__views.__alloyId17224 = Ti.UI.createView({
        id: "__alloyId17224"
    });
    $.__views.__alloyId17223.add($.__views.__alloyId17224);
    $.__views.__alloyId17225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17225"
    });
    $.__views.__alloyId17224.add($.__views.__alloyId17225);
    $.__views.__alloyId17226 = Ti.UI.createView({
        id: "__alloyId17226"
    });
    $.__views.__alloyId17226 && $.addTopLevelView($.__views.__alloyId17226);
    $.__views.__alloyId17227 = Ti.UI.createView({
        id: "__alloyId17227"
    });
    $.__views.__alloyId17226.add($.__views.__alloyId17227);
    $.__views.__alloyId17228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17228"
    });
    $.__views.__alloyId17227.add($.__views.__alloyId17228);
    $.__views.__alloyId17229 = Ti.UI.createView({
        id: "__alloyId17229"
    });
    $.__views.__alloyId17229 && $.addTopLevelView($.__views.__alloyId17229);
    $.__views.__alloyId17230 = Ti.UI.createView({
        id: "__alloyId17230"
    });
    $.__views.__alloyId17229.add($.__views.__alloyId17230);
    $.__views.__alloyId17231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17231"
    });
    $.__views.__alloyId17230.add($.__views.__alloyId17231);
    $.__views.__alloyId17232 = Ti.UI.createView({
        id: "__alloyId17232"
    });
    $.__views.__alloyId17232 && $.addTopLevelView($.__views.__alloyId17232);
    $.__views.__alloyId17233 = Ti.UI.createView({
        id: "__alloyId17233"
    });
    $.__views.__alloyId17232.add($.__views.__alloyId17233);
    $.__views.__alloyId17234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17234"
    });
    $.__views.__alloyId17233.add($.__views.__alloyId17234);
    $.__views.__alloyId17235 = Ti.UI.createView({
        id: "__alloyId17235"
    });
    $.__views.__alloyId17235 && $.addTopLevelView($.__views.__alloyId17235);
    $.__views.__alloyId17236 = Ti.UI.createView({
        id: "__alloyId17236"
    });
    $.__views.__alloyId17235.add($.__views.__alloyId17236);
    $.__views.__alloyId17237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17237"
    });
    $.__views.__alloyId17236.add($.__views.__alloyId17237);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;