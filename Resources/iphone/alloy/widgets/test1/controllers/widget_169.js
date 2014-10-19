function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_169";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_169 = Ti.UI.createView({
        id: "widget_169"
    });
    $.__views.widget_169 && $.addTopLevelView($.__views.widget_169);
    $.__views.__alloyId2054 = Ti.UI.createView({
        id: "__alloyId2054"
    });
    $.__views.widget_169.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2055"
    });
    $.__views.__alloyId2054.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createView({
        id: "__alloyId2056"
    });
    $.__views.__alloyId2056 && $.addTopLevelView($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2057.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createView({
        id: "__alloyId2059"
    });
    $.__views.__alloyId2059 && $.addTopLevelView($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createView({
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2061"
    });
    $.__views.__alloyId2060.add($.__views.__alloyId2061);
    $.__views.__alloyId2062 = Ti.UI.createView({
        id: "__alloyId2062"
    });
    $.__views.__alloyId2062 && $.addTopLevelView($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createView({
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2064"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createView({
        id: "__alloyId2065"
    });
    $.__views.__alloyId2065 && $.addTopLevelView($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createView({
        id: "__alloyId2066"
    });
    $.__views.__alloyId2065.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
        id: "__alloyId2068"
    });
    $.__views.__alloyId2068 && $.addTopLevelView($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createView({
        id: "__alloyId2071"
    });
    $.__views.__alloyId2071 && $.addTopLevelView($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createView({
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createView({
        id: "__alloyId2074"
    });
    $.__views.__alloyId2074 && $.addTopLevelView($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        id: "__alloyId2075"
    });
    $.__views.__alloyId2074.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createView({
        id: "__alloyId2077"
    });
    $.__views.__alloyId2077 && $.addTopLevelView($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createView({
        id: "__alloyId2078"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;