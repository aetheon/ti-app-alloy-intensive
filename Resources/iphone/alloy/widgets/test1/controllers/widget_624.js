function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_624";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_624 = Ti.UI.createView({
        id: "widget_624"
    });
    $.__views.widget_624 && $.addTopLevelView($.__views.widget_624);
    $.__views.__alloyId15210 = Ti.UI.createView({
        id: "__alloyId15210"
    });
    $.__views.widget_624.add($.__views.__alloyId15210);
    $.__views.__alloyId15211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15211"
    });
    $.__views.__alloyId15210.add($.__views.__alloyId15211);
    $.__views.__alloyId15212 = Ti.UI.createView({
        id: "__alloyId15212"
    });
    $.__views.__alloyId15212 && $.addTopLevelView($.__views.__alloyId15212);
    $.__views.__alloyId15213 = Ti.UI.createView({
        id: "__alloyId15213"
    });
    $.__views.__alloyId15212.add($.__views.__alloyId15213);
    $.__views.__alloyId15214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15214"
    });
    $.__views.__alloyId15213.add($.__views.__alloyId15214);
    $.__views.__alloyId15215 = Ti.UI.createView({
        id: "__alloyId15215"
    });
    $.__views.__alloyId15215 && $.addTopLevelView($.__views.__alloyId15215);
    $.__views.__alloyId15216 = Ti.UI.createView({
        id: "__alloyId15216"
    });
    $.__views.__alloyId15215.add($.__views.__alloyId15216);
    $.__views.__alloyId15217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15217"
    });
    $.__views.__alloyId15216.add($.__views.__alloyId15217);
    $.__views.__alloyId15218 = Ti.UI.createView({
        id: "__alloyId15218"
    });
    $.__views.__alloyId15218 && $.addTopLevelView($.__views.__alloyId15218);
    $.__views.__alloyId15219 = Ti.UI.createView({
        id: "__alloyId15219"
    });
    $.__views.__alloyId15218.add($.__views.__alloyId15219);
    $.__views.__alloyId15220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15220"
    });
    $.__views.__alloyId15219.add($.__views.__alloyId15220);
    $.__views.__alloyId15221 = Ti.UI.createView({
        id: "__alloyId15221"
    });
    $.__views.__alloyId15221 && $.addTopLevelView($.__views.__alloyId15221);
    $.__views.__alloyId15222 = Ti.UI.createView({
        id: "__alloyId15222"
    });
    $.__views.__alloyId15221.add($.__views.__alloyId15222);
    $.__views.__alloyId15223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15223"
    });
    $.__views.__alloyId15222.add($.__views.__alloyId15223);
    $.__views.__alloyId15224 = Ti.UI.createView({
        id: "__alloyId15224"
    });
    $.__views.__alloyId15224 && $.addTopLevelView($.__views.__alloyId15224);
    $.__views.__alloyId15225 = Ti.UI.createView({
        id: "__alloyId15225"
    });
    $.__views.__alloyId15224.add($.__views.__alloyId15225);
    $.__views.__alloyId15226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15226"
    });
    $.__views.__alloyId15225.add($.__views.__alloyId15226);
    $.__views.__alloyId15227 = Ti.UI.createView({
        id: "__alloyId15227"
    });
    $.__views.__alloyId15227 && $.addTopLevelView($.__views.__alloyId15227);
    $.__views.__alloyId15228 = Ti.UI.createView({
        id: "__alloyId15228"
    });
    $.__views.__alloyId15227.add($.__views.__alloyId15228);
    $.__views.__alloyId15229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15229"
    });
    $.__views.__alloyId15228.add($.__views.__alloyId15229);
    $.__views.__alloyId15230 = Ti.UI.createView({
        id: "__alloyId15230"
    });
    $.__views.__alloyId15230 && $.addTopLevelView($.__views.__alloyId15230);
    $.__views.__alloyId15231 = Ti.UI.createView({
        id: "__alloyId15231"
    });
    $.__views.__alloyId15230.add($.__views.__alloyId15231);
    $.__views.__alloyId15232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15232"
    });
    $.__views.__alloyId15231.add($.__views.__alloyId15232);
    $.__views.__alloyId15233 = Ti.UI.createView({
        id: "__alloyId15233"
    });
    $.__views.__alloyId15233 && $.addTopLevelView($.__views.__alloyId15233);
    $.__views.__alloyId15234 = Ti.UI.createView({
        id: "__alloyId15234"
    });
    $.__views.__alloyId15233.add($.__views.__alloyId15234);
    $.__views.__alloyId15235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15235"
    });
    $.__views.__alloyId15234.add($.__views.__alloyId15235);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;