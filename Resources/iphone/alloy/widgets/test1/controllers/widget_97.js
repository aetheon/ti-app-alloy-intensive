function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_97";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_97 = Ti.UI.createView({
        id: "widget_97"
    });
    $.__views.widget_97 && $.addTopLevelView($.__views.widget_97);
    $.__views.__alloyId25168 = Ti.UI.createView({
        id: "__alloyId25168"
    });
    $.__views.widget_97.add($.__views.__alloyId25168);
    $.__views.__alloyId25169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25169"
    });
    $.__views.__alloyId25168.add($.__views.__alloyId25169);
    $.__views.__alloyId25170 = Ti.UI.createView({
        id: "__alloyId25170"
    });
    $.__views.__alloyId25170 && $.addTopLevelView($.__views.__alloyId25170);
    $.__views.__alloyId25171 = Ti.UI.createView({
        id: "__alloyId25171"
    });
    $.__views.__alloyId25170.add($.__views.__alloyId25171);
    $.__views.__alloyId25172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25172"
    });
    $.__views.__alloyId25171.add($.__views.__alloyId25172);
    $.__views.__alloyId25173 = Ti.UI.createView({
        id: "__alloyId25173"
    });
    $.__views.__alloyId25173 && $.addTopLevelView($.__views.__alloyId25173);
    $.__views.__alloyId25174 = Ti.UI.createView({
        id: "__alloyId25174"
    });
    $.__views.__alloyId25173.add($.__views.__alloyId25174);
    $.__views.__alloyId25175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25175"
    });
    $.__views.__alloyId25174.add($.__views.__alloyId25175);
    $.__views.__alloyId25176 = Ti.UI.createView({
        id: "__alloyId25176"
    });
    $.__views.__alloyId25176 && $.addTopLevelView($.__views.__alloyId25176);
    $.__views.__alloyId25177 = Ti.UI.createView({
        id: "__alloyId25177"
    });
    $.__views.__alloyId25176.add($.__views.__alloyId25177);
    $.__views.__alloyId25178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25178"
    });
    $.__views.__alloyId25177.add($.__views.__alloyId25178);
    $.__views.__alloyId25179 = Ti.UI.createView({
        id: "__alloyId25179"
    });
    $.__views.__alloyId25179 && $.addTopLevelView($.__views.__alloyId25179);
    $.__views.__alloyId25180 = Ti.UI.createView({
        id: "__alloyId25180"
    });
    $.__views.__alloyId25179.add($.__views.__alloyId25180);
    $.__views.__alloyId25181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25181"
    });
    $.__views.__alloyId25180.add($.__views.__alloyId25181);
    $.__views.__alloyId25182 = Ti.UI.createView({
        id: "__alloyId25182"
    });
    $.__views.__alloyId25182 && $.addTopLevelView($.__views.__alloyId25182);
    $.__views.__alloyId25183 = Ti.UI.createView({
        id: "__alloyId25183"
    });
    $.__views.__alloyId25182.add($.__views.__alloyId25183);
    $.__views.__alloyId25184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25184"
    });
    $.__views.__alloyId25183.add($.__views.__alloyId25184);
    $.__views.__alloyId25185 = Ti.UI.createView({
        id: "__alloyId25185"
    });
    $.__views.__alloyId25185 && $.addTopLevelView($.__views.__alloyId25185);
    $.__views.__alloyId25186 = Ti.UI.createView({
        id: "__alloyId25186"
    });
    $.__views.__alloyId25185.add($.__views.__alloyId25186);
    $.__views.__alloyId25187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25187"
    });
    $.__views.__alloyId25186.add($.__views.__alloyId25187);
    $.__views.__alloyId25188 = Ti.UI.createView({
        id: "__alloyId25188"
    });
    $.__views.__alloyId25188 && $.addTopLevelView($.__views.__alloyId25188);
    $.__views.__alloyId25189 = Ti.UI.createView({
        id: "__alloyId25189"
    });
    $.__views.__alloyId25188.add($.__views.__alloyId25189);
    $.__views.__alloyId25190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25190"
    });
    $.__views.__alloyId25189.add($.__views.__alloyId25190);
    $.__views.__alloyId25191 = Ti.UI.createView({
        id: "__alloyId25191"
    });
    $.__views.__alloyId25191 && $.addTopLevelView($.__views.__alloyId25191);
    $.__views.__alloyId25192 = Ti.UI.createView({
        id: "__alloyId25192"
    });
    $.__views.__alloyId25191.add($.__views.__alloyId25192);
    $.__views.__alloyId25193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25193"
    });
    $.__views.__alloyId25192.add($.__views.__alloyId25193);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;