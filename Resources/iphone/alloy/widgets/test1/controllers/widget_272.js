function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_272";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_272 = Ti.UI.createView({
        id: "widget_272"
    });
    $.__views.widget_272 && $.addTopLevelView($.__views.widget_272);
    $.__views.__alloyId5044 = Ti.UI.createView({
        id: "__alloyId5044"
    });
    $.__views.widget_272.add($.__views.__alloyId5044);
    $.__views.__alloyId5045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5045"
    });
    $.__views.__alloyId5044.add($.__views.__alloyId5045);
    $.__views.__alloyId5046 = Ti.UI.createView({
        id: "__alloyId5046"
    });
    $.__views.__alloyId5046 && $.addTopLevelView($.__views.__alloyId5046);
    $.__views.__alloyId5047 = Ti.UI.createView({
        id: "__alloyId5047"
    });
    $.__views.__alloyId5046.add($.__views.__alloyId5047);
    $.__views.__alloyId5048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5048"
    });
    $.__views.__alloyId5047.add($.__views.__alloyId5048);
    $.__views.__alloyId5049 = Ti.UI.createView({
        id: "__alloyId5049"
    });
    $.__views.__alloyId5049 && $.addTopLevelView($.__views.__alloyId5049);
    $.__views.__alloyId5050 = Ti.UI.createView({
        id: "__alloyId5050"
    });
    $.__views.__alloyId5049.add($.__views.__alloyId5050);
    $.__views.__alloyId5051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5051"
    });
    $.__views.__alloyId5050.add($.__views.__alloyId5051);
    $.__views.__alloyId5052 = Ti.UI.createView({
        id: "__alloyId5052"
    });
    $.__views.__alloyId5052 && $.addTopLevelView($.__views.__alloyId5052);
    $.__views.__alloyId5053 = Ti.UI.createView({
        id: "__alloyId5053"
    });
    $.__views.__alloyId5052.add($.__views.__alloyId5053);
    $.__views.__alloyId5054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5054"
    });
    $.__views.__alloyId5053.add($.__views.__alloyId5054);
    $.__views.__alloyId5055 = Ti.UI.createView({
        id: "__alloyId5055"
    });
    $.__views.__alloyId5055 && $.addTopLevelView($.__views.__alloyId5055);
    $.__views.__alloyId5056 = Ti.UI.createView({
        id: "__alloyId5056"
    });
    $.__views.__alloyId5055.add($.__views.__alloyId5056);
    $.__views.__alloyId5057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5057"
    });
    $.__views.__alloyId5056.add($.__views.__alloyId5057);
    $.__views.__alloyId5058 = Ti.UI.createView({
        id: "__alloyId5058"
    });
    $.__views.__alloyId5058 && $.addTopLevelView($.__views.__alloyId5058);
    $.__views.__alloyId5059 = Ti.UI.createView({
        id: "__alloyId5059"
    });
    $.__views.__alloyId5058.add($.__views.__alloyId5059);
    $.__views.__alloyId5060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5060"
    });
    $.__views.__alloyId5059.add($.__views.__alloyId5060);
    $.__views.__alloyId5061 = Ti.UI.createView({
        id: "__alloyId5061"
    });
    $.__views.__alloyId5061 && $.addTopLevelView($.__views.__alloyId5061);
    $.__views.__alloyId5062 = Ti.UI.createView({
        id: "__alloyId5062"
    });
    $.__views.__alloyId5061.add($.__views.__alloyId5062);
    $.__views.__alloyId5063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5063"
    });
    $.__views.__alloyId5062.add($.__views.__alloyId5063);
    $.__views.__alloyId5064 = Ti.UI.createView({
        id: "__alloyId5064"
    });
    $.__views.__alloyId5064 && $.addTopLevelView($.__views.__alloyId5064);
    $.__views.__alloyId5065 = Ti.UI.createView({
        id: "__alloyId5065"
    });
    $.__views.__alloyId5064.add($.__views.__alloyId5065);
    $.__views.__alloyId5066 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5066"
    });
    $.__views.__alloyId5065.add($.__views.__alloyId5066);
    $.__views.__alloyId5067 = Ti.UI.createView({
        id: "__alloyId5067"
    });
    $.__views.__alloyId5067 && $.addTopLevelView($.__views.__alloyId5067);
    $.__views.__alloyId5068 = Ti.UI.createView({
        id: "__alloyId5068"
    });
    $.__views.__alloyId5067.add($.__views.__alloyId5068);
    $.__views.__alloyId5069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5069"
    });
    $.__views.__alloyId5068.add($.__views.__alloyId5069);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;