function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_171";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_171 = Ti.UI.createView({
        id: "widget_171"
    });
    $.__views.widget_171 && $.addTopLevelView($.__views.widget_171);
    $.__views.__alloyId2132 = Ti.UI.createView({
        id: "__alloyId2132"
    });
    $.__views.widget_171.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createView({
        id: "__alloyId2134"
    });
    $.__views.__alloyId2134 && $.addTopLevelView($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createView({
        id: "__alloyId2135"
    });
    $.__views.__alloyId2134.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2136"
    });
    $.__views.__alloyId2135.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
        id: "__alloyId2137"
    });
    $.__views.__alloyId2137 && $.addTopLevelView($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createView({
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2139"
    });
    $.__views.__alloyId2138.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createView({
        id: "__alloyId2140"
    });
    $.__views.__alloyId2140 && $.addTopLevelView($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createView({
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createView({
        id: "__alloyId2143"
    });
    $.__views.__alloyId2143 && $.addTopLevelView($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        id: "__alloyId2144"
    });
    $.__views.__alloyId2143.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createView({
        id: "__alloyId2146"
    });
    $.__views.__alloyId2146 && $.addTopLevelView($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        id: "__alloyId2147"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        id: "__alloyId2149"
    });
    $.__views.__alloyId2149 && $.addTopLevelView($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createView({
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2150.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createView({
        id: "__alloyId2152"
    });
    $.__views.__alloyId2152 && $.addTopLevelView($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createView({
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createView({
        id: "__alloyId2155"
    });
    $.__views.__alloyId2155 && $.addTopLevelView($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        id: "__alloyId2156"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;