function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_903";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_903 = Ti.UI.createView({
        id: "widget_903"
    });
    $.__views.widget_903 && $.addTopLevelView($.__views.widget_903);
    $.__views.__alloyId23270 = Ti.UI.createView({
        id: "__alloyId23270"
    });
    $.__views.widget_903.add($.__views.__alloyId23270);
    $.__views.__alloyId23271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23271"
    });
    $.__views.__alloyId23270.add($.__views.__alloyId23271);
    $.__views.__alloyId23272 = Ti.UI.createView({
        id: "__alloyId23272"
    });
    $.__views.__alloyId23272 && $.addTopLevelView($.__views.__alloyId23272);
    $.__views.__alloyId23273 = Ti.UI.createView({
        id: "__alloyId23273"
    });
    $.__views.__alloyId23272.add($.__views.__alloyId23273);
    $.__views.__alloyId23274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23274"
    });
    $.__views.__alloyId23273.add($.__views.__alloyId23274);
    $.__views.__alloyId23275 = Ti.UI.createView({
        id: "__alloyId23275"
    });
    $.__views.__alloyId23275 && $.addTopLevelView($.__views.__alloyId23275);
    $.__views.__alloyId23276 = Ti.UI.createView({
        id: "__alloyId23276"
    });
    $.__views.__alloyId23275.add($.__views.__alloyId23276);
    $.__views.__alloyId23277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23277"
    });
    $.__views.__alloyId23276.add($.__views.__alloyId23277);
    $.__views.__alloyId23278 = Ti.UI.createView({
        id: "__alloyId23278"
    });
    $.__views.__alloyId23278 && $.addTopLevelView($.__views.__alloyId23278);
    $.__views.__alloyId23279 = Ti.UI.createView({
        id: "__alloyId23279"
    });
    $.__views.__alloyId23278.add($.__views.__alloyId23279);
    $.__views.__alloyId23280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23280"
    });
    $.__views.__alloyId23279.add($.__views.__alloyId23280);
    $.__views.__alloyId23281 = Ti.UI.createView({
        id: "__alloyId23281"
    });
    $.__views.__alloyId23281 && $.addTopLevelView($.__views.__alloyId23281);
    $.__views.__alloyId23282 = Ti.UI.createView({
        id: "__alloyId23282"
    });
    $.__views.__alloyId23281.add($.__views.__alloyId23282);
    $.__views.__alloyId23283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23283"
    });
    $.__views.__alloyId23282.add($.__views.__alloyId23283);
    $.__views.__alloyId23284 = Ti.UI.createView({
        id: "__alloyId23284"
    });
    $.__views.__alloyId23284 && $.addTopLevelView($.__views.__alloyId23284);
    $.__views.__alloyId23285 = Ti.UI.createView({
        id: "__alloyId23285"
    });
    $.__views.__alloyId23284.add($.__views.__alloyId23285);
    $.__views.__alloyId23286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23286"
    });
    $.__views.__alloyId23285.add($.__views.__alloyId23286);
    $.__views.__alloyId23287 = Ti.UI.createView({
        id: "__alloyId23287"
    });
    $.__views.__alloyId23287 && $.addTopLevelView($.__views.__alloyId23287);
    $.__views.__alloyId23288 = Ti.UI.createView({
        id: "__alloyId23288"
    });
    $.__views.__alloyId23287.add($.__views.__alloyId23288);
    $.__views.__alloyId23289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23289"
    });
    $.__views.__alloyId23288.add($.__views.__alloyId23289);
    $.__views.__alloyId23290 = Ti.UI.createView({
        id: "__alloyId23290"
    });
    $.__views.__alloyId23290 && $.addTopLevelView($.__views.__alloyId23290);
    $.__views.__alloyId23291 = Ti.UI.createView({
        id: "__alloyId23291"
    });
    $.__views.__alloyId23290.add($.__views.__alloyId23291);
    $.__views.__alloyId23292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23292"
    });
    $.__views.__alloyId23291.add($.__views.__alloyId23292);
    $.__views.__alloyId23293 = Ti.UI.createView({
        id: "__alloyId23293"
    });
    $.__views.__alloyId23293 && $.addTopLevelView($.__views.__alloyId23293);
    $.__views.__alloyId23294 = Ti.UI.createView({
        id: "__alloyId23294"
    });
    $.__views.__alloyId23293.add($.__views.__alloyId23294);
    $.__views.__alloyId23295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23295"
    });
    $.__views.__alloyId23294.add($.__views.__alloyId23295);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;