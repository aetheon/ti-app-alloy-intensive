function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_692";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_692 = Ti.UI.createView({
        id: "widget_692"
    });
    $.__views.widget_692 && $.addTopLevelView($.__views.widget_692);
    $.__views.__alloyId17160 = Ti.UI.createView({
        id: "__alloyId17160"
    });
    $.__views.widget_692.add($.__views.__alloyId17160);
    $.__views.__alloyId17161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17161"
    });
    $.__views.__alloyId17160.add($.__views.__alloyId17161);
    $.__views.__alloyId17162 = Ti.UI.createView({
        id: "__alloyId17162"
    });
    $.__views.__alloyId17162 && $.addTopLevelView($.__views.__alloyId17162);
    $.__views.__alloyId17163 = Ti.UI.createView({
        id: "__alloyId17163"
    });
    $.__views.__alloyId17162.add($.__views.__alloyId17163);
    $.__views.__alloyId17164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17164"
    });
    $.__views.__alloyId17163.add($.__views.__alloyId17164);
    $.__views.__alloyId17165 = Ti.UI.createView({
        id: "__alloyId17165"
    });
    $.__views.__alloyId17165 && $.addTopLevelView($.__views.__alloyId17165);
    $.__views.__alloyId17166 = Ti.UI.createView({
        id: "__alloyId17166"
    });
    $.__views.__alloyId17165.add($.__views.__alloyId17166);
    $.__views.__alloyId17167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17167"
    });
    $.__views.__alloyId17166.add($.__views.__alloyId17167);
    $.__views.__alloyId17168 = Ti.UI.createView({
        id: "__alloyId17168"
    });
    $.__views.__alloyId17168 && $.addTopLevelView($.__views.__alloyId17168);
    $.__views.__alloyId17169 = Ti.UI.createView({
        id: "__alloyId17169"
    });
    $.__views.__alloyId17168.add($.__views.__alloyId17169);
    $.__views.__alloyId17170 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17170"
    });
    $.__views.__alloyId17169.add($.__views.__alloyId17170);
    $.__views.__alloyId17171 = Ti.UI.createView({
        id: "__alloyId17171"
    });
    $.__views.__alloyId17171 && $.addTopLevelView($.__views.__alloyId17171);
    $.__views.__alloyId17172 = Ti.UI.createView({
        id: "__alloyId17172"
    });
    $.__views.__alloyId17171.add($.__views.__alloyId17172);
    $.__views.__alloyId17173 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17173"
    });
    $.__views.__alloyId17172.add($.__views.__alloyId17173);
    $.__views.__alloyId17174 = Ti.UI.createView({
        id: "__alloyId17174"
    });
    $.__views.__alloyId17174 && $.addTopLevelView($.__views.__alloyId17174);
    $.__views.__alloyId17175 = Ti.UI.createView({
        id: "__alloyId17175"
    });
    $.__views.__alloyId17174.add($.__views.__alloyId17175);
    $.__views.__alloyId17176 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17176"
    });
    $.__views.__alloyId17175.add($.__views.__alloyId17176);
    $.__views.__alloyId17177 = Ti.UI.createView({
        id: "__alloyId17177"
    });
    $.__views.__alloyId17177 && $.addTopLevelView($.__views.__alloyId17177);
    $.__views.__alloyId17178 = Ti.UI.createView({
        id: "__alloyId17178"
    });
    $.__views.__alloyId17177.add($.__views.__alloyId17178);
    $.__views.__alloyId17179 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17179"
    });
    $.__views.__alloyId17178.add($.__views.__alloyId17179);
    $.__views.__alloyId17180 = Ti.UI.createView({
        id: "__alloyId17180"
    });
    $.__views.__alloyId17180 && $.addTopLevelView($.__views.__alloyId17180);
    $.__views.__alloyId17181 = Ti.UI.createView({
        id: "__alloyId17181"
    });
    $.__views.__alloyId17180.add($.__views.__alloyId17181);
    $.__views.__alloyId17182 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17182"
    });
    $.__views.__alloyId17181.add($.__views.__alloyId17182);
    $.__views.__alloyId17183 = Ti.UI.createView({
        id: "__alloyId17183"
    });
    $.__views.__alloyId17183 && $.addTopLevelView($.__views.__alloyId17183);
    $.__views.__alloyId17184 = Ti.UI.createView({
        id: "__alloyId17184"
    });
    $.__views.__alloyId17183.add($.__views.__alloyId17184);
    $.__views.__alloyId17185 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17185"
    });
    $.__views.__alloyId17184.add($.__views.__alloyId17185);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;