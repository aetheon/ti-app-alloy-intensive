function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_380";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_380 = Ti.UI.createView({
        id: "widget_380"
    });
    $.__views.widget_380 && $.addTopLevelView($.__views.widget_380);
    $.__views.__alloyId8164 = Ti.UI.createView({
        id: "__alloyId8164"
    });
    $.__views.widget_380.add($.__views.__alloyId8164);
    $.__views.__alloyId8165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8165"
    });
    $.__views.__alloyId8164.add($.__views.__alloyId8165);
    $.__views.__alloyId8166 = Ti.UI.createView({
        id: "__alloyId8166"
    });
    $.__views.__alloyId8166 && $.addTopLevelView($.__views.__alloyId8166);
    $.__views.__alloyId8167 = Ti.UI.createView({
        id: "__alloyId8167"
    });
    $.__views.__alloyId8166.add($.__views.__alloyId8167);
    $.__views.__alloyId8168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8168"
    });
    $.__views.__alloyId8167.add($.__views.__alloyId8168);
    $.__views.__alloyId8169 = Ti.UI.createView({
        id: "__alloyId8169"
    });
    $.__views.__alloyId8169 && $.addTopLevelView($.__views.__alloyId8169);
    $.__views.__alloyId8170 = Ti.UI.createView({
        id: "__alloyId8170"
    });
    $.__views.__alloyId8169.add($.__views.__alloyId8170);
    $.__views.__alloyId8171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8171"
    });
    $.__views.__alloyId8170.add($.__views.__alloyId8171);
    $.__views.__alloyId8172 = Ti.UI.createView({
        id: "__alloyId8172"
    });
    $.__views.__alloyId8172 && $.addTopLevelView($.__views.__alloyId8172);
    $.__views.__alloyId8173 = Ti.UI.createView({
        id: "__alloyId8173"
    });
    $.__views.__alloyId8172.add($.__views.__alloyId8173);
    $.__views.__alloyId8174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8174"
    });
    $.__views.__alloyId8173.add($.__views.__alloyId8174);
    $.__views.__alloyId8175 = Ti.UI.createView({
        id: "__alloyId8175"
    });
    $.__views.__alloyId8175 && $.addTopLevelView($.__views.__alloyId8175);
    $.__views.__alloyId8176 = Ti.UI.createView({
        id: "__alloyId8176"
    });
    $.__views.__alloyId8175.add($.__views.__alloyId8176);
    $.__views.__alloyId8177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8177"
    });
    $.__views.__alloyId8176.add($.__views.__alloyId8177);
    $.__views.__alloyId8178 = Ti.UI.createView({
        id: "__alloyId8178"
    });
    $.__views.__alloyId8178 && $.addTopLevelView($.__views.__alloyId8178);
    $.__views.__alloyId8179 = Ti.UI.createView({
        id: "__alloyId8179"
    });
    $.__views.__alloyId8178.add($.__views.__alloyId8179);
    $.__views.__alloyId8180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8180"
    });
    $.__views.__alloyId8179.add($.__views.__alloyId8180);
    $.__views.__alloyId8181 = Ti.UI.createView({
        id: "__alloyId8181"
    });
    $.__views.__alloyId8181 && $.addTopLevelView($.__views.__alloyId8181);
    $.__views.__alloyId8182 = Ti.UI.createView({
        id: "__alloyId8182"
    });
    $.__views.__alloyId8181.add($.__views.__alloyId8182);
    $.__views.__alloyId8183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8183"
    });
    $.__views.__alloyId8182.add($.__views.__alloyId8183);
    $.__views.__alloyId8184 = Ti.UI.createView({
        id: "__alloyId8184"
    });
    $.__views.__alloyId8184 && $.addTopLevelView($.__views.__alloyId8184);
    $.__views.__alloyId8185 = Ti.UI.createView({
        id: "__alloyId8185"
    });
    $.__views.__alloyId8184.add($.__views.__alloyId8185);
    $.__views.__alloyId8186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8186"
    });
    $.__views.__alloyId8185.add($.__views.__alloyId8186);
    $.__views.__alloyId8187 = Ti.UI.createView({
        id: "__alloyId8187"
    });
    $.__views.__alloyId8187 && $.addTopLevelView($.__views.__alloyId8187);
    $.__views.__alloyId8188 = Ti.UI.createView({
        id: "__alloyId8188"
    });
    $.__views.__alloyId8187.add($.__views.__alloyId8188);
    $.__views.__alloyId8189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8189"
    });
    $.__views.__alloyId8188.add($.__views.__alloyId8189);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;