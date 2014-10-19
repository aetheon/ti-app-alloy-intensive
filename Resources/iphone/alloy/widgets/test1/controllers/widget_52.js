function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_52";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_52 = Ti.UI.createView({
        id: "widget_52"
    });
    $.__views.widget_52 && $.addTopLevelView($.__views.widget_52);
    $.__views.__alloyId12194 = Ti.UI.createView({
        id: "__alloyId12194"
    });
    $.__views.widget_52.add($.__views.__alloyId12194);
    $.__views.__alloyId12195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12195"
    });
    $.__views.__alloyId12194.add($.__views.__alloyId12195);
    $.__views.__alloyId12196 = Ti.UI.createView({
        id: "__alloyId12196"
    });
    $.__views.__alloyId12196 && $.addTopLevelView($.__views.__alloyId12196);
    $.__views.__alloyId12197 = Ti.UI.createView({
        id: "__alloyId12197"
    });
    $.__views.__alloyId12196.add($.__views.__alloyId12197);
    $.__views.__alloyId12198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12198"
    });
    $.__views.__alloyId12197.add($.__views.__alloyId12198);
    $.__views.__alloyId12199 = Ti.UI.createView({
        id: "__alloyId12199"
    });
    $.__views.__alloyId12199 && $.addTopLevelView($.__views.__alloyId12199);
    $.__views.__alloyId12200 = Ti.UI.createView({
        id: "__alloyId12200"
    });
    $.__views.__alloyId12199.add($.__views.__alloyId12200);
    $.__views.__alloyId12201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12201"
    });
    $.__views.__alloyId12200.add($.__views.__alloyId12201);
    $.__views.__alloyId12202 = Ti.UI.createView({
        id: "__alloyId12202"
    });
    $.__views.__alloyId12202 && $.addTopLevelView($.__views.__alloyId12202);
    $.__views.__alloyId12203 = Ti.UI.createView({
        id: "__alloyId12203"
    });
    $.__views.__alloyId12202.add($.__views.__alloyId12203);
    $.__views.__alloyId12204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12204"
    });
    $.__views.__alloyId12203.add($.__views.__alloyId12204);
    $.__views.__alloyId12205 = Ti.UI.createView({
        id: "__alloyId12205"
    });
    $.__views.__alloyId12205 && $.addTopLevelView($.__views.__alloyId12205);
    $.__views.__alloyId12206 = Ti.UI.createView({
        id: "__alloyId12206"
    });
    $.__views.__alloyId12205.add($.__views.__alloyId12206);
    $.__views.__alloyId12207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12207"
    });
    $.__views.__alloyId12206.add($.__views.__alloyId12207);
    $.__views.__alloyId12208 = Ti.UI.createView({
        id: "__alloyId12208"
    });
    $.__views.__alloyId12208 && $.addTopLevelView($.__views.__alloyId12208);
    $.__views.__alloyId12209 = Ti.UI.createView({
        id: "__alloyId12209"
    });
    $.__views.__alloyId12208.add($.__views.__alloyId12209);
    $.__views.__alloyId12210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12210"
    });
    $.__views.__alloyId12209.add($.__views.__alloyId12210);
    $.__views.__alloyId12211 = Ti.UI.createView({
        id: "__alloyId12211"
    });
    $.__views.__alloyId12211 && $.addTopLevelView($.__views.__alloyId12211);
    $.__views.__alloyId12212 = Ti.UI.createView({
        id: "__alloyId12212"
    });
    $.__views.__alloyId12211.add($.__views.__alloyId12212);
    $.__views.__alloyId12213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12213"
    });
    $.__views.__alloyId12212.add($.__views.__alloyId12213);
    $.__views.__alloyId12214 = Ti.UI.createView({
        id: "__alloyId12214"
    });
    $.__views.__alloyId12214 && $.addTopLevelView($.__views.__alloyId12214);
    $.__views.__alloyId12215 = Ti.UI.createView({
        id: "__alloyId12215"
    });
    $.__views.__alloyId12214.add($.__views.__alloyId12215);
    $.__views.__alloyId12216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12216"
    });
    $.__views.__alloyId12215.add($.__views.__alloyId12216);
    $.__views.__alloyId12217 = Ti.UI.createView({
        id: "__alloyId12217"
    });
    $.__views.__alloyId12217 && $.addTopLevelView($.__views.__alloyId12217);
    $.__views.__alloyId12218 = Ti.UI.createView({
        id: "__alloyId12218"
    });
    $.__views.__alloyId12217.add($.__views.__alloyId12218);
    $.__views.__alloyId12219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12219"
    });
    $.__views.__alloyId12218.add($.__views.__alloyId12219);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;