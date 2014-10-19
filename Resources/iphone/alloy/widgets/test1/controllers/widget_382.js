function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_382";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_382 = Ti.UI.createView({
        id: "widget_382"
    });
    $.__views.widget_382 && $.addTopLevelView($.__views.widget_382);
    $.__views.__alloyId8216 = Ti.UI.createView({
        id: "__alloyId8216"
    });
    $.__views.widget_382.add($.__views.__alloyId8216);
    $.__views.__alloyId8217 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8217"
    });
    $.__views.__alloyId8216.add($.__views.__alloyId8217);
    $.__views.__alloyId8218 = Ti.UI.createView({
        id: "__alloyId8218"
    });
    $.__views.__alloyId8218 && $.addTopLevelView($.__views.__alloyId8218);
    $.__views.__alloyId8219 = Ti.UI.createView({
        id: "__alloyId8219"
    });
    $.__views.__alloyId8218.add($.__views.__alloyId8219);
    $.__views.__alloyId8220 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8220"
    });
    $.__views.__alloyId8219.add($.__views.__alloyId8220);
    $.__views.__alloyId8221 = Ti.UI.createView({
        id: "__alloyId8221"
    });
    $.__views.__alloyId8221 && $.addTopLevelView($.__views.__alloyId8221);
    $.__views.__alloyId8222 = Ti.UI.createView({
        id: "__alloyId8222"
    });
    $.__views.__alloyId8221.add($.__views.__alloyId8222);
    $.__views.__alloyId8223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8223"
    });
    $.__views.__alloyId8222.add($.__views.__alloyId8223);
    $.__views.__alloyId8224 = Ti.UI.createView({
        id: "__alloyId8224"
    });
    $.__views.__alloyId8224 && $.addTopLevelView($.__views.__alloyId8224);
    $.__views.__alloyId8225 = Ti.UI.createView({
        id: "__alloyId8225"
    });
    $.__views.__alloyId8224.add($.__views.__alloyId8225);
    $.__views.__alloyId8226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8226"
    });
    $.__views.__alloyId8225.add($.__views.__alloyId8226);
    $.__views.__alloyId8227 = Ti.UI.createView({
        id: "__alloyId8227"
    });
    $.__views.__alloyId8227 && $.addTopLevelView($.__views.__alloyId8227);
    $.__views.__alloyId8228 = Ti.UI.createView({
        id: "__alloyId8228"
    });
    $.__views.__alloyId8227.add($.__views.__alloyId8228);
    $.__views.__alloyId8229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8229"
    });
    $.__views.__alloyId8228.add($.__views.__alloyId8229);
    $.__views.__alloyId8230 = Ti.UI.createView({
        id: "__alloyId8230"
    });
    $.__views.__alloyId8230 && $.addTopLevelView($.__views.__alloyId8230);
    $.__views.__alloyId8231 = Ti.UI.createView({
        id: "__alloyId8231"
    });
    $.__views.__alloyId8230.add($.__views.__alloyId8231);
    $.__views.__alloyId8232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8232"
    });
    $.__views.__alloyId8231.add($.__views.__alloyId8232);
    $.__views.__alloyId8233 = Ti.UI.createView({
        id: "__alloyId8233"
    });
    $.__views.__alloyId8233 && $.addTopLevelView($.__views.__alloyId8233);
    $.__views.__alloyId8234 = Ti.UI.createView({
        id: "__alloyId8234"
    });
    $.__views.__alloyId8233.add($.__views.__alloyId8234);
    $.__views.__alloyId8235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8235"
    });
    $.__views.__alloyId8234.add($.__views.__alloyId8235);
    $.__views.__alloyId8236 = Ti.UI.createView({
        id: "__alloyId8236"
    });
    $.__views.__alloyId8236 && $.addTopLevelView($.__views.__alloyId8236);
    $.__views.__alloyId8237 = Ti.UI.createView({
        id: "__alloyId8237"
    });
    $.__views.__alloyId8236.add($.__views.__alloyId8237);
    $.__views.__alloyId8238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8238"
    });
    $.__views.__alloyId8237.add($.__views.__alloyId8238);
    $.__views.__alloyId8239 = Ti.UI.createView({
        id: "__alloyId8239"
    });
    $.__views.__alloyId8239 && $.addTopLevelView($.__views.__alloyId8239);
    $.__views.__alloyId8240 = Ti.UI.createView({
        id: "__alloyId8240"
    });
    $.__views.__alloyId8239.add($.__views.__alloyId8240);
    $.__views.__alloyId8241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8241"
    });
    $.__views.__alloyId8240.add($.__views.__alloyId8241);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;