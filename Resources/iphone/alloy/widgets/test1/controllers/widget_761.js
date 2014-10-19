function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_761";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_761 = Ti.UI.createView({
        id: "widget_761"
    });
    $.__views.widget_761 && $.addTopLevelView($.__views.widget_761);
    $.__views.__alloyId19162 = Ti.UI.createView({
        id: "__alloyId19162"
    });
    $.__views.widget_761.add($.__views.__alloyId19162);
    $.__views.__alloyId19163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19163"
    });
    $.__views.__alloyId19162.add($.__views.__alloyId19163);
    $.__views.__alloyId19164 = Ti.UI.createView({
        id: "__alloyId19164"
    });
    $.__views.__alloyId19164 && $.addTopLevelView($.__views.__alloyId19164);
    $.__views.__alloyId19165 = Ti.UI.createView({
        id: "__alloyId19165"
    });
    $.__views.__alloyId19164.add($.__views.__alloyId19165);
    $.__views.__alloyId19166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19166"
    });
    $.__views.__alloyId19165.add($.__views.__alloyId19166);
    $.__views.__alloyId19167 = Ti.UI.createView({
        id: "__alloyId19167"
    });
    $.__views.__alloyId19167 && $.addTopLevelView($.__views.__alloyId19167);
    $.__views.__alloyId19168 = Ti.UI.createView({
        id: "__alloyId19168"
    });
    $.__views.__alloyId19167.add($.__views.__alloyId19168);
    $.__views.__alloyId19169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19169"
    });
    $.__views.__alloyId19168.add($.__views.__alloyId19169);
    $.__views.__alloyId19170 = Ti.UI.createView({
        id: "__alloyId19170"
    });
    $.__views.__alloyId19170 && $.addTopLevelView($.__views.__alloyId19170);
    $.__views.__alloyId19171 = Ti.UI.createView({
        id: "__alloyId19171"
    });
    $.__views.__alloyId19170.add($.__views.__alloyId19171);
    $.__views.__alloyId19172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19172"
    });
    $.__views.__alloyId19171.add($.__views.__alloyId19172);
    $.__views.__alloyId19173 = Ti.UI.createView({
        id: "__alloyId19173"
    });
    $.__views.__alloyId19173 && $.addTopLevelView($.__views.__alloyId19173);
    $.__views.__alloyId19174 = Ti.UI.createView({
        id: "__alloyId19174"
    });
    $.__views.__alloyId19173.add($.__views.__alloyId19174);
    $.__views.__alloyId19175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19175"
    });
    $.__views.__alloyId19174.add($.__views.__alloyId19175);
    $.__views.__alloyId19176 = Ti.UI.createView({
        id: "__alloyId19176"
    });
    $.__views.__alloyId19176 && $.addTopLevelView($.__views.__alloyId19176);
    $.__views.__alloyId19177 = Ti.UI.createView({
        id: "__alloyId19177"
    });
    $.__views.__alloyId19176.add($.__views.__alloyId19177);
    $.__views.__alloyId19178 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19178"
    });
    $.__views.__alloyId19177.add($.__views.__alloyId19178);
    $.__views.__alloyId19179 = Ti.UI.createView({
        id: "__alloyId19179"
    });
    $.__views.__alloyId19179 && $.addTopLevelView($.__views.__alloyId19179);
    $.__views.__alloyId19180 = Ti.UI.createView({
        id: "__alloyId19180"
    });
    $.__views.__alloyId19179.add($.__views.__alloyId19180);
    $.__views.__alloyId19181 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19181"
    });
    $.__views.__alloyId19180.add($.__views.__alloyId19181);
    $.__views.__alloyId19182 = Ti.UI.createView({
        id: "__alloyId19182"
    });
    $.__views.__alloyId19182 && $.addTopLevelView($.__views.__alloyId19182);
    $.__views.__alloyId19183 = Ti.UI.createView({
        id: "__alloyId19183"
    });
    $.__views.__alloyId19182.add($.__views.__alloyId19183);
    $.__views.__alloyId19184 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19184"
    });
    $.__views.__alloyId19183.add($.__views.__alloyId19184);
    $.__views.__alloyId19185 = Ti.UI.createView({
        id: "__alloyId19185"
    });
    $.__views.__alloyId19185 && $.addTopLevelView($.__views.__alloyId19185);
    $.__views.__alloyId19186 = Ti.UI.createView({
        id: "__alloyId19186"
    });
    $.__views.__alloyId19185.add($.__views.__alloyId19186);
    $.__views.__alloyId19187 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19187"
    });
    $.__views.__alloyId19186.add($.__views.__alloyId19187);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;