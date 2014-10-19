function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_415";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_415 = Ti.UI.createView({
        id: "widget_415"
    });
    $.__views.widget_415 && $.addTopLevelView($.__views.widget_415);
    $.__views.__alloyId9178 = Ti.UI.createView({
        id: "__alloyId9178"
    });
    $.__views.widget_415.add($.__views.__alloyId9178);
    $.__views.__alloyId9179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9179"
    });
    $.__views.__alloyId9178.add($.__views.__alloyId9179);
    $.__views.__alloyId9180 = Ti.UI.createView({
        id: "__alloyId9180"
    });
    $.__views.__alloyId9180 && $.addTopLevelView($.__views.__alloyId9180);
    $.__views.__alloyId9181 = Ti.UI.createView({
        id: "__alloyId9181"
    });
    $.__views.__alloyId9180.add($.__views.__alloyId9181);
    $.__views.__alloyId9182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9182"
    });
    $.__views.__alloyId9181.add($.__views.__alloyId9182);
    $.__views.__alloyId9183 = Ti.UI.createView({
        id: "__alloyId9183"
    });
    $.__views.__alloyId9183 && $.addTopLevelView($.__views.__alloyId9183);
    $.__views.__alloyId9184 = Ti.UI.createView({
        id: "__alloyId9184"
    });
    $.__views.__alloyId9183.add($.__views.__alloyId9184);
    $.__views.__alloyId9185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9185"
    });
    $.__views.__alloyId9184.add($.__views.__alloyId9185);
    $.__views.__alloyId9186 = Ti.UI.createView({
        id: "__alloyId9186"
    });
    $.__views.__alloyId9186 && $.addTopLevelView($.__views.__alloyId9186);
    $.__views.__alloyId9187 = Ti.UI.createView({
        id: "__alloyId9187"
    });
    $.__views.__alloyId9186.add($.__views.__alloyId9187);
    $.__views.__alloyId9188 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9188"
    });
    $.__views.__alloyId9187.add($.__views.__alloyId9188);
    $.__views.__alloyId9189 = Ti.UI.createView({
        id: "__alloyId9189"
    });
    $.__views.__alloyId9189 && $.addTopLevelView($.__views.__alloyId9189);
    $.__views.__alloyId9190 = Ti.UI.createView({
        id: "__alloyId9190"
    });
    $.__views.__alloyId9189.add($.__views.__alloyId9190);
    $.__views.__alloyId9191 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9191"
    });
    $.__views.__alloyId9190.add($.__views.__alloyId9191);
    $.__views.__alloyId9192 = Ti.UI.createView({
        id: "__alloyId9192"
    });
    $.__views.__alloyId9192 && $.addTopLevelView($.__views.__alloyId9192);
    $.__views.__alloyId9193 = Ti.UI.createView({
        id: "__alloyId9193"
    });
    $.__views.__alloyId9192.add($.__views.__alloyId9193);
    $.__views.__alloyId9194 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9194"
    });
    $.__views.__alloyId9193.add($.__views.__alloyId9194);
    $.__views.__alloyId9195 = Ti.UI.createView({
        id: "__alloyId9195"
    });
    $.__views.__alloyId9195 && $.addTopLevelView($.__views.__alloyId9195);
    $.__views.__alloyId9196 = Ti.UI.createView({
        id: "__alloyId9196"
    });
    $.__views.__alloyId9195.add($.__views.__alloyId9196);
    $.__views.__alloyId9197 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9197"
    });
    $.__views.__alloyId9196.add($.__views.__alloyId9197);
    $.__views.__alloyId9198 = Ti.UI.createView({
        id: "__alloyId9198"
    });
    $.__views.__alloyId9198 && $.addTopLevelView($.__views.__alloyId9198);
    $.__views.__alloyId9199 = Ti.UI.createView({
        id: "__alloyId9199"
    });
    $.__views.__alloyId9198.add($.__views.__alloyId9199);
    $.__views.__alloyId9200 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9200"
    });
    $.__views.__alloyId9199.add($.__views.__alloyId9200);
    $.__views.__alloyId9201 = Ti.UI.createView({
        id: "__alloyId9201"
    });
    $.__views.__alloyId9201 && $.addTopLevelView($.__views.__alloyId9201);
    $.__views.__alloyId9202 = Ti.UI.createView({
        id: "__alloyId9202"
    });
    $.__views.__alloyId9201.add($.__views.__alloyId9202);
    $.__views.__alloyId9203 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9203"
    });
    $.__views.__alloyId9202.add($.__views.__alloyId9203);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;