function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_936";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_936 = Ti.UI.createView({
        id: "widget_936"
    });
    $.__views.widget_936 && $.addTopLevelView($.__views.widget_936);
    $.__views.__alloyId24206 = Ti.UI.createView({
        id: "__alloyId24206"
    });
    $.__views.widget_936.add($.__views.__alloyId24206);
    $.__views.__alloyId24207 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24207"
    });
    $.__views.__alloyId24206.add($.__views.__alloyId24207);
    $.__views.__alloyId24208 = Ti.UI.createView({
        id: "__alloyId24208"
    });
    $.__views.__alloyId24208 && $.addTopLevelView($.__views.__alloyId24208);
    $.__views.__alloyId24209 = Ti.UI.createView({
        id: "__alloyId24209"
    });
    $.__views.__alloyId24208.add($.__views.__alloyId24209);
    $.__views.__alloyId24210 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24210"
    });
    $.__views.__alloyId24209.add($.__views.__alloyId24210);
    $.__views.__alloyId24211 = Ti.UI.createView({
        id: "__alloyId24211"
    });
    $.__views.__alloyId24211 && $.addTopLevelView($.__views.__alloyId24211);
    $.__views.__alloyId24212 = Ti.UI.createView({
        id: "__alloyId24212"
    });
    $.__views.__alloyId24211.add($.__views.__alloyId24212);
    $.__views.__alloyId24213 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24213"
    });
    $.__views.__alloyId24212.add($.__views.__alloyId24213);
    $.__views.__alloyId24214 = Ti.UI.createView({
        id: "__alloyId24214"
    });
    $.__views.__alloyId24214 && $.addTopLevelView($.__views.__alloyId24214);
    $.__views.__alloyId24215 = Ti.UI.createView({
        id: "__alloyId24215"
    });
    $.__views.__alloyId24214.add($.__views.__alloyId24215);
    $.__views.__alloyId24216 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24216"
    });
    $.__views.__alloyId24215.add($.__views.__alloyId24216);
    $.__views.__alloyId24217 = Ti.UI.createView({
        id: "__alloyId24217"
    });
    $.__views.__alloyId24217 && $.addTopLevelView($.__views.__alloyId24217);
    $.__views.__alloyId24218 = Ti.UI.createView({
        id: "__alloyId24218"
    });
    $.__views.__alloyId24217.add($.__views.__alloyId24218);
    $.__views.__alloyId24219 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24219"
    });
    $.__views.__alloyId24218.add($.__views.__alloyId24219);
    $.__views.__alloyId24220 = Ti.UI.createView({
        id: "__alloyId24220"
    });
    $.__views.__alloyId24220 && $.addTopLevelView($.__views.__alloyId24220);
    $.__views.__alloyId24221 = Ti.UI.createView({
        id: "__alloyId24221"
    });
    $.__views.__alloyId24220.add($.__views.__alloyId24221);
    $.__views.__alloyId24222 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24222"
    });
    $.__views.__alloyId24221.add($.__views.__alloyId24222);
    $.__views.__alloyId24223 = Ti.UI.createView({
        id: "__alloyId24223"
    });
    $.__views.__alloyId24223 && $.addTopLevelView($.__views.__alloyId24223);
    $.__views.__alloyId24224 = Ti.UI.createView({
        id: "__alloyId24224"
    });
    $.__views.__alloyId24223.add($.__views.__alloyId24224);
    $.__views.__alloyId24225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24225"
    });
    $.__views.__alloyId24224.add($.__views.__alloyId24225);
    $.__views.__alloyId24226 = Ti.UI.createView({
        id: "__alloyId24226"
    });
    $.__views.__alloyId24226 && $.addTopLevelView($.__views.__alloyId24226);
    $.__views.__alloyId24227 = Ti.UI.createView({
        id: "__alloyId24227"
    });
    $.__views.__alloyId24226.add($.__views.__alloyId24227);
    $.__views.__alloyId24228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24228"
    });
    $.__views.__alloyId24227.add($.__views.__alloyId24228);
    $.__views.__alloyId24229 = Ti.UI.createView({
        id: "__alloyId24229"
    });
    $.__views.__alloyId24229 && $.addTopLevelView($.__views.__alloyId24229);
    $.__views.__alloyId24230 = Ti.UI.createView({
        id: "__alloyId24230"
    });
    $.__views.__alloyId24229.add($.__views.__alloyId24230);
    $.__views.__alloyId24231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24231"
    });
    $.__views.__alloyId24230.add($.__views.__alloyId24231);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;