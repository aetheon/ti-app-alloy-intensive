function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_243";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_243 = Ti.UI.createView({
        id: "widget_243"
    });
    $.__views.widget_243 && $.addTopLevelView($.__views.widget_243);
    $.__views.__alloyId4212 = Ti.UI.createView({
        id: "__alloyId4212"
    });
    $.__views.widget_243.add($.__views.__alloyId4212);
    $.__views.__alloyId4213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4213"
    });
    $.__views.__alloyId4212.add($.__views.__alloyId4213);
    $.__views.__alloyId4214 = Ti.UI.createView({
        id: "__alloyId4214"
    });
    $.__views.__alloyId4214 && $.addTopLevelView($.__views.__alloyId4214);
    $.__views.__alloyId4215 = Ti.UI.createView({
        id: "__alloyId4215"
    });
    $.__views.__alloyId4214.add($.__views.__alloyId4215);
    $.__views.__alloyId4216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4216"
    });
    $.__views.__alloyId4215.add($.__views.__alloyId4216);
    $.__views.__alloyId4217 = Ti.UI.createView({
        id: "__alloyId4217"
    });
    $.__views.__alloyId4217 && $.addTopLevelView($.__views.__alloyId4217);
    $.__views.__alloyId4218 = Ti.UI.createView({
        id: "__alloyId4218"
    });
    $.__views.__alloyId4217.add($.__views.__alloyId4218);
    $.__views.__alloyId4219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4219"
    });
    $.__views.__alloyId4218.add($.__views.__alloyId4219);
    $.__views.__alloyId4220 = Ti.UI.createView({
        id: "__alloyId4220"
    });
    $.__views.__alloyId4220 && $.addTopLevelView($.__views.__alloyId4220);
    $.__views.__alloyId4221 = Ti.UI.createView({
        id: "__alloyId4221"
    });
    $.__views.__alloyId4220.add($.__views.__alloyId4221);
    $.__views.__alloyId4222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4222"
    });
    $.__views.__alloyId4221.add($.__views.__alloyId4222);
    $.__views.__alloyId4223 = Ti.UI.createView({
        id: "__alloyId4223"
    });
    $.__views.__alloyId4223 && $.addTopLevelView($.__views.__alloyId4223);
    $.__views.__alloyId4224 = Ti.UI.createView({
        id: "__alloyId4224"
    });
    $.__views.__alloyId4223.add($.__views.__alloyId4224);
    $.__views.__alloyId4225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4225"
    });
    $.__views.__alloyId4224.add($.__views.__alloyId4225);
    $.__views.__alloyId4226 = Ti.UI.createView({
        id: "__alloyId4226"
    });
    $.__views.__alloyId4226 && $.addTopLevelView($.__views.__alloyId4226);
    $.__views.__alloyId4227 = Ti.UI.createView({
        id: "__alloyId4227"
    });
    $.__views.__alloyId4226.add($.__views.__alloyId4227);
    $.__views.__alloyId4228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4228"
    });
    $.__views.__alloyId4227.add($.__views.__alloyId4228);
    $.__views.__alloyId4229 = Ti.UI.createView({
        id: "__alloyId4229"
    });
    $.__views.__alloyId4229 && $.addTopLevelView($.__views.__alloyId4229);
    $.__views.__alloyId4230 = Ti.UI.createView({
        id: "__alloyId4230"
    });
    $.__views.__alloyId4229.add($.__views.__alloyId4230);
    $.__views.__alloyId4231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4231"
    });
    $.__views.__alloyId4230.add($.__views.__alloyId4231);
    $.__views.__alloyId4232 = Ti.UI.createView({
        id: "__alloyId4232"
    });
    $.__views.__alloyId4232 && $.addTopLevelView($.__views.__alloyId4232);
    $.__views.__alloyId4233 = Ti.UI.createView({
        id: "__alloyId4233"
    });
    $.__views.__alloyId4232.add($.__views.__alloyId4233);
    $.__views.__alloyId4234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4234"
    });
    $.__views.__alloyId4233.add($.__views.__alloyId4234);
    $.__views.__alloyId4235 = Ti.UI.createView({
        id: "__alloyId4235"
    });
    $.__views.__alloyId4235 && $.addTopLevelView($.__views.__alloyId4235);
    $.__views.__alloyId4236 = Ti.UI.createView({
        id: "__alloyId4236"
    });
    $.__views.__alloyId4235.add($.__views.__alloyId4236);
    $.__views.__alloyId4237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4237"
    });
    $.__views.__alloyId4236.add($.__views.__alloyId4237);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;