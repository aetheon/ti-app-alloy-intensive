function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_310";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_310 = Ti.UI.createView({
        id: "widget_310"
    });
    $.__views.widget_310 && $.addTopLevelView($.__views.widget_310);
    $.__views.__alloyId6162 = Ti.UI.createView({
        id: "__alloyId6162"
    });
    $.__views.widget_310.add($.__views.__alloyId6162);
    $.__views.__alloyId6163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6163"
    });
    $.__views.__alloyId6162.add($.__views.__alloyId6163);
    $.__views.__alloyId6164 = Ti.UI.createView({
        id: "__alloyId6164"
    });
    $.__views.__alloyId6164 && $.addTopLevelView($.__views.__alloyId6164);
    $.__views.__alloyId6165 = Ti.UI.createView({
        id: "__alloyId6165"
    });
    $.__views.__alloyId6164.add($.__views.__alloyId6165);
    $.__views.__alloyId6166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6166"
    });
    $.__views.__alloyId6165.add($.__views.__alloyId6166);
    $.__views.__alloyId6167 = Ti.UI.createView({
        id: "__alloyId6167"
    });
    $.__views.__alloyId6167 && $.addTopLevelView($.__views.__alloyId6167);
    $.__views.__alloyId6168 = Ti.UI.createView({
        id: "__alloyId6168"
    });
    $.__views.__alloyId6167.add($.__views.__alloyId6168);
    $.__views.__alloyId6169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6169"
    });
    $.__views.__alloyId6168.add($.__views.__alloyId6169);
    $.__views.__alloyId6170 = Ti.UI.createView({
        id: "__alloyId6170"
    });
    $.__views.__alloyId6170 && $.addTopLevelView($.__views.__alloyId6170);
    $.__views.__alloyId6171 = Ti.UI.createView({
        id: "__alloyId6171"
    });
    $.__views.__alloyId6170.add($.__views.__alloyId6171);
    $.__views.__alloyId6172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6172"
    });
    $.__views.__alloyId6171.add($.__views.__alloyId6172);
    $.__views.__alloyId6173 = Ti.UI.createView({
        id: "__alloyId6173"
    });
    $.__views.__alloyId6173 && $.addTopLevelView($.__views.__alloyId6173);
    $.__views.__alloyId6174 = Ti.UI.createView({
        id: "__alloyId6174"
    });
    $.__views.__alloyId6173.add($.__views.__alloyId6174);
    $.__views.__alloyId6175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6175"
    });
    $.__views.__alloyId6174.add($.__views.__alloyId6175);
    $.__views.__alloyId6176 = Ti.UI.createView({
        id: "__alloyId6176"
    });
    $.__views.__alloyId6176 && $.addTopLevelView($.__views.__alloyId6176);
    $.__views.__alloyId6177 = Ti.UI.createView({
        id: "__alloyId6177"
    });
    $.__views.__alloyId6176.add($.__views.__alloyId6177);
    $.__views.__alloyId6178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6178"
    });
    $.__views.__alloyId6177.add($.__views.__alloyId6178);
    $.__views.__alloyId6179 = Ti.UI.createView({
        id: "__alloyId6179"
    });
    $.__views.__alloyId6179 && $.addTopLevelView($.__views.__alloyId6179);
    $.__views.__alloyId6180 = Ti.UI.createView({
        id: "__alloyId6180"
    });
    $.__views.__alloyId6179.add($.__views.__alloyId6180);
    $.__views.__alloyId6181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6181"
    });
    $.__views.__alloyId6180.add($.__views.__alloyId6181);
    $.__views.__alloyId6182 = Ti.UI.createView({
        id: "__alloyId6182"
    });
    $.__views.__alloyId6182 && $.addTopLevelView($.__views.__alloyId6182);
    $.__views.__alloyId6183 = Ti.UI.createView({
        id: "__alloyId6183"
    });
    $.__views.__alloyId6182.add($.__views.__alloyId6183);
    $.__views.__alloyId6184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6184"
    });
    $.__views.__alloyId6183.add($.__views.__alloyId6184);
    $.__views.__alloyId6185 = Ti.UI.createView({
        id: "__alloyId6185"
    });
    $.__views.__alloyId6185 && $.addTopLevelView($.__views.__alloyId6185);
    $.__views.__alloyId6186 = Ti.UI.createView({
        id: "__alloyId6186"
    });
    $.__views.__alloyId6185.add($.__views.__alloyId6186);
    $.__views.__alloyId6187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6187"
    });
    $.__views.__alloyId6186.add($.__views.__alloyId6187);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;