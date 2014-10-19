function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_727";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_727 = Ti.UI.createView({
        id: "widget_727"
    });
    $.__views.widget_727 && $.addTopLevelView($.__views.widget_727);
    $.__views.__alloyId18174 = Ti.UI.createView({
        id: "__alloyId18174"
    });
    $.__views.widget_727.add($.__views.__alloyId18174);
    $.__views.__alloyId18175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18175"
    });
    $.__views.__alloyId18174.add($.__views.__alloyId18175);
    $.__views.__alloyId18176 = Ti.UI.createView({
        id: "__alloyId18176"
    });
    $.__views.__alloyId18176 && $.addTopLevelView($.__views.__alloyId18176);
    $.__views.__alloyId18177 = Ti.UI.createView({
        id: "__alloyId18177"
    });
    $.__views.__alloyId18176.add($.__views.__alloyId18177);
    $.__views.__alloyId18178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18178"
    });
    $.__views.__alloyId18177.add($.__views.__alloyId18178);
    $.__views.__alloyId18179 = Ti.UI.createView({
        id: "__alloyId18179"
    });
    $.__views.__alloyId18179 && $.addTopLevelView($.__views.__alloyId18179);
    $.__views.__alloyId18180 = Ti.UI.createView({
        id: "__alloyId18180"
    });
    $.__views.__alloyId18179.add($.__views.__alloyId18180);
    $.__views.__alloyId18181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18181"
    });
    $.__views.__alloyId18180.add($.__views.__alloyId18181);
    $.__views.__alloyId18182 = Ti.UI.createView({
        id: "__alloyId18182"
    });
    $.__views.__alloyId18182 && $.addTopLevelView($.__views.__alloyId18182);
    $.__views.__alloyId18183 = Ti.UI.createView({
        id: "__alloyId18183"
    });
    $.__views.__alloyId18182.add($.__views.__alloyId18183);
    $.__views.__alloyId18184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18184"
    });
    $.__views.__alloyId18183.add($.__views.__alloyId18184);
    $.__views.__alloyId18185 = Ti.UI.createView({
        id: "__alloyId18185"
    });
    $.__views.__alloyId18185 && $.addTopLevelView($.__views.__alloyId18185);
    $.__views.__alloyId18186 = Ti.UI.createView({
        id: "__alloyId18186"
    });
    $.__views.__alloyId18185.add($.__views.__alloyId18186);
    $.__views.__alloyId18187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18187"
    });
    $.__views.__alloyId18186.add($.__views.__alloyId18187);
    $.__views.__alloyId18188 = Ti.UI.createView({
        id: "__alloyId18188"
    });
    $.__views.__alloyId18188 && $.addTopLevelView($.__views.__alloyId18188);
    $.__views.__alloyId18189 = Ti.UI.createView({
        id: "__alloyId18189"
    });
    $.__views.__alloyId18188.add($.__views.__alloyId18189);
    $.__views.__alloyId18190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18190"
    });
    $.__views.__alloyId18189.add($.__views.__alloyId18190);
    $.__views.__alloyId18191 = Ti.UI.createView({
        id: "__alloyId18191"
    });
    $.__views.__alloyId18191 && $.addTopLevelView($.__views.__alloyId18191);
    $.__views.__alloyId18192 = Ti.UI.createView({
        id: "__alloyId18192"
    });
    $.__views.__alloyId18191.add($.__views.__alloyId18192);
    $.__views.__alloyId18193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18193"
    });
    $.__views.__alloyId18192.add($.__views.__alloyId18193);
    $.__views.__alloyId18194 = Ti.UI.createView({
        id: "__alloyId18194"
    });
    $.__views.__alloyId18194 && $.addTopLevelView($.__views.__alloyId18194);
    $.__views.__alloyId18195 = Ti.UI.createView({
        id: "__alloyId18195"
    });
    $.__views.__alloyId18194.add($.__views.__alloyId18195);
    $.__views.__alloyId18196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18196"
    });
    $.__views.__alloyId18195.add($.__views.__alloyId18196);
    $.__views.__alloyId18197 = Ti.UI.createView({
        id: "__alloyId18197"
    });
    $.__views.__alloyId18197 && $.addTopLevelView($.__views.__alloyId18197);
    $.__views.__alloyId18198 = Ti.UI.createView({
        id: "__alloyId18198"
    });
    $.__views.__alloyId18197.add($.__views.__alloyId18198);
    $.__views.__alloyId18199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18199"
    });
    $.__views.__alloyId18198.add($.__views.__alloyId18199);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;