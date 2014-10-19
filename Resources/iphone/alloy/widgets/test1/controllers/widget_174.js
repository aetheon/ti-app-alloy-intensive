function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_174";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_174 = Ti.UI.createView({
        id: "widget_174"
    });
    $.__views.widget_174 && $.addTopLevelView($.__views.widget_174);
    $.__views.__alloyId2210 = Ti.UI.createView({
        id: "__alloyId2210"
    });
    $.__views.widget_174.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2211"
    });
    $.__views.__alloyId2210.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createView({
        id: "__alloyId2212"
    });
    $.__views.__alloyId2212 && $.addTopLevelView($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createView({
        id: "__alloyId2213"
    });
    $.__views.__alloyId2212.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2214"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createView({
        id: "__alloyId2215"
    });
    $.__views.__alloyId2215 && $.addTopLevelView($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createView({
        id: "__alloyId2216"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2217"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createView({
        id: "__alloyId2218"
    });
    $.__views.__alloyId2218 && $.addTopLevelView($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createView({
        id: "__alloyId2219"
    });
    $.__views.__alloyId2218.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createView({
        id: "__alloyId2221"
    });
    $.__views.__alloyId2221 && $.addTopLevelView($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createView({
        id: "__alloyId2222"
    });
    $.__views.__alloyId2221.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2223"
    });
    $.__views.__alloyId2222.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createView({
        id: "__alloyId2224"
    });
    $.__views.__alloyId2224 && $.addTopLevelView($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
        id: "__alloyId2225"
    });
    $.__views.__alloyId2224.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createView({
        id: "__alloyId2227"
    });
    $.__views.__alloyId2227 && $.addTopLevelView($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createView({
        id: "__alloyId2228"
    });
    $.__views.__alloyId2227.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
        id: "__alloyId2230"
    });
    $.__views.__alloyId2230 && $.addTopLevelView($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createView({
        id: "__alloyId2231"
    });
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2232"
    });
    $.__views.__alloyId2231.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createView({
        id: "__alloyId2233"
    });
    $.__views.__alloyId2233 && $.addTopLevelView($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createView({
        id: "__alloyId2234"
    });
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2235);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;