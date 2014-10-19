function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_173";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_173 = Ti.UI.createView({
        id: "widget_173"
    });
    $.__views.widget_173 && $.addTopLevelView($.__views.widget_173);
    $.__views.__alloyId2184 = Ti.UI.createView({
        id: "__alloyId2184"
    });
    $.__views.widget_173.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2184.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createView({
        id: "__alloyId2186"
    });
    $.__views.__alloyId2186 && $.addTopLevelView($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        id: "__alloyId2187"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
        id: "__alloyId2189"
    });
    $.__views.__alloyId2189 && $.addTopLevelView($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createView({
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        id: "__alloyId2192"
    });
    $.__views.__alloyId2192 && $.addTopLevelView($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createView({
        id: "__alloyId2195"
    });
    $.__views.__alloyId2195 && $.addTopLevelView($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createView({
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2197"
    });
    $.__views.__alloyId2196.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
        id: "__alloyId2198"
    });
    $.__views.__alloyId2198 && $.addTopLevelView($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createView({
        id: "__alloyId2201"
    });
    $.__views.__alloyId2201 && $.addTopLevelView($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createView({
        id: "__alloyId2202"
    });
    $.__views.__alloyId2201.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        id: "__alloyId2204"
    });
    $.__views.__alloyId2204 && $.addTopLevelView($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createView({
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2206"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createView({
        id: "__alloyId2207"
    });
    $.__views.__alloyId2207 && $.addTopLevelView($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createView({
        id: "__alloyId2208"
    });
    $.__views.__alloyId2207.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;