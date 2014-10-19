function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_696";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_696 = Ti.UI.createView({
        id: "widget_696"
    });
    $.__views.widget_696 && $.addTopLevelView($.__views.widget_696);
    $.__views.__alloyId17264 = Ti.UI.createView({
        id: "__alloyId17264"
    });
    $.__views.widget_696.add($.__views.__alloyId17264);
    $.__views.__alloyId17265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17265"
    });
    $.__views.__alloyId17264.add($.__views.__alloyId17265);
    $.__views.__alloyId17266 = Ti.UI.createView({
        id: "__alloyId17266"
    });
    $.__views.__alloyId17266 && $.addTopLevelView($.__views.__alloyId17266);
    $.__views.__alloyId17267 = Ti.UI.createView({
        id: "__alloyId17267"
    });
    $.__views.__alloyId17266.add($.__views.__alloyId17267);
    $.__views.__alloyId17268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17268"
    });
    $.__views.__alloyId17267.add($.__views.__alloyId17268);
    $.__views.__alloyId17269 = Ti.UI.createView({
        id: "__alloyId17269"
    });
    $.__views.__alloyId17269 && $.addTopLevelView($.__views.__alloyId17269);
    $.__views.__alloyId17270 = Ti.UI.createView({
        id: "__alloyId17270"
    });
    $.__views.__alloyId17269.add($.__views.__alloyId17270);
    $.__views.__alloyId17271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17271"
    });
    $.__views.__alloyId17270.add($.__views.__alloyId17271);
    $.__views.__alloyId17272 = Ti.UI.createView({
        id: "__alloyId17272"
    });
    $.__views.__alloyId17272 && $.addTopLevelView($.__views.__alloyId17272);
    $.__views.__alloyId17273 = Ti.UI.createView({
        id: "__alloyId17273"
    });
    $.__views.__alloyId17272.add($.__views.__alloyId17273);
    $.__views.__alloyId17274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17274"
    });
    $.__views.__alloyId17273.add($.__views.__alloyId17274);
    $.__views.__alloyId17275 = Ti.UI.createView({
        id: "__alloyId17275"
    });
    $.__views.__alloyId17275 && $.addTopLevelView($.__views.__alloyId17275);
    $.__views.__alloyId17276 = Ti.UI.createView({
        id: "__alloyId17276"
    });
    $.__views.__alloyId17275.add($.__views.__alloyId17276);
    $.__views.__alloyId17277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17277"
    });
    $.__views.__alloyId17276.add($.__views.__alloyId17277);
    $.__views.__alloyId17278 = Ti.UI.createView({
        id: "__alloyId17278"
    });
    $.__views.__alloyId17278 && $.addTopLevelView($.__views.__alloyId17278);
    $.__views.__alloyId17279 = Ti.UI.createView({
        id: "__alloyId17279"
    });
    $.__views.__alloyId17278.add($.__views.__alloyId17279);
    $.__views.__alloyId17280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17280"
    });
    $.__views.__alloyId17279.add($.__views.__alloyId17280);
    $.__views.__alloyId17281 = Ti.UI.createView({
        id: "__alloyId17281"
    });
    $.__views.__alloyId17281 && $.addTopLevelView($.__views.__alloyId17281);
    $.__views.__alloyId17282 = Ti.UI.createView({
        id: "__alloyId17282"
    });
    $.__views.__alloyId17281.add($.__views.__alloyId17282);
    $.__views.__alloyId17283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17283"
    });
    $.__views.__alloyId17282.add($.__views.__alloyId17283);
    $.__views.__alloyId17284 = Ti.UI.createView({
        id: "__alloyId17284"
    });
    $.__views.__alloyId17284 && $.addTopLevelView($.__views.__alloyId17284);
    $.__views.__alloyId17285 = Ti.UI.createView({
        id: "__alloyId17285"
    });
    $.__views.__alloyId17284.add($.__views.__alloyId17285);
    $.__views.__alloyId17286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17286"
    });
    $.__views.__alloyId17285.add($.__views.__alloyId17286);
    $.__views.__alloyId17287 = Ti.UI.createView({
        id: "__alloyId17287"
    });
    $.__views.__alloyId17287 && $.addTopLevelView($.__views.__alloyId17287);
    $.__views.__alloyId17288 = Ti.UI.createView({
        id: "__alloyId17288"
    });
    $.__views.__alloyId17287.add($.__views.__alloyId17288);
    $.__views.__alloyId17289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17289"
    });
    $.__views.__alloyId17288.add($.__views.__alloyId17289);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;