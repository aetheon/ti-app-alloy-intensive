function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_760";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_760 = Ti.UI.createView({
        id: "widget_760"
    });
    $.__views.widget_760 && $.addTopLevelView($.__views.widget_760);
    $.__views.__alloyId19136 = Ti.UI.createView({
        id: "__alloyId19136"
    });
    $.__views.widget_760.add($.__views.__alloyId19136);
    $.__views.__alloyId19137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19137"
    });
    $.__views.__alloyId19136.add($.__views.__alloyId19137);
    $.__views.__alloyId19138 = Ti.UI.createView({
        id: "__alloyId19138"
    });
    $.__views.__alloyId19138 && $.addTopLevelView($.__views.__alloyId19138);
    $.__views.__alloyId19139 = Ti.UI.createView({
        id: "__alloyId19139"
    });
    $.__views.__alloyId19138.add($.__views.__alloyId19139);
    $.__views.__alloyId19140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19140"
    });
    $.__views.__alloyId19139.add($.__views.__alloyId19140);
    $.__views.__alloyId19141 = Ti.UI.createView({
        id: "__alloyId19141"
    });
    $.__views.__alloyId19141 && $.addTopLevelView($.__views.__alloyId19141);
    $.__views.__alloyId19142 = Ti.UI.createView({
        id: "__alloyId19142"
    });
    $.__views.__alloyId19141.add($.__views.__alloyId19142);
    $.__views.__alloyId19143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19143"
    });
    $.__views.__alloyId19142.add($.__views.__alloyId19143);
    $.__views.__alloyId19144 = Ti.UI.createView({
        id: "__alloyId19144"
    });
    $.__views.__alloyId19144 && $.addTopLevelView($.__views.__alloyId19144);
    $.__views.__alloyId19145 = Ti.UI.createView({
        id: "__alloyId19145"
    });
    $.__views.__alloyId19144.add($.__views.__alloyId19145);
    $.__views.__alloyId19146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19146"
    });
    $.__views.__alloyId19145.add($.__views.__alloyId19146);
    $.__views.__alloyId19147 = Ti.UI.createView({
        id: "__alloyId19147"
    });
    $.__views.__alloyId19147 && $.addTopLevelView($.__views.__alloyId19147);
    $.__views.__alloyId19148 = Ti.UI.createView({
        id: "__alloyId19148"
    });
    $.__views.__alloyId19147.add($.__views.__alloyId19148);
    $.__views.__alloyId19149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19149"
    });
    $.__views.__alloyId19148.add($.__views.__alloyId19149);
    $.__views.__alloyId19150 = Ti.UI.createView({
        id: "__alloyId19150"
    });
    $.__views.__alloyId19150 && $.addTopLevelView($.__views.__alloyId19150);
    $.__views.__alloyId19151 = Ti.UI.createView({
        id: "__alloyId19151"
    });
    $.__views.__alloyId19150.add($.__views.__alloyId19151);
    $.__views.__alloyId19152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19152"
    });
    $.__views.__alloyId19151.add($.__views.__alloyId19152);
    $.__views.__alloyId19153 = Ti.UI.createView({
        id: "__alloyId19153"
    });
    $.__views.__alloyId19153 && $.addTopLevelView($.__views.__alloyId19153);
    $.__views.__alloyId19154 = Ti.UI.createView({
        id: "__alloyId19154"
    });
    $.__views.__alloyId19153.add($.__views.__alloyId19154);
    $.__views.__alloyId19155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19155"
    });
    $.__views.__alloyId19154.add($.__views.__alloyId19155);
    $.__views.__alloyId19156 = Ti.UI.createView({
        id: "__alloyId19156"
    });
    $.__views.__alloyId19156 && $.addTopLevelView($.__views.__alloyId19156);
    $.__views.__alloyId19157 = Ti.UI.createView({
        id: "__alloyId19157"
    });
    $.__views.__alloyId19156.add($.__views.__alloyId19157);
    $.__views.__alloyId19158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19158"
    });
    $.__views.__alloyId19157.add($.__views.__alloyId19158);
    $.__views.__alloyId19159 = Ti.UI.createView({
        id: "__alloyId19159"
    });
    $.__views.__alloyId19159 && $.addTopLevelView($.__views.__alloyId19159);
    $.__views.__alloyId19160 = Ti.UI.createView({
        id: "__alloyId19160"
    });
    $.__views.__alloyId19159.add($.__views.__alloyId19160);
    $.__views.__alloyId19161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19161"
    });
    $.__views.__alloyId19160.add($.__views.__alloyId19161);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;