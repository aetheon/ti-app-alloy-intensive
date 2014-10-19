function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_314";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_314 = Ti.UI.createView({
        id: "widget_314"
    });
    $.__views.widget_314 && $.addTopLevelView($.__views.widget_314);
    $.__views.__alloyId6266 = Ti.UI.createView({
        id: "__alloyId6266"
    });
    $.__views.widget_314.add($.__views.__alloyId6266);
    $.__views.__alloyId6267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6267"
    });
    $.__views.__alloyId6266.add($.__views.__alloyId6267);
    $.__views.__alloyId6268 = Ti.UI.createView({
        id: "__alloyId6268"
    });
    $.__views.__alloyId6268 && $.addTopLevelView($.__views.__alloyId6268);
    $.__views.__alloyId6269 = Ti.UI.createView({
        id: "__alloyId6269"
    });
    $.__views.__alloyId6268.add($.__views.__alloyId6269);
    $.__views.__alloyId6270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6270"
    });
    $.__views.__alloyId6269.add($.__views.__alloyId6270);
    $.__views.__alloyId6271 = Ti.UI.createView({
        id: "__alloyId6271"
    });
    $.__views.__alloyId6271 && $.addTopLevelView($.__views.__alloyId6271);
    $.__views.__alloyId6272 = Ti.UI.createView({
        id: "__alloyId6272"
    });
    $.__views.__alloyId6271.add($.__views.__alloyId6272);
    $.__views.__alloyId6273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6273"
    });
    $.__views.__alloyId6272.add($.__views.__alloyId6273);
    $.__views.__alloyId6274 = Ti.UI.createView({
        id: "__alloyId6274"
    });
    $.__views.__alloyId6274 && $.addTopLevelView($.__views.__alloyId6274);
    $.__views.__alloyId6275 = Ti.UI.createView({
        id: "__alloyId6275"
    });
    $.__views.__alloyId6274.add($.__views.__alloyId6275);
    $.__views.__alloyId6276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6276"
    });
    $.__views.__alloyId6275.add($.__views.__alloyId6276);
    $.__views.__alloyId6277 = Ti.UI.createView({
        id: "__alloyId6277"
    });
    $.__views.__alloyId6277 && $.addTopLevelView($.__views.__alloyId6277);
    $.__views.__alloyId6278 = Ti.UI.createView({
        id: "__alloyId6278"
    });
    $.__views.__alloyId6277.add($.__views.__alloyId6278);
    $.__views.__alloyId6279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6279"
    });
    $.__views.__alloyId6278.add($.__views.__alloyId6279);
    $.__views.__alloyId6280 = Ti.UI.createView({
        id: "__alloyId6280"
    });
    $.__views.__alloyId6280 && $.addTopLevelView($.__views.__alloyId6280);
    $.__views.__alloyId6281 = Ti.UI.createView({
        id: "__alloyId6281"
    });
    $.__views.__alloyId6280.add($.__views.__alloyId6281);
    $.__views.__alloyId6282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6282"
    });
    $.__views.__alloyId6281.add($.__views.__alloyId6282);
    $.__views.__alloyId6283 = Ti.UI.createView({
        id: "__alloyId6283"
    });
    $.__views.__alloyId6283 && $.addTopLevelView($.__views.__alloyId6283);
    $.__views.__alloyId6284 = Ti.UI.createView({
        id: "__alloyId6284"
    });
    $.__views.__alloyId6283.add($.__views.__alloyId6284);
    $.__views.__alloyId6285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6285"
    });
    $.__views.__alloyId6284.add($.__views.__alloyId6285);
    $.__views.__alloyId6286 = Ti.UI.createView({
        id: "__alloyId6286"
    });
    $.__views.__alloyId6286 && $.addTopLevelView($.__views.__alloyId6286);
    $.__views.__alloyId6287 = Ti.UI.createView({
        id: "__alloyId6287"
    });
    $.__views.__alloyId6286.add($.__views.__alloyId6287);
    $.__views.__alloyId6288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6288"
    });
    $.__views.__alloyId6287.add($.__views.__alloyId6288);
    $.__views.__alloyId6289 = Ti.UI.createView({
        id: "__alloyId6289"
    });
    $.__views.__alloyId6289 && $.addTopLevelView($.__views.__alloyId6289);
    $.__views.__alloyId6290 = Ti.UI.createView({
        id: "__alloyId6290"
    });
    $.__views.__alloyId6289.add($.__views.__alloyId6290);
    $.__views.__alloyId6291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6291"
    });
    $.__views.__alloyId6290.add($.__views.__alloyId6291);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;