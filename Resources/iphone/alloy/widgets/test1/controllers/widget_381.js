function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_381";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_381 = Ti.UI.createView({
        id: "widget_381"
    });
    $.__views.widget_381 && $.addTopLevelView($.__views.widget_381);
    $.__views.__alloyId8190 = Ti.UI.createView({
        id: "__alloyId8190"
    });
    $.__views.widget_381.add($.__views.__alloyId8190);
    $.__views.__alloyId8191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8191"
    });
    $.__views.__alloyId8190.add($.__views.__alloyId8191);
    $.__views.__alloyId8192 = Ti.UI.createView({
        id: "__alloyId8192"
    });
    $.__views.__alloyId8192 && $.addTopLevelView($.__views.__alloyId8192);
    $.__views.__alloyId8193 = Ti.UI.createView({
        id: "__alloyId8193"
    });
    $.__views.__alloyId8192.add($.__views.__alloyId8193);
    $.__views.__alloyId8194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8194"
    });
    $.__views.__alloyId8193.add($.__views.__alloyId8194);
    $.__views.__alloyId8195 = Ti.UI.createView({
        id: "__alloyId8195"
    });
    $.__views.__alloyId8195 && $.addTopLevelView($.__views.__alloyId8195);
    $.__views.__alloyId8196 = Ti.UI.createView({
        id: "__alloyId8196"
    });
    $.__views.__alloyId8195.add($.__views.__alloyId8196);
    $.__views.__alloyId8197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8197"
    });
    $.__views.__alloyId8196.add($.__views.__alloyId8197);
    $.__views.__alloyId8198 = Ti.UI.createView({
        id: "__alloyId8198"
    });
    $.__views.__alloyId8198 && $.addTopLevelView($.__views.__alloyId8198);
    $.__views.__alloyId8199 = Ti.UI.createView({
        id: "__alloyId8199"
    });
    $.__views.__alloyId8198.add($.__views.__alloyId8199);
    $.__views.__alloyId8200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8200"
    });
    $.__views.__alloyId8199.add($.__views.__alloyId8200);
    $.__views.__alloyId8201 = Ti.UI.createView({
        id: "__alloyId8201"
    });
    $.__views.__alloyId8201 && $.addTopLevelView($.__views.__alloyId8201);
    $.__views.__alloyId8202 = Ti.UI.createView({
        id: "__alloyId8202"
    });
    $.__views.__alloyId8201.add($.__views.__alloyId8202);
    $.__views.__alloyId8203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8203"
    });
    $.__views.__alloyId8202.add($.__views.__alloyId8203);
    $.__views.__alloyId8204 = Ti.UI.createView({
        id: "__alloyId8204"
    });
    $.__views.__alloyId8204 && $.addTopLevelView($.__views.__alloyId8204);
    $.__views.__alloyId8205 = Ti.UI.createView({
        id: "__alloyId8205"
    });
    $.__views.__alloyId8204.add($.__views.__alloyId8205);
    $.__views.__alloyId8206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8206"
    });
    $.__views.__alloyId8205.add($.__views.__alloyId8206);
    $.__views.__alloyId8207 = Ti.UI.createView({
        id: "__alloyId8207"
    });
    $.__views.__alloyId8207 && $.addTopLevelView($.__views.__alloyId8207);
    $.__views.__alloyId8208 = Ti.UI.createView({
        id: "__alloyId8208"
    });
    $.__views.__alloyId8207.add($.__views.__alloyId8208);
    $.__views.__alloyId8209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8209"
    });
    $.__views.__alloyId8208.add($.__views.__alloyId8209);
    $.__views.__alloyId8210 = Ti.UI.createView({
        id: "__alloyId8210"
    });
    $.__views.__alloyId8210 && $.addTopLevelView($.__views.__alloyId8210);
    $.__views.__alloyId8211 = Ti.UI.createView({
        id: "__alloyId8211"
    });
    $.__views.__alloyId8210.add($.__views.__alloyId8211);
    $.__views.__alloyId8212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8212"
    });
    $.__views.__alloyId8211.add($.__views.__alloyId8212);
    $.__views.__alloyId8213 = Ti.UI.createView({
        id: "__alloyId8213"
    });
    $.__views.__alloyId8213 && $.addTopLevelView($.__views.__alloyId8213);
    $.__views.__alloyId8214 = Ti.UI.createView({
        id: "__alloyId8214"
    });
    $.__views.__alloyId8213.add($.__views.__alloyId8214);
    $.__views.__alloyId8215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8215"
    });
    $.__views.__alloyId8214.add($.__views.__alloyId8215);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;