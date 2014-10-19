function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_487";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_487 = Ti.UI.createView({
        id: "widget_487"
    });
    $.__views.widget_487 && $.addTopLevelView($.__views.widget_487);
    $.__views.__alloyId11232 = Ti.UI.createView({
        id: "__alloyId11232"
    });
    $.__views.widget_487.add($.__views.__alloyId11232);
    $.__views.__alloyId11233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11233"
    });
    $.__views.__alloyId11232.add($.__views.__alloyId11233);
    $.__views.__alloyId11234 = Ti.UI.createView({
        id: "__alloyId11234"
    });
    $.__views.__alloyId11234 && $.addTopLevelView($.__views.__alloyId11234);
    $.__views.__alloyId11235 = Ti.UI.createView({
        id: "__alloyId11235"
    });
    $.__views.__alloyId11234.add($.__views.__alloyId11235);
    $.__views.__alloyId11236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11236"
    });
    $.__views.__alloyId11235.add($.__views.__alloyId11236);
    $.__views.__alloyId11237 = Ti.UI.createView({
        id: "__alloyId11237"
    });
    $.__views.__alloyId11237 && $.addTopLevelView($.__views.__alloyId11237);
    $.__views.__alloyId11238 = Ti.UI.createView({
        id: "__alloyId11238"
    });
    $.__views.__alloyId11237.add($.__views.__alloyId11238);
    $.__views.__alloyId11239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11239"
    });
    $.__views.__alloyId11238.add($.__views.__alloyId11239);
    $.__views.__alloyId11240 = Ti.UI.createView({
        id: "__alloyId11240"
    });
    $.__views.__alloyId11240 && $.addTopLevelView($.__views.__alloyId11240);
    $.__views.__alloyId11241 = Ti.UI.createView({
        id: "__alloyId11241"
    });
    $.__views.__alloyId11240.add($.__views.__alloyId11241);
    $.__views.__alloyId11242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11242"
    });
    $.__views.__alloyId11241.add($.__views.__alloyId11242);
    $.__views.__alloyId11243 = Ti.UI.createView({
        id: "__alloyId11243"
    });
    $.__views.__alloyId11243 && $.addTopLevelView($.__views.__alloyId11243);
    $.__views.__alloyId11244 = Ti.UI.createView({
        id: "__alloyId11244"
    });
    $.__views.__alloyId11243.add($.__views.__alloyId11244);
    $.__views.__alloyId11245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11245"
    });
    $.__views.__alloyId11244.add($.__views.__alloyId11245);
    $.__views.__alloyId11246 = Ti.UI.createView({
        id: "__alloyId11246"
    });
    $.__views.__alloyId11246 && $.addTopLevelView($.__views.__alloyId11246);
    $.__views.__alloyId11247 = Ti.UI.createView({
        id: "__alloyId11247"
    });
    $.__views.__alloyId11246.add($.__views.__alloyId11247);
    $.__views.__alloyId11248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11248"
    });
    $.__views.__alloyId11247.add($.__views.__alloyId11248);
    $.__views.__alloyId11249 = Ti.UI.createView({
        id: "__alloyId11249"
    });
    $.__views.__alloyId11249 && $.addTopLevelView($.__views.__alloyId11249);
    $.__views.__alloyId11250 = Ti.UI.createView({
        id: "__alloyId11250"
    });
    $.__views.__alloyId11249.add($.__views.__alloyId11250);
    $.__views.__alloyId11251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11251"
    });
    $.__views.__alloyId11250.add($.__views.__alloyId11251);
    $.__views.__alloyId11252 = Ti.UI.createView({
        id: "__alloyId11252"
    });
    $.__views.__alloyId11252 && $.addTopLevelView($.__views.__alloyId11252);
    $.__views.__alloyId11253 = Ti.UI.createView({
        id: "__alloyId11253"
    });
    $.__views.__alloyId11252.add($.__views.__alloyId11253);
    $.__views.__alloyId11254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11254"
    });
    $.__views.__alloyId11253.add($.__views.__alloyId11254);
    $.__views.__alloyId11255 = Ti.UI.createView({
        id: "__alloyId11255"
    });
    $.__views.__alloyId11255 && $.addTopLevelView($.__views.__alloyId11255);
    $.__views.__alloyId11256 = Ti.UI.createView({
        id: "__alloyId11256"
    });
    $.__views.__alloyId11255.add($.__views.__alloyId11256);
    $.__views.__alloyId11257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11257"
    });
    $.__views.__alloyId11256.add($.__views.__alloyId11257);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;