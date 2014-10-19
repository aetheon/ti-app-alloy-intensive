function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_311";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_311 = Ti.UI.createView({
        id: "widget_311"
    });
    $.__views.widget_311 && $.addTopLevelView($.__views.widget_311);
    $.__views.__alloyId6188 = Ti.UI.createView({
        id: "__alloyId6188"
    });
    $.__views.widget_311.add($.__views.__alloyId6188);
    $.__views.__alloyId6189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6189"
    });
    $.__views.__alloyId6188.add($.__views.__alloyId6189);
    $.__views.__alloyId6190 = Ti.UI.createView({
        id: "__alloyId6190"
    });
    $.__views.__alloyId6190 && $.addTopLevelView($.__views.__alloyId6190);
    $.__views.__alloyId6191 = Ti.UI.createView({
        id: "__alloyId6191"
    });
    $.__views.__alloyId6190.add($.__views.__alloyId6191);
    $.__views.__alloyId6192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6192"
    });
    $.__views.__alloyId6191.add($.__views.__alloyId6192);
    $.__views.__alloyId6193 = Ti.UI.createView({
        id: "__alloyId6193"
    });
    $.__views.__alloyId6193 && $.addTopLevelView($.__views.__alloyId6193);
    $.__views.__alloyId6194 = Ti.UI.createView({
        id: "__alloyId6194"
    });
    $.__views.__alloyId6193.add($.__views.__alloyId6194);
    $.__views.__alloyId6195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6195"
    });
    $.__views.__alloyId6194.add($.__views.__alloyId6195);
    $.__views.__alloyId6196 = Ti.UI.createView({
        id: "__alloyId6196"
    });
    $.__views.__alloyId6196 && $.addTopLevelView($.__views.__alloyId6196);
    $.__views.__alloyId6197 = Ti.UI.createView({
        id: "__alloyId6197"
    });
    $.__views.__alloyId6196.add($.__views.__alloyId6197);
    $.__views.__alloyId6198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6198"
    });
    $.__views.__alloyId6197.add($.__views.__alloyId6198);
    $.__views.__alloyId6199 = Ti.UI.createView({
        id: "__alloyId6199"
    });
    $.__views.__alloyId6199 && $.addTopLevelView($.__views.__alloyId6199);
    $.__views.__alloyId6200 = Ti.UI.createView({
        id: "__alloyId6200"
    });
    $.__views.__alloyId6199.add($.__views.__alloyId6200);
    $.__views.__alloyId6201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6201"
    });
    $.__views.__alloyId6200.add($.__views.__alloyId6201);
    $.__views.__alloyId6202 = Ti.UI.createView({
        id: "__alloyId6202"
    });
    $.__views.__alloyId6202 && $.addTopLevelView($.__views.__alloyId6202);
    $.__views.__alloyId6203 = Ti.UI.createView({
        id: "__alloyId6203"
    });
    $.__views.__alloyId6202.add($.__views.__alloyId6203);
    $.__views.__alloyId6204 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6204"
    });
    $.__views.__alloyId6203.add($.__views.__alloyId6204);
    $.__views.__alloyId6205 = Ti.UI.createView({
        id: "__alloyId6205"
    });
    $.__views.__alloyId6205 && $.addTopLevelView($.__views.__alloyId6205);
    $.__views.__alloyId6206 = Ti.UI.createView({
        id: "__alloyId6206"
    });
    $.__views.__alloyId6205.add($.__views.__alloyId6206);
    $.__views.__alloyId6207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6207"
    });
    $.__views.__alloyId6206.add($.__views.__alloyId6207);
    $.__views.__alloyId6208 = Ti.UI.createView({
        id: "__alloyId6208"
    });
    $.__views.__alloyId6208 && $.addTopLevelView($.__views.__alloyId6208);
    $.__views.__alloyId6209 = Ti.UI.createView({
        id: "__alloyId6209"
    });
    $.__views.__alloyId6208.add($.__views.__alloyId6209);
    $.__views.__alloyId6210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6210"
    });
    $.__views.__alloyId6209.add($.__views.__alloyId6210);
    $.__views.__alloyId6211 = Ti.UI.createView({
        id: "__alloyId6211"
    });
    $.__views.__alloyId6211 && $.addTopLevelView($.__views.__alloyId6211);
    $.__views.__alloyId6212 = Ti.UI.createView({
        id: "__alloyId6212"
    });
    $.__views.__alloyId6211.add($.__views.__alloyId6212);
    $.__views.__alloyId6213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6213"
    });
    $.__views.__alloyId6212.add($.__views.__alloyId6213);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;