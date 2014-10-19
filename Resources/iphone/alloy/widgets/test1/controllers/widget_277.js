function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_277";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_277 = Ti.UI.createView({
        id: "widget_277"
    });
    $.__views.widget_277 && $.addTopLevelView($.__views.widget_277);
    $.__views.__alloyId5174 = Ti.UI.createView({
        id: "__alloyId5174"
    });
    $.__views.widget_277.add($.__views.__alloyId5174);
    $.__views.__alloyId5175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5175"
    });
    $.__views.__alloyId5174.add($.__views.__alloyId5175);
    $.__views.__alloyId5176 = Ti.UI.createView({
        id: "__alloyId5176"
    });
    $.__views.__alloyId5176 && $.addTopLevelView($.__views.__alloyId5176);
    $.__views.__alloyId5177 = Ti.UI.createView({
        id: "__alloyId5177"
    });
    $.__views.__alloyId5176.add($.__views.__alloyId5177);
    $.__views.__alloyId5178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5178"
    });
    $.__views.__alloyId5177.add($.__views.__alloyId5178);
    $.__views.__alloyId5179 = Ti.UI.createView({
        id: "__alloyId5179"
    });
    $.__views.__alloyId5179 && $.addTopLevelView($.__views.__alloyId5179);
    $.__views.__alloyId5180 = Ti.UI.createView({
        id: "__alloyId5180"
    });
    $.__views.__alloyId5179.add($.__views.__alloyId5180);
    $.__views.__alloyId5181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5181"
    });
    $.__views.__alloyId5180.add($.__views.__alloyId5181);
    $.__views.__alloyId5182 = Ti.UI.createView({
        id: "__alloyId5182"
    });
    $.__views.__alloyId5182 && $.addTopLevelView($.__views.__alloyId5182);
    $.__views.__alloyId5183 = Ti.UI.createView({
        id: "__alloyId5183"
    });
    $.__views.__alloyId5182.add($.__views.__alloyId5183);
    $.__views.__alloyId5184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5184"
    });
    $.__views.__alloyId5183.add($.__views.__alloyId5184);
    $.__views.__alloyId5185 = Ti.UI.createView({
        id: "__alloyId5185"
    });
    $.__views.__alloyId5185 && $.addTopLevelView($.__views.__alloyId5185);
    $.__views.__alloyId5186 = Ti.UI.createView({
        id: "__alloyId5186"
    });
    $.__views.__alloyId5185.add($.__views.__alloyId5186);
    $.__views.__alloyId5187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5187"
    });
    $.__views.__alloyId5186.add($.__views.__alloyId5187);
    $.__views.__alloyId5188 = Ti.UI.createView({
        id: "__alloyId5188"
    });
    $.__views.__alloyId5188 && $.addTopLevelView($.__views.__alloyId5188);
    $.__views.__alloyId5189 = Ti.UI.createView({
        id: "__alloyId5189"
    });
    $.__views.__alloyId5188.add($.__views.__alloyId5189);
    $.__views.__alloyId5190 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5190"
    });
    $.__views.__alloyId5189.add($.__views.__alloyId5190);
    $.__views.__alloyId5191 = Ti.UI.createView({
        id: "__alloyId5191"
    });
    $.__views.__alloyId5191 && $.addTopLevelView($.__views.__alloyId5191);
    $.__views.__alloyId5192 = Ti.UI.createView({
        id: "__alloyId5192"
    });
    $.__views.__alloyId5191.add($.__views.__alloyId5192);
    $.__views.__alloyId5193 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5193"
    });
    $.__views.__alloyId5192.add($.__views.__alloyId5193);
    $.__views.__alloyId5194 = Ti.UI.createView({
        id: "__alloyId5194"
    });
    $.__views.__alloyId5194 && $.addTopLevelView($.__views.__alloyId5194);
    $.__views.__alloyId5195 = Ti.UI.createView({
        id: "__alloyId5195"
    });
    $.__views.__alloyId5194.add($.__views.__alloyId5195);
    $.__views.__alloyId5196 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5196"
    });
    $.__views.__alloyId5195.add($.__views.__alloyId5196);
    $.__views.__alloyId5197 = Ti.UI.createView({
        id: "__alloyId5197"
    });
    $.__views.__alloyId5197 && $.addTopLevelView($.__views.__alloyId5197);
    $.__views.__alloyId5198 = Ti.UI.createView({
        id: "__alloyId5198"
    });
    $.__views.__alloyId5197.add($.__views.__alloyId5198);
    $.__views.__alloyId5199 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5199"
    });
    $.__views.__alloyId5198.add($.__views.__alloyId5199);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;