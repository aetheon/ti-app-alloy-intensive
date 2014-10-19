function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_346";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_346 = Ti.UI.createView({
        id: "widget_346"
    });
    $.__views.widget_346 && $.addTopLevelView($.__views.widget_346);
    $.__views.__alloyId7176 = Ti.UI.createView({
        id: "__alloyId7176"
    });
    $.__views.widget_346.add($.__views.__alloyId7176);
    $.__views.__alloyId7177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7177"
    });
    $.__views.__alloyId7176.add($.__views.__alloyId7177);
    $.__views.__alloyId7178 = Ti.UI.createView({
        id: "__alloyId7178"
    });
    $.__views.__alloyId7178 && $.addTopLevelView($.__views.__alloyId7178);
    $.__views.__alloyId7179 = Ti.UI.createView({
        id: "__alloyId7179"
    });
    $.__views.__alloyId7178.add($.__views.__alloyId7179);
    $.__views.__alloyId7180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7180"
    });
    $.__views.__alloyId7179.add($.__views.__alloyId7180);
    $.__views.__alloyId7181 = Ti.UI.createView({
        id: "__alloyId7181"
    });
    $.__views.__alloyId7181 && $.addTopLevelView($.__views.__alloyId7181);
    $.__views.__alloyId7182 = Ti.UI.createView({
        id: "__alloyId7182"
    });
    $.__views.__alloyId7181.add($.__views.__alloyId7182);
    $.__views.__alloyId7183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7183"
    });
    $.__views.__alloyId7182.add($.__views.__alloyId7183);
    $.__views.__alloyId7184 = Ti.UI.createView({
        id: "__alloyId7184"
    });
    $.__views.__alloyId7184 && $.addTopLevelView($.__views.__alloyId7184);
    $.__views.__alloyId7185 = Ti.UI.createView({
        id: "__alloyId7185"
    });
    $.__views.__alloyId7184.add($.__views.__alloyId7185);
    $.__views.__alloyId7186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7186"
    });
    $.__views.__alloyId7185.add($.__views.__alloyId7186);
    $.__views.__alloyId7187 = Ti.UI.createView({
        id: "__alloyId7187"
    });
    $.__views.__alloyId7187 && $.addTopLevelView($.__views.__alloyId7187);
    $.__views.__alloyId7188 = Ti.UI.createView({
        id: "__alloyId7188"
    });
    $.__views.__alloyId7187.add($.__views.__alloyId7188);
    $.__views.__alloyId7189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7189"
    });
    $.__views.__alloyId7188.add($.__views.__alloyId7189);
    $.__views.__alloyId7190 = Ti.UI.createView({
        id: "__alloyId7190"
    });
    $.__views.__alloyId7190 && $.addTopLevelView($.__views.__alloyId7190);
    $.__views.__alloyId7191 = Ti.UI.createView({
        id: "__alloyId7191"
    });
    $.__views.__alloyId7190.add($.__views.__alloyId7191);
    $.__views.__alloyId7192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7192"
    });
    $.__views.__alloyId7191.add($.__views.__alloyId7192);
    $.__views.__alloyId7193 = Ti.UI.createView({
        id: "__alloyId7193"
    });
    $.__views.__alloyId7193 && $.addTopLevelView($.__views.__alloyId7193);
    $.__views.__alloyId7194 = Ti.UI.createView({
        id: "__alloyId7194"
    });
    $.__views.__alloyId7193.add($.__views.__alloyId7194);
    $.__views.__alloyId7195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7195"
    });
    $.__views.__alloyId7194.add($.__views.__alloyId7195);
    $.__views.__alloyId7196 = Ti.UI.createView({
        id: "__alloyId7196"
    });
    $.__views.__alloyId7196 && $.addTopLevelView($.__views.__alloyId7196);
    $.__views.__alloyId7197 = Ti.UI.createView({
        id: "__alloyId7197"
    });
    $.__views.__alloyId7196.add($.__views.__alloyId7197);
    $.__views.__alloyId7198 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7198"
    });
    $.__views.__alloyId7197.add($.__views.__alloyId7198);
    $.__views.__alloyId7199 = Ti.UI.createView({
        id: "__alloyId7199"
    });
    $.__views.__alloyId7199 && $.addTopLevelView($.__views.__alloyId7199);
    $.__views.__alloyId7200 = Ti.UI.createView({
        id: "__alloyId7200"
    });
    $.__views.__alloyId7199.add($.__views.__alloyId7200);
    $.__views.__alloyId7201 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7201"
    });
    $.__views.__alloyId7200.add($.__views.__alloyId7201);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;