function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_589";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_589 = Ti.UI.createView({
        id: "widget_589"
    });
    $.__views.widget_589 && $.addTopLevelView($.__views.widget_589);
    $.__views.__alloyId14170 = Ti.UI.createView({
        id: "__alloyId14170"
    });
    $.__views.widget_589.add($.__views.__alloyId14170);
    $.__views.__alloyId14171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14171"
    });
    $.__views.__alloyId14170.add($.__views.__alloyId14171);
    $.__views.__alloyId14172 = Ti.UI.createView({
        id: "__alloyId14172"
    });
    $.__views.__alloyId14172 && $.addTopLevelView($.__views.__alloyId14172);
    $.__views.__alloyId14173 = Ti.UI.createView({
        id: "__alloyId14173"
    });
    $.__views.__alloyId14172.add($.__views.__alloyId14173);
    $.__views.__alloyId14174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14174"
    });
    $.__views.__alloyId14173.add($.__views.__alloyId14174);
    $.__views.__alloyId14175 = Ti.UI.createView({
        id: "__alloyId14175"
    });
    $.__views.__alloyId14175 && $.addTopLevelView($.__views.__alloyId14175);
    $.__views.__alloyId14176 = Ti.UI.createView({
        id: "__alloyId14176"
    });
    $.__views.__alloyId14175.add($.__views.__alloyId14176);
    $.__views.__alloyId14177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14177"
    });
    $.__views.__alloyId14176.add($.__views.__alloyId14177);
    $.__views.__alloyId14178 = Ti.UI.createView({
        id: "__alloyId14178"
    });
    $.__views.__alloyId14178 && $.addTopLevelView($.__views.__alloyId14178);
    $.__views.__alloyId14179 = Ti.UI.createView({
        id: "__alloyId14179"
    });
    $.__views.__alloyId14178.add($.__views.__alloyId14179);
    $.__views.__alloyId14180 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14180"
    });
    $.__views.__alloyId14179.add($.__views.__alloyId14180);
    $.__views.__alloyId14181 = Ti.UI.createView({
        id: "__alloyId14181"
    });
    $.__views.__alloyId14181 && $.addTopLevelView($.__views.__alloyId14181);
    $.__views.__alloyId14182 = Ti.UI.createView({
        id: "__alloyId14182"
    });
    $.__views.__alloyId14181.add($.__views.__alloyId14182);
    $.__views.__alloyId14183 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14183"
    });
    $.__views.__alloyId14182.add($.__views.__alloyId14183);
    $.__views.__alloyId14184 = Ti.UI.createView({
        id: "__alloyId14184"
    });
    $.__views.__alloyId14184 && $.addTopLevelView($.__views.__alloyId14184);
    $.__views.__alloyId14185 = Ti.UI.createView({
        id: "__alloyId14185"
    });
    $.__views.__alloyId14184.add($.__views.__alloyId14185);
    $.__views.__alloyId14186 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14186"
    });
    $.__views.__alloyId14185.add($.__views.__alloyId14186);
    $.__views.__alloyId14187 = Ti.UI.createView({
        id: "__alloyId14187"
    });
    $.__views.__alloyId14187 && $.addTopLevelView($.__views.__alloyId14187);
    $.__views.__alloyId14188 = Ti.UI.createView({
        id: "__alloyId14188"
    });
    $.__views.__alloyId14187.add($.__views.__alloyId14188);
    $.__views.__alloyId14189 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14189"
    });
    $.__views.__alloyId14188.add($.__views.__alloyId14189);
    $.__views.__alloyId14190 = Ti.UI.createView({
        id: "__alloyId14190"
    });
    $.__views.__alloyId14190 && $.addTopLevelView($.__views.__alloyId14190);
    $.__views.__alloyId14191 = Ti.UI.createView({
        id: "__alloyId14191"
    });
    $.__views.__alloyId14190.add($.__views.__alloyId14191);
    $.__views.__alloyId14192 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14192"
    });
    $.__views.__alloyId14191.add($.__views.__alloyId14192);
    $.__views.__alloyId14193 = Ti.UI.createView({
        id: "__alloyId14193"
    });
    $.__views.__alloyId14193 && $.addTopLevelView($.__views.__alloyId14193);
    $.__views.__alloyId14194 = Ti.UI.createView({
        id: "__alloyId14194"
    });
    $.__views.__alloyId14193.add($.__views.__alloyId14194);
    $.__views.__alloyId14195 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14195"
    });
    $.__views.__alloyId14194.add($.__views.__alloyId14195);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;