function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_17";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_17 = Ti.UI.createView({
        id: "widget_17"
    });
    $.__views.widget_17 && $.addTopLevelView($.__views.widget_17);
    $.__views.__alloyId2080 = Ti.UI.createView({
        id: "__alloyId2080"
    });
    $.__views.widget_17.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
        id: "__alloyId2082"
    });
    $.__views.__alloyId2082 && $.addTopLevelView($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createView({
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        id: "__alloyId2085"
    });
    $.__views.__alloyId2085 && $.addTopLevelView($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createView({
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2086.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createView({
        id: "__alloyId2088"
    });
    $.__views.__alloyId2088 && $.addTopLevelView($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createView({
        id: "__alloyId2089"
    });
    $.__views.__alloyId2088.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createView({
        id: "__alloyId2091"
    });
    $.__views.__alloyId2091 && $.addTopLevelView($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        id: "__alloyId2092"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        id: "__alloyId2094"
    });
    $.__views.__alloyId2094 && $.addTopLevelView($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createView({
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2095.add($.__views.__alloyId2096);
    $.__views.__alloyId2097 = Ti.UI.createView({
        id: "__alloyId2097"
    });
    $.__views.__alloyId2097 && $.addTopLevelView($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createView({
        id: "__alloyId2098"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createView({
        id: "__alloyId2100"
    });
    $.__views.__alloyId2100 && $.addTopLevelView($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createView({
        id: "__alloyId2101"
    });
    $.__views.__alloyId2100.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2102"
    });
    $.__views.__alloyId2101.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createView({
        id: "__alloyId2103"
    });
    $.__views.__alloyId2103 && $.addTopLevelView($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createView({
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2105);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;