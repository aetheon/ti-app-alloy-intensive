function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_208";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_208 = Ti.UI.createView({
        id: "widget_208"
    });
    $.__views.widget_208 && $.addTopLevelView($.__views.widget_208);
    $.__views.__alloyId3198 = Ti.UI.createView({
        id: "__alloyId3198"
    });
    $.__views.widget_208.add($.__views.__alloyId3198);
    $.__views.__alloyId3199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3199"
    });
    $.__views.__alloyId3198.add($.__views.__alloyId3199);
    $.__views.__alloyId3200 = Ti.UI.createView({
        id: "__alloyId3200"
    });
    $.__views.__alloyId3200 && $.addTopLevelView($.__views.__alloyId3200);
    $.__views.__alloyId3201 = Ti.UI.createView({
        id: "__alloyId3201"
    });
    $.__views.__alloyId3200.add($.__views.__alloyId3201);
    $.__views.__alloyId3202 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3202"
    });
    $.__views.__alloyId3201.add($.__views.__alloyId3202);
    $.__views.__alloyId3203 = Ti.UI.createView({
        id: "__alloyId3203"
    });
    $.__views.__alloyId3203 && $.addTopLevelView($.__views.__alloyId3203);
    $.__views.__alloyId3204 = Ti.UI.createView({
        id: "__alloyId3204"
    });
    $.__views.__alloyId3203.add($.__views.__alloyId3204);
    $.__views.__alloyId3205 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3205"
    });
    $.__views.__alloyId3204.add($.__views.__alloyId3205);
    $.__views.__alloyId3206 = Ti.UI.createView({
        id: "__alloyId3206"
    });
    $.__views.__alloyId3206 && $.addTopLevelView($.__views.__alloyId3206);
    $.__views.__alloyId3207 = Ti.UI.createView({
        id: "__alloyId3207"
    });
    $.__views.__alloyId3206.add($.__views.__alloyId3207);
    $.__views.__alloyId3208 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3208"
    });
    $.__views.__alloyId3207.add($.__views.__alloyId3208);
    $.__views.__alloyId3209 = Ti.UI.createView({
        id: "__alloyId3209"
    });
    $.__views.__alloyId3209 && $.addTopLevelView($.__views.__alloyId3209);
    $.__views.__alloyId3210 = Ti.UI.createView({
        id: "__alloyId3210"
    });
    $.__views.__alloyId3209.add($.__views.__alloyId3210);
    $.__views.__alloyId3211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3211"
    });
    $.__views.__alloyId3210.add($.__views.__alloyId3211);
    $.__views.__alloyId3212 = Ti.UI.createView({
        id: "__alloyId3212"
    });
    $.__views.__alloyId3212 && $.addTopLevelView($.__views.__alloyId3212);
    $.__views.__alloyId3213 = Ti.UI.createView({
        id: "__alloyId3213"
    });
    $.__views.__alloyId3212.add($.__views.__alloyId3213);
    $.__views.__alloyId3214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3214"
    });
    $.__views.__alloyId3213.add($.__views.__alloyId3214);
    $.__views.__alloyId3215 = Ti.UI.createView({
        id: "__alloyId3215"
    });
    $.__views.__alloyId3215 && $.addTopLevelView($.__views.__alloyId3215);
    $.__views.__alloyId3216 = Ti.UI.createView({
        id: "__alloyId3216"
    });
    $.__views.__alloyId3215.add($.__views.__alloyId3216);
    $.__views.__alloyId3217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3217"
    });
    $.__views.__alloyId3216.add($.__views.__alloyId3217);
    $.__views.__alloyId3218 = Ti.UI.createView({
        id: "__alloyId3218"
    });
    $.__views.__alloyId3218 && $.addTopLevelView($.__views.__alloyId3218);
    $.__views.__alloyId3219 = Ti.UI.createView({
        id: "__alloyId3219"
    });
    $.__views.__alloyId3218.add($.__views.__alloyId3219);
    $.__views.__alloyId3220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3220"
    });
    $.__views.__alloyId3219.add($.__views.__alloyId3220);
    $.__views.__alloyId3221 = Ti.UI.createView({
        id: "__alloyId3221"
    });
    $.__views.__alloyId3221 && $.addTopLevelView($.__views.__alloyId3221);
    $.__views.__alloyId3222 = Ti.UI.createView({
        id: "__alloyId3222"
    });
    $.__views.__alloyId3221.add($.__views.__alloyId3222);
    $.__views.__alloyId3223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3223"
    });
    $.__views.__alloyId3222.add($.__views.__alloyId3223);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;