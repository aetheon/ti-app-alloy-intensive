function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_519";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_519 = Ti.UI.createView({
        id: "widget_519"
    });
    $.__views.widget_519 && $.addTopLevelView($.__views.widget_519);
    $.__views.__alloyId12168 = Ti.UI.createView({
        id: "__alloyId12168"
    });
    $.__views.widget_519.add($.__views.__alloyId12168);
    $.__views.__alloyId12169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12169"
    });
    $.__views.__alloyId12168.add($.__views.__alloyId12169);
    $.__views.__alloyId12170 = Ti.UI.createView({
        id: "__alloyId12170"
    });
    $.__views.__alloyId12170 && $.addTopLevelView($.__views.__alloyId12170);
    $.__views.__alloyId12171 = Ti.UI.createView({
        id: "__alloyId12171"
    });
    $.__views.__alloyId12170.add($.__views.__alloyId12171);
    $.__views.__alloyId12172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12172"
    });
    $.__views.__alloyId12171.add($.__views.__alloyId12172);
    $.__views.__alloyId12173 = Ti.UI.createView({
        id: "__alloyId12173"
    });
    $.__views.__alloyId12173 && $.addTopLevelView($.__views.__alloyId12173);
    $.__views.__alloyId12174 = Ti.UI.createView({
        id: "__alloyId12174"
    });
    $.__views.__alloyId12173.add($.__views.__alloyId12174);
    $.__views.__alloyId12175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12175"
    });
    $.__views.__alloyId12174.add($.__views.__alloyId12175);
    $.__views.__alloyId12176 = Ti.UI.createView({
        id: "__alloyId12176"
    });
    $.__views.__alloyId12176 && $.addTopLevelView($.__views.__alloyId12176);
    $.__views.__alloyId12177 = Ti.UI.createView({
        id: "__alloyId12177"
    });
    $.__views.__alloyId12176.add($.__views.__alloyId12177);
    $.__views.__alloyId12178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12178"
    });
    $.__views.__alloyId12177.add($.__views.__alloyId12178);
    $.__views.__alloyId12179 = Ti.UI.createView({
        id: "__alloyId12179"
    });
    $.__views.__alloyId12179 && $.addTopLevelView($.__views.__alloyId12179);
    $.__views.__alloyId12180 = Ti.UI.createView({
        id: "__alloyId12180"
    });
    $.__views.__alloyId12179.add($.__views.__alloyId12180);
    $.__views.__alloyId12181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12181"
    });
    $.__views.__alloyId12180.add($.__views.__alloyId12181);
    $.__views.__alloyId12182 = Ti.UI.createView({
        id: "__alloyId12182"
    });
    $.__views.__alloyId12182 && $.addTopLevelView($.__views.__alloyId12182);
    $.__views.__alloyId12183 = Ti.UI.createView({
        id: "__alloyId12183"
    });
    $.__views.__alloyId12182.add($.__views.__alloyId12183);
    $.__views.__alloyId12184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12184"
    });
    $.__views.__alloyId12183.add($.__views.__alloyId12184);
    $.__views.__alloyId12185 = Ti.UI.createView({
        id: "__alloyId12185"
    });
    $.__views.__alloyId12185 && $.addTopLevelView($.__views.__alloyId12185);
    $.__views.__alloyId12186 = Ti.UI.createView({
        id: "__alloyId12186"
    });
    $.__views.__alloyId12185.add($.__views.__alloyId12186);
    $.__views.__alloyId12187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12187"
    });
    $.__views.__alloyId12186.add($.__views.__alloyId12187);
    $.__views.__alloyId12188 = Ti.UI.createView({
        id: "__alloyId12188"
    });
    $.__views.__alloyId12188 && $.addTopLevelView($.__views.__alloyId12188);
    $.__views.__alloyId12189 = Ti.UI.createView({
        id: "__alloyId12189"
    });
    $.__views.__alloyId12188.add($.__views.__alloyId12189);
    $.__views.__alloyId12190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12190"
    });
    $.__views.__alloyId12189.add($.__views.__alloyId12190);
    $.__views.__alloyId12191 = Ti.UI.createView({
        id: "__alloyId12191"
    });
    $.__views.__alloyId12191 && $.addTopLevelView($.__views.__alloyId12191);
    $.__views.__alloyId12192 = Ti.UI.createView({
        id: "__alloyId12192"
    });
    $.__views.__alloyId12191.add($.__views.__alloyId12192);
    $.__views.__alloyId12193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12193"
    });
    $.__views.__alloyId12192.add($.__views.__alloyId12193);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;