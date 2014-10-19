function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_765";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_765 = Ti.UI.createView({
        id: "widget_765"
    });
    $.__views.widget_765 && $.addTopLevelView($.__views.widget_765);
    $.__views.__alloyId19266 = Ti.UI.createView({
        id: "__alloyId19266"
    });
    $.__views.widget_765.add($.__views.__alloyId19266);
    $.__views.__alloyId19267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19267"
    });
    $.__views.__alloyId19266.add($.__views.__alloyId19267);
    $.__views.__alloyId19268 = Ti.UI.createView({
        id: "__alloyId19268"
    });
    $.__views.__alloyId19268 && $.addTopLevelView($.__views.__alloyId19268);
    $.__views.__alloyId19269 = Ti.UI.createView({
        id: "__alloyId19269"
    });
    $.__views.__alloyId19268.add($.__views.__alloyId19269);
    $.__views.__alloyId19270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19270"
    });
    $.__views.__alloyId19269.add($.__views.__alloyId19270);
    $.__views.__alloyId19271 = Ti.UI.createView({
        id: "__alloyId19271"
    });
    $.__views.__alloyId19271 && $.addTopLevelView($.__views.__alloyId19271);
    $.__views.__alloyId19272 = Ti.UI.createView({
        id: "__alloyId19272"
    });
    $.__views.__alloyId19271.add($.__views.__alloyId19272);
    $.__views.__alloyId19273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19273"
    });
    $.__views.__alloyId19272.add($.__views.__alloyId19273);
    $.__views.__alloyId19274 = Ti.UI.createView({
        id: "__alloyId19274"
    });
    $.__views.__alloyId19274 && $.addTopLevelView($.__views.__alloyId19274);
    $.__views.__alloyId19275 = Ti.UI.createView({
        id: "__alloyId19275"
    });
    $.__views.__alloyId19274.add($.__views.__alloyId19275);
    $.__views.__alloyId19276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19276"
    });
    $.__views.__alloyId19275.add($.__views.__alloyId19276);
    $.__views.__alloyId19277 = Ti.UI.createView({
        id: "__alloyId19277"
    });
    $.__views.__alloyId19277 && $.addTopLevelView($.__views.__alloyId19277);
    $.__views.__alloyId19278 = Ti.UI.createView({
        id: "__alloyId19278"
    });
    $.__views.__alloyId19277.add($.__views.__alloyId19278);
    $.__views.__alloyId19279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19279"
    });
    $.__views.__alloyId19278.add($.__views.__alloyId19279);
    $.__views.__alloyId19280 = Ti.UI.createView({
        id: "__alloyId19280"
    });
    $.__views.__alloyId19280 && $.addTopLevelView($.__views.__alloyId19280);
    $.__views.__alloyId19281 = Ti.UI.createView({
        id: "__alloyId19281"
    });
    $.__views.__alloyId19280.add($.__views.__alloyId19281);
    $.__views.__alloyId19282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19282"
    });
    $.__views.__alloyId19281.add($.__views.__alloyId19282);
    $.__views.__alloyId19283 = Ti.UI.createView({
        id: "__alloyId19283"
    });
    $.__views.__alloyId19283 && $.addTopLevelView($.__views.__alloyId19283);
    $.__views.__alloyId19284 = Ti.UI.createView({
        id: "__alloyId19284"
    });
    $.__views.__alloyId19283.add($.__views.__alloyId19284);
    $.__views.__alloyId19285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19285"
    });
    $.__views.__alloyId19284.add($.__views.__alloyId19285);
    $.__views.__alloyId19286 = Ti.UI.createView({
        id: "__alloyId19286"
    });
    $.__views.__alloyId19286 && $.addTopLevelView($.__views.__alloyId19286);
    $.__views.__alloyId19287 = Ti.UI.createView({
        id: "__alloyId19287"
    });
    $.__views.__alloyId19286.add($.__views.__alloyId19287);
    $.__views.__alloyId19288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19288"
    });
    $.__views.__alloyId19287.add($.__views.__alloyId19288);
    $.__views.__alloyId19289 = Ti.UI.createView({
        id: "__alloyId19289"
    });
    $.__views.__alloyId19289 && $.addTopLevelView($.__views.__alloyId19289);
    $.__views.__alloyId19290 = Ti.UI.createView({
        id: "__alloyId19290"
    });
    $.__views.__alloyId19289.add($.__views.__alloyId19290);
    $.__views.__alloyId19291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19291"
    });
    $.__views.__alloyId19290.add($.__views.__alloyId19291);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;