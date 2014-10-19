function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_619";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_619 = Ti.UI.createView({
        id: "widget_619"
    });
    $.__views.widget_619 && $.addTopLevelView($.__views.widget_619);
    $.__views.__alloyId15054 = Ti.UI.createView({
        id: "__alloyId15054"
    });
    $.__views.widget_619.add($.__views.__alloyId15054);
    $.__views.__alloyId15055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15055"
    });
    $.__views.__alloyId15054.add($.__views.__alloyId15055);
    $.__views.__alloyId15056 = Ti.UI.createView({
        id: "__alloyId15056"
    });
    $.__views.__alloyId15056 && $.addTopLevelView($.__views.__alloyId15056);
    $.__views.__alloyId15057 = Ti.UI.createView({
        id: "__alloyId15057"
    });
    $.__views.__alloyId15056.add($.__views.__alloyId15057);
    $.__views.__alloyId15058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15058"
    });
    $.__views.__alloyId15057.add($.__views.__alloyId15058);
    $.__views.__alloyId15059 = Ti.UI.createView({
        id: "__alloyId15059"
    });
    $.__views.__alloyId15059 && $.addTopLevelView($.__views.__alloyId15059);
    $.__views.__alloyId15060 = Ti.UI.createView({
        id: "__alloyId15060"
    });
    $.__views.__alloyId15059.add($.__views.__alloyId15060);
    $.__views.__alloyId15061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15061"
    });
    $.__views.__alloyId15060.add($.__views.__alloyId15061);
    $.__views.__alloyId15062 = Ti.UI.createView({
        id: "__alloyId15062"
    });
    $.__views.__alloyId15062 && $.addTopLevelView($.__views.__alloyId15062);
    $.__views.__alloyId15063 = Ti.UI.createView({
        id: "__alloyId15063"
    });
    $.__views.__alloyId15062.add($.__views.__alloyId15063);
    $.__views.__alloyId15064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15064"
    });
    $.__views.__alloyId15063.add($.__views.__alloyId15064);
    $.__views.__alloyId15065 = Ti.UI.createView({
        id: "__alloyId15065"
    });
    $.__views.__alloyId15065 && $.addTopLevelView($.__views.__alloyId15065);
    $.__views.__alloyId15066 = Ti.UI.createView({
        id: "__alloyId15066"
    });
    $.__views.__alloyId15065.add($.__views.__alloyId15066);
    $.__views.__alloyId15067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15067"
    });
    $.__views.__alloyId15066.add($.__views.__alloyId15067);
    $.__views.__alloyId15068 = Ti.UI.createView({
        id: "__alloyId15068"
    });
    $.__views.__alloyId15068 && $.addTopLevelView($.__views.__alloyId15068);
    $.__views.__alloyId15069 = Ti.UI.createView({
        id: "__alloyId15069"
    });
    $.__views.__alloyId15068.add($.__views.__alloyId15069);
    $.__views.__alloyId15070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15070"
    });
    $.__views.__alloyId15069.add($.__views.__alloyId15070);
    $.__views.__alloyId15071 = Ti.UI.createView({
        id: "__alloyId15071"
    });
    $.__views.__alloyId15071 && $.addTopLevelView($.__views.__alloyId15071);
    $.__views.__alloyId15072 = Ti.UI.createView({
        id: "__alloyId15072"
    });
    $.__views.__alloyId15071.add($.__views.__alloyId15072);
    $.__views.__alloyId15073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15073"
    });
    $.__views.__alloyId15072.add($.__views.__alloyId15073);
    $.__views.__alloyId15074 = Ti.UI.createView({
        id: "__alloyId15074"
    });
    $.__views.__alloyId15074 && $.addTopLevelView($.__views.__alloyId15074);
    $.__views.__alloyId15075 = Ti.UI.createView({
        id: "__alloyId15075"
    });
    $.__views.__alloyId15074.add($.__views.__alloyId15075);
    $.__views.__alloyId15076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15076"
    });
    $.__views.__alloyId15075.add($.__views.__alloyId15076);
    $.__views.__alloyId15077 = Ti.UI.createView({
        id: "__alloyId15077"
    });
    $.__views.__alloyId15077 && $.addTopLevelView($.__views.__alloyId15077);
    $.__views.__alloyId15078 = Ti.UI.createView({
        id: "__alloyId15078"
    });
    $.__views.__alloyId15077.add($.__views.__alloyId15078);
    $.__views.__alloyId15079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15079"
    });
    $.__views.__alloyId15078.add($.__views.__alloyId15079);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;