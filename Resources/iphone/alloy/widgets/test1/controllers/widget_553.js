function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_553";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_553 = Ti.UI.createView({
        id: "widget_553"
    });
    $.__views.widget_553 && $.addTopLevelView($.__views.widget_553);
    $.__views.__alloyId13156 = Ti.UI.createView({
        id: "__alloyId13156"
    });
    $.__views.widget_553.add($.__views.__alloyId13156);
    $.__views.__alloyId13157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13157"
    });
    $.__views.__alloyId13156.add($.__views.__alloyId13157);
    $.__views.__alloyId13158 = Ti.UI.createView({
        id: "__alloyId13158"
    });
    $.__views.__alloyId13158 && $.addTopLevelView($.__views.__alloyId13158);
    $.__views.__alloyId13159 = Ti.UI.createView({
        id: "__alloyId13159"
    });
    $.__views.__alloyId13158.add($.__views.__alloyId13159);
    $.__views.__alloyId13160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13160"
    });
    $.__views.__alloyId13159.add($.__views.__alloyId13160);
    $.__views.__alloyId13161 = Ti.UI.createView({
        id: "__alloyId13161"
    });
    $.__views.__alloyId13161 && $.addTopLevelView($.__views.__alloyId13161);
    $.__views.__alloyId13162 = Ti.UI.createView({
        id: "__alloyId13162"
    });
    $.__views.__alloyId13161.add($.__views.__alloyId13162);
    $.__views.__alloyId13163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13163"
    });
    $.__views.__alloyId13162.add($.__views.__alloyId13163);
    $.__views.__alloyId13164 = Ti.UI.createView({
        id: "__alloyId13164"
    });
    $.__views.__alloyId13164 && $.addTopLevelView($.__views.__alloyId13164);
    $.__views.__alloyId13165 = Ti.UI.createView({
        id: "__alloyId13165"
    });
    $.__views.__alloyId13164.add($.__views.__alloyId13165);
    $.__views.__alloyId13166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13166"
    });
    $.__views.__alloyId13165.add($.__views.__alloyId13166);
    $.__views.__alloyId13167 = Ti.UI.createView({
        id: "__alloyId13167"
    });
    $.__views.__alloyId13167 && $.addTopLevelView($.__views.__alloyId13167);
    $.__views.__alloyId13168 = Ti.UI.createView({
        id: "__alloyId13168"
    });
    $.__views.__alloyId13167.add($.__views.__alloyId13168);
    $.__views.__alloyId13169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13169"
    });
    $.__views.__alloyId13168.add($.__views.__alloyId13169);
    $.__views.__alloyId13170 = Ti.UI.createView({
        id: "__alloyId13170"
    });
    $.__views.__alloyId13170 && $.addTopLevelView($.__views.__alloyId13170);
    $.__views.__alloyId13171 = Ti.UI.createView({
        id: "__alloyId13171"
    });
    $.__views.__alloyId13170.add($.__views.__alloyId13171);
    $.__views.__alloyId13172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13172"
    });
    $.__views.__alloyId13171.add($.__views.__alloyId13172);
    $.__views.__alloyId13173 = Ti.UI.createView({
        id: "__alloyId13173"
    });
    $.__views.__alloyId13173 && $.addTopLevelView($.__views.__alloyId13173);
    $.__views.__alloyId13174 = Ti.UI.createView({
        id: "__alloyId13174"
    });
    $.__views.__alloyId13173.add($.__views.__alloyId13174);
    $.__views.__alloyId13175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13175"
    });
    $.__views.__alloyId13174.add($.__views.__alloyId13175);
    $.__views.__alloyId13176 = Ti.UI.createView({
        id: "__alloyId13176"
    });
    $.__views.__alloyId13176 && $.addTopLevelView($.__views.__alloyId13176);
    $.__views.__alloyId13177 = Ti.UI.createView({
        id: "__alloyId13177"
    });
    $.__views.__alloyId13176.add($.__views.__alloyId13177);
    $.__views.__alloyId13178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13178"
    });
    $.__views.__alloyId13177.add($.__views.__alloyId13178);
    $.__views.__alloyId13179 = Ti.UI.createView({
        id: "__alloyId13179"
    });
    $.__views.__alloyId13179 && $.addTopLevelView($.__views.__alloyId13179);
    $.__views.__alloyId13180 = Ti.UI.createView({
        id: "__alloyId13180"
    });
    $.__views.__alloyId13179.add($.__views.__alloyId13180);
    $.__views.__alloyId13181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13181"
    });
    $.__views.__alloyId13180.add($.__views.__alloyId13181);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;