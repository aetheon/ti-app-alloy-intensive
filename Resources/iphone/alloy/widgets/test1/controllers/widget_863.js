function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_863";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_863 = Ti.UI.createView({
        id: "widget_863"
    });
    $.__views.widget_863 && $.addTopLevelView($.__views.widget_863);
    $.__views.__alloyId22100 = Ti.UI.createView({
        id: "__alloyId22100"
    });
    $.__views.widget_863.add($.__views.__alloyId22100);
    $.__views.__alloyId22101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22101"
    });
    $.__views.__alloyId22100.add($.__views.__alloyId22101);
    $.__views.__alloyId22102 = Ti.UI.createView({
        id: "__alloyId22102"
    });
    $.__views.__alloyId22102 && $.addTopLevelView($.__views.__alloyId22102);
    $.__views.__alloyId22103 = Ti.UI.createView({
        id: "__alloyId22103"
    });
    $.__views.__alloyId22102.add($.__views.__alloyId22103);
    $.__views.__alloyId22104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22104"
    });
    $.__views.__alloyId22103.add($.__views.__alloyId22104);
    $.__views.__alloyId22105 = Ti.UI.createView({
        id: "__alloyId22105"
    });
    $.__views.__alloyId22105 && $.addTopLevelView($.__views.__alloyId22105);
    $.__views.__alloyId22106 = Ti.UI.createView({
        id: "__alloyId22106"
    });
    $.__views.__alloyId22105.add($.__views.__alloyId22106);
    $.__views.__alloyId22107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22107"
    });
    $.__views.__alloyId22106.add($.__views.__alloyId22107);
    $.__views.__alloyId22108 = Ti.UI.createView({
        id: "__alloyId22108"
    });
    $.__views.__alloyId22108 && $.addTopLevelView($.__views.__alloyId22108);
    $.__views.__alloyId22109 = Ti.UI.createView({
        id: "__alloyId22109"
    });
    $.__views.__alloyId22108.add($.__views.__alloyId22109);
    $.__views.__alloyId22110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22110"
    });
    $.__views.__alloyId22109.add($.__views.__alloyId22110);
    $.__views.__alloyId22111 = Ti.UI.createView({
        id: "__alloyId22111"
    });
    $.__views.__alloyId22111 && $.addTopLevelView($.__views.__alloyId22111);
    $.__views.__alloyId22112 = Ti.UI.createView({
        id: "__alloyId22112"
    });
    $.__views.__alloyId22111.add($.__views.__alloyId22112);
    $.__views.__alloyId22113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22113"
    });
    $.__views.__alloyId22112.add($.__views.__alloyId22113);
    $.__views.__alloyId22114 = Ti.UI.createView({
        id: "__alloyId22114"
    });
    $.__views.__alloyId22114 && $.addTopLevelView($.__views.__alloyId22114);
    $.__views.__alloyId22115 = Ti.UI.createView({
        id: "__alloyId22115"
    });
    $.__views.__alloyId22114.add($.__views.__alloyId22115);
    $.__views.__alloyId22116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22116"
    });
    $.__views.__alloyId22115.add($.__views.__alloyId22116);
    $.__views.__alloyId22117 = Ti.UI.createView({
        id: "__alloyId22117"
    });
    $.__views.__alloyId22117 && $.addTopLevelView($.__views.__alloyId22117);
    $.__views.__alloyId22118 = Ti.UI.createView({
        id: "__alloyId22118"
    });
    $.__views.__alloyId22117.add($.__views.__alloyId22118);
    $.__views.__alloyId22119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22119"
    });
    $.__views.__alloyId22118.add($.__views.__alloyId22119);
    $.__views.__alloyId22120 = Ti.UI.createView({
        id: "__alloyId22120"
    });
    $.__views.__alloyId22120 && $.addTopLevelView($.__views.__alloyId22120);
    $.__views.__alloyId22121 = Ti.UI.createView({
        id: "__alloyId22121"
    });
    $.__views.__alloyId22120.add($.__views.__alloyId22121);
    $.__views.__alloyId22122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22122"
    });
    $.__views.__alloyId22121.add($.__views.__alloyId22122);
    $.__views.__alloyId22123 = Ti.UI.createView({
        id: "__alloyId22123"
    });
    $.__views.__alloyId22123 && $.addTopLevelView($.__views.__alloyId22123);
    $.__views.__alloyId22124 = Ti.UI.createView({
        id: "__alloyId22124"
    });
    $.__views.__alloyId22123.add($.__views.__alloyId22124);
    $.__views.__alloyId22125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22125"
    });
    $.__views.__alloyId22124.add($.__views.__alloyId22125);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;