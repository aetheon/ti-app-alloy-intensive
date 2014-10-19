function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_900";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_900 = Ti.UI.createView({
        id: "widget_900"
    });
    $.__views.widget_900 && $.addTopLevelView($.__views.widget_900);
    $.__views.__alloyId23192 = Ti.UI.createView({
        id: "__alloyId23192"
    });
    $.__views.widget_900.add($.__views.__alloyId23192);
    $.__views.__alloyId23193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23193"
    });
    $.__views.__alloyId23192.add($.__views.__alloyId23193);
    $.__views.__alloyId23194 = Ti.UI.createView({
        id: "__alloyId23194"
    });
    $.__views.__alloyId23194 && $.addTopLevelView($.__views.__alloyId23194);
    $.__views.__alloyId23195 = Ti.UI.createView({
        id: "__alloyId23195"
    });
    $.__views.__alloyId23194.add($.__views.__alloyId23195);
    $.__views.__alloyId23196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23196"
    });
    $.__views.__alloyId23195.add($.__views.__alloyId23196);
    $.__views.__alloyId23197 = Ti.UI.createView({
        id: "__alloyId23197"
    });
    $.__views.__alloyId23197 && $.addTopLevelView($.__views.__alloyId23197);
    $.__views.__alloyId23198 = Ti.UI.createView({
        id: "__alloyId23198"
    });
    $.__views.__alloyId23197.add($.__views.__alloyId23198);
    $.__views.__alloyId23199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23199"
    });
    $.__views.__alloyId23198.add($.__views.__alloyId23199);
    $.__views.__alloyId23200 = Ti.UI.createView({
        id: "__alloyId23200"
    });
    $.__views.__alloyId23200 && $.addTopLevelView($.__views.__alloyId23200);
    $.__views.__alloyId23201 = Ti.UI.createView({
        id: "__alloyId23201"
    });
    $.__views.__alloyId23200.add($.__views.__alloyId23201);
    $.__views.__alloyId23202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23202"
    });
    $.__views.__alloyId23201.add($.__views.__alloyId23202);
    $.__views.__alloyId23203 = Ti.UI.createView({
        id: "__alloyId23203"
    });
    $.__views.__alloyId23203 && $.addTopLevelView($.__views.__alloyId23203);
    $.__views.__alloyId23204 = Ti.UI.createView({
        id: "__alloyId23204"
    });
    $.__views.__alloyId23203.add($.__views.__alloyId23204);
    $.__views.__alloyId23205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23205"
    });
    $.__views.__alloyId23204.add($.__views.__alloyId23205);
    $.__views.__alloyId23206 = Ti.UI.createView({
        id: "__alloyId23206"
    });
    $.__views.__alloyId23206 && $.addTopLevelView($.__views.__alloyId23206);
    $.__views.__alloyId23207 = Ti.UI.createView({
        id: "__alloyId23207"
    });
    $.__views.__alloyId23206.add($.__views.__alloyId23207);
    $.__views.__alloyId23208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23208"
    });
    $.__views.__alloyId23207.add($.__views.__alloyId23208);
    $.__views.__alloyId23209 = Ti.UI.createView({
        id: "__alloyId23209"
    });
    $.__views.__alloyId23209 && $.addTopLevelView($.__views.__alloyId23209);
    $.__views.__alloyId23210 = Ti.UI.createView({
        id: "__alloyId23210"
    });
    $.__views.__alloyId23209.add($.__views.__alloyId23210);
    $.__views.__alloyId23211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23211"
    });
    $.__views.__alloyId23210.add($.__views.__alloyId23211);
    $.__views.__alloyId23212 = Ti.UI.createView({
        id: "__alloyId23212"
    });
    $.__views.__alloyId23212 && $.addTopLevelView($.__views.__alloyId23212);
    $.__views.__alloyId23213 = Ti.UI.createView({
        id: "__alloyId23213"
    });
    $.__views.__alloyId23212.add($.__views.__alloyId23213);
    $.__views.__alloyId23214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23214"
    });
    $.__views.__alloyId23213.add($.__views.__alloyId23214);
    $.__views.__alloyId23215 = Ti.UI.createView({
        id: "__alloyId23215"
    });
    $.__views.__alloyId23215 && $.addTopLevelView($.__views.__alloyId23215);
    $.__views.__alloyId23216 = Ti.UI.createView({
        id: "__alloyId23216"
    });
    $.__views.__alloyId23215.add($.__views.__alloyId23216);
    $.__views.__alloyId23217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23217"
    });
    $.__views.__alloyId23216.add($.__views.__alloyId23217);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;