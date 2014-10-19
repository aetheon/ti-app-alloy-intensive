function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_858";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_858 = Ti.UI.createView({
        id: "widget_858"
    });
    $.__views.widget_858 && $.addTopLevelView($.__views.widget_858);
    $.__views.__alloyId21944 = Ti.UI.createView({
        id: "__alloyId21944"
    });
    $.__views.widget_858.add($.__views.__alloyId21944);
    $.__views.__alloyId21945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21945"
    });
    $.__views.__alloyId21944.add($.__views.__alloyId21945);
    $.__views.__alloyId21946 = Ti.UI.createView({
        id: "__alloyId21946"
    });
    $.__views.__alloyId21946 && $.addTopLevelView($.__views.__alloyId21946);
    $.__views.__alloyId21947 = Ti.UI.createView({
        id: "__alloyId21947"
    });
    $.__views.__alloyId21946.add($.__views.__alloyId21947);
    $.__views.__alloyId21948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21948"
    });
    $.__views.__alloyId21947.add($.__views.__alloyId21948);
    $.__views.__alloyId21949 = Ti.UI.createView({
        id: "__alloyId21949"
    });
    $.__views.__alloyId21949 && $.addTopLevelView($.__views.__alloyId21949);
    $.__views.__alloyId21950 = Ti.UI.createView({
        id: "__alloyId21950"
    });
    $.__views.__alloyId21949.add($.__views.__alloyId21950);
    $.__views.__alloyId21951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21951"
    });
    $.__views.__alloyId21950.add($.__views.__alloyId21951);
    $.__views.__alloyId21952 = Ti.UI.createView({
        id: "__alloyId21952"
    });
    $.__views.__alloyId21952 && $.addTopLevelView($.__views.__alloyId21952);
    $.__views.__alloyId21953 = Ti.UI.createView({
        id: "__alloyId21953"
    });
    $.__views.__alloyId21952.add($.__views.__alloyId21953);
    $.__views.__alloyId21954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21954"
    });
    $.__views.__alloyId21953.add($.__views.__alloyId21954);
    $.__views.__alloyId21955 = Ti.UI.createView({
        id: "__alloyId21955"
    });
    $.__views.__alloyId21955 && $.addTopLevelView($.__views.__alloyId21955);
    $.__views.__alloyId21956 = Ti.UI.createView({
        id: "__alloyId21956"
    });
    $.__views.__alloyId21955.add($.__views.__alloyId21956);
    $.__views.__alloyId21957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21957"
    });
    $.__views.__alloyId21956.add($.__views.__alloyId21957);
    $.__views.__alloyId21958 = Ti.UI.createView({
        id: "__alloyId21958"
    });
    $.__views.__alloyId21958 && $.addTopLevelView($.__views.__alloyId21958);
    $.__views.__alloyId21959 = Ti.UI.createView({
        id: "__alloyId21959"
    });
    $.__views.__alloyId21958.add($.__views.__alloyId21959);
    $.__views.__alloyId21960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21960"
    });
    $.__views.__alloyId21959.add($.__views.__alloyId21960);
    $.__views.__alloyId21961 = Ti.UI.createView({
        id: "__alloyId21961"
    });
    $.__views.__alloyId21961 && $.addTopLevelView($.__views.__alloyId21961);
    $.__views.__alloyId21962 = Ti.UI.createView({
        id: "__alloyId21962"
    });
    $.__views.__alloyId21961.add($.__views.__alloyId21962);
    $.__views.__alloyId21963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21963"
    });
    $.__views.__alloyId21962.add($.__views.__alloyId21963);
    $.__views.__alloyId21964 = Ti.UI.createView({
        id: "__alloyId21964"
    });
    $.__views.__alloyId21964 && $.addTopLevelView($.__views.__alloyId21964);
    $.__views.__alloyId21965 = Ti.UI.createView({
        id: "__alloyId21965"
    });
    $.__views.__alloyId21964.add($.__views.__alloyId21965);
    $.__views.__alloyId21966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21966"
    });
    $.__views.__alloyId21965.add($.__views.__alloyId21966);
    $.__views.__alloyId21967 = Ti.UI.createView({
        id: "__alloyId21967"
    });
    $.__views.__alloyId21967 && $.addTopLevelView($.__views.__alloyId21967);
    $.__views.__alloyId21968 = Ti.UI.createView({
        id: "__alloyId21968"
    });
    $.__views.__alloyId21967.add($.__views.__alloyId21968);
    $.__views.__alloyId21969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21969"
    });
    $.__views.__alloyId21968.add($.__views.__alloyId21969);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;