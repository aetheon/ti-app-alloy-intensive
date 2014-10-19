function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_973";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_973 = Ti.UI.createView({
        id: "widget_973"
    });
    $.__views.widget_973 && $.addTopLevelView($.__views.widget_973);
    $.__views.__alloyId25272 = Ti.UI.createView({
        id: "__alloyId25272"
    });
    $.__views.widget_973.add($.__views.__alloyId25272);
    $.__views.__alloyId25273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25273"
    });
    $.__views.__alloyId25272.add($.__views.__alloyId25273);
    $.__views.__alloyId25274 = Ti.UI.createView({
        id: "__alloyId25274"
    });
    $.__views.__alloyId25274 && $.addTopLevelView($.__views.__alloyId25274);
    $.__views.__alloyId25275 = Ti.UI.createView({
        id: "__alloyId25275"
    });
    $.__views.__alloyId25274.add($.__views.__alloyId25275);
    $.__views.__alloyId25276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25276"
    });
    $.__views.__alloyId25275.add($.__views.__alloyId25276);
    $.__views.__alloyId25277 = Ti.UI.createView({
        id: "__alloyId25277"
    });
    $.__views.__alloyId25277 && $.addTopLevelView($.__views.__alloyId25277);
    $.__views.__alloyId25278 = Ti.UI.createView({
        id: "__alloyId25278"
    });
    $.__views.__alloyId25277.add($.__views.__alloyId25278);
    $.__views.__alloyId25279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25279"
    });
    $.__views.__alloyId25278.add($.__views.__alloyId25279);
    $.__views.__alloyId25280 = Ti.UI.createView({
        id: "__alloyId25280"
    });
    $.__views.__alloyId25280 && $.addTopLevelView($.__views.__alloyId25280);
    $.__views.__alloyId25281 = Ti.UI.createView({
        id: "__alloyId25281"
    });
    $.__views.__alloyId25280.add($.__views.__alloyId25281);
    $.__views.__alloyId25282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25282"
    });
    $.__views.__alloyId25281.add($.__views.__alloyId25282);
    $.__views.__alloyId25283 = Ti.UI.createView({
        id: "__alloyId25283"
    });
    $.__views.__alloyId25283 && $.addTopLevelView($.__views.__alloyId25283);
    $.__views.__alloyId25284 = Ti.UI.createView({
        id: "__alloyId25284"
    });
    $.__views.__alloyId25283.add($.__views.__alloyId25284);
    $.__views.__alloyId25285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25285"
    });
    $.__views.__alloyId25284.add($.__views.__alloyId25285);
    $.__views.__alloyId25286 = Ti.UI.createView({
        id: "__alloyId25286"
    });
    $.__views.__alloyId25286 && $.addTopLevelView($.__views.__alloyId25286);
    $.__views.__alloyId25287 = Ti.UI.createView({
        id: "__alloyId25287"
    });
    $.__views.__alloyId25286.add($.__views.__alloyId25287);
    $.__views.__alloyId25288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25288"
    });
    $.__views.__alloyId25287.add($.__views.__alloyId25288);
    $.__views.__alloyId25289 = Ti.UI.createView({
        id: "__alloyId25289"
    });
    $.__views.__alloyId25289 && $.addTopLevelView($.__views.__alloyId25289);
    $.__views.__alloyId25290 = Ti.UI.createView({
        id: "__alloyId25290"
    });
    $.__views.__alloyId25289.add($.__views.__alloyId25290);
    $.__views.__alloyId25291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25291"
    });
    $.__views.__alloyId25290.add($.__views.__alloyId25291);
    $.__views.__alloyId25292 = Ti.UI.createView({
        id: "__alloyId25292"
    });
    $.__views.__alloyId25292 && $.addTopLevelView($.__views.__alloyId25292);
    $.__views.__alloyId25293 = Ti.UI.createView({
        id: "__alloyId25293"
    });
    $.__views.__alloyId25292.add($.__views.__alloyId25293);
    $.__views.__alloyId25294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25294"
    });
    $.__views.__alloyId25293.add($.__views.__alloyId25294);
    $.__views.__alloyId25295 = Ti.UI.createView({
        id: "__alloyId25295"
    });
    $.__views.__alloyId25295 && $.addTopLevelView($.__views.__alloyId25295);
    $.__views.__alloyId25296 = Ti.UI.createView({
        id: "__alloyId25296"
    });
    $.__views.__alloyId25295.add($.__views.__alloyId25296);
    $.__views.__alloyId25297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25297"
    });
    $.__views.__alloyId25296.add($.__views.__alloyId25297);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;